import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

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
                console.log('MongoDB connected successfully');
                return mongoose;
            })
            .catch(err => {
                console.error('MongoDB connection error:', err);
                throw new Error('Failed to connect to MongoDB. Check your connection string.');
            });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        console.error('Error establishing MongoDB connection:', error);
        throw error;
    }
}

export default connectToDatabase;