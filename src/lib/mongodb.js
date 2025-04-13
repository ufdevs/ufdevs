import mongoose from 'mongoose';

// Get MongoDB URI from environment or use a demo value for build-time only
// This will ensure builds complete, but the actual site will not function properly without a real connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://demo:demo@cluster0.mongodb.net/demo?retryWrites=true&w=majority';

// For build time or when real credentials aren't available, we'll still build but warn
const isRealConnection = !MONGODB_URI.includes('demo:demo@cluster0.mongodb.net/demo');

// In development, provide a more helpful error message
if (!MONGODB_URI) {
    if (process.env.NODE_ENV === 'development') {
        console.error('⚠️ MONGODB_URI environment variable is not defined');
        console.error('Please create a .env.local file with MONGODB_URI=your_connection_string');
        console.error('For development, you can use a MongoDB Atlas free tier database');
    }
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts)
            .then((mongoose) => {
                if (isRealConnection) {
                    console.log('MongoDB connected successfully');
                } else {
                    console.warn('⚠️ Using demo MongoDB connection - contact form submissions will not be saved');
                    console.warn('Set MONGODB_URI in your Vercel project settings');
                }
                return mongoose;
            })
            .catch(err => {
                console.error('MongoDB connection error:', err);
                if (!isRealConnection) {
                    console.warn('Using demo connection string. Please set up a real MongoDB connection in production.');
                    // Return a mock connection object to allow build to complete
                    return { connection: { models: {} } };
                }
                throw new Error('Failed to connect to MongoDB. Check your connection string.');
            });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.error('Error establishing MongoDB connection:', error);
        // For builds, we want to continue even with connection errors
        if (process.env.NODE_ENV === 'production' && process.env.VERCEL) {
            console.warn('Continuing build despite MongoDB connection error');
            return { connection: { models: {} } }; // Return mock connection
        }
        throw error;
    }
}

export default connectToDatabase;