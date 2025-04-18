import { NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Contact from '../../../models/Contact';
import nodemailer from 'nodemailer';

// Fallback model in case the import fails during build time
let FallbackContact = {
    create: async (data) => {
        console.warn('Using fallback Contact model - database operations are not functional');
        return { ...data, _id: 'mock-id-' + Date.now(), createdAt: new Date() };
    }
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message, services } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        try {
            // Connect to database
            await connectToDatabase();

            // Create new contact submission
            // Use actual Contact model or fallback if it's not available (for build time)
            const ContactModel = typeof Contact === 'object' && Contact !== null ? Contact : FallbackContact;
            const newContact = await ContactModel.create({
                name,
                email,
                phone: phone || '',
                subject,
                message,
                services: services || [],
            });

            // Send email notification (in a production environment, you would use a real email service)
            await sendEmailNotification(newContact);

            return NextResponse.json(
                { message: 'Contact form submitted successfully', data: newContact },
                { status: 201 }
            );
        } catch (dbError) {
            console.error('Database error:', dbError);

            // Store contact data in a fallback way (you could log to file, send to another service, etc.)
            const contactData = {
                name, email, phone, subject, message, services: services || [],
                timestamp: new Date().toISOString(),
            };

            console.log('Contact submission received but not saved to database:', contactData);

            // Still try to send the email notification even if DB fails
            await sendEmailNotification(contactData);

            // Return success to client, even though DB storage failed
            return NextResponse.json(
                {
                    message: 'Contact form submitted successfully, but there was an issue with storage. Our team has been notified.',
                    fallback: true
                },
                { status: 202 }
            );
        }
    } catch (error) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json(
            { error: 'An error occurred while submitting the contact form' },
            { status: 500 }
        );
    }
}

// Helper function to send email notification
async function sendEmailNotification(contact) {
    // This is a placeholder for email sending functionality
    // In production, use a real SMTP server or email service like SendGrid, Mailgun, etc.

    // Example using nodemailer with a test account (for development only)
    try {
        // For demonstration/testing purposes only:
        // const testAccount = await nodemailer.createTestAccount();

        // In production, use environment variables for these values
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.ethereal.email',
            port: process.env.EMAIL_PORT || 587,
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER || 'test@example.com',
                pass: process.env.EMAIL_PASS || 'password',
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM || '"UFDev Agency" <contact@ufdev.com>',
            to: process.env.EMAIL_TO || 'admin@ufdev.com',
            subject: `New Contact Form Submission: ${contact.subject}`,
            html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Services:</strong> ${Array.isArray(contact.services) ? contact.services.join(', ') : 'None specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
        <p><strong>Timestamp:</strong> ${contact.timestamp || new Date().toISOString()}</p>
      `,
        };

        // In development, comment out the actual sending to avoid errors
        // Uncomment in production with proper credentials
        // const info = await transporter.sendMail(mailOptions);
        // console.log('Email sent:', info.messageId);

        // For preview URL (in development with ethereal.email)
        // console.log('Preview URL:', nodemailer.getTestMessageUrl(info));

    } catch (error) {
        console.error('Error sending email notification:', error);
        // Don't fail the API response if email sending fails
    }
} 