const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { config } = require('dotenv');
const path = require('path');

// Load environment variables
config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Contact schema
const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    services: {
        type: [String],
        default: [],
    },
    status: {
        type: String,
        enum: ['new', 'in-progress', 'completed'],
        default: 'new',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.model('Contact', ContactSchema);

// Send email function
async function sendEmail(contactData) {
    // For production, replace with actual SMTP credentials
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission: ${contactData.subject}`,
        html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone || 'N/A'}</p>
      <p><strong>Subject:</strong> ${contactData.subject}</p>
      <p><strong>Services:</strong> ${contactData.services.join(', ') || 'None specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.messageId);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

// API Routes
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message, services } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // Create new contact
        const newContact = new Contact({
            name,
            email,
            phone: phone || '',
            subject,
            message,
            services: services || [],
        });

        // Save to database
        await newContact.save();

        // Send email notification
        sendEmail(newContact)
            .then((emailSent) => {
                if (emailSent) {
                    console.log('Email notification sent successfully');
                } else {
                    console.log('Email notification failed, but contact was saved');
                }
            })
            .catch((err) => {
                console.error('Error in email sending process:', err);
            });

        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: newContact,
        });
    } catch (error) {
        console.error('Error submitting contact form:', error);
        res.status(500).json({ error: 'An error occurred while submitting the contact form' });
    }
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('.next'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '.next', 'server', 'pages', 'index.html'));
    });
}

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// To properly handle termination
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('MongoDB connection closed due to app termination');
        process.exit(0);
    });
}); 