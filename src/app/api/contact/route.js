import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

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

        // Connect to database
        await connectToDatabase();

        // Create new contact submission
        const newContact = await Contact.create({
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
        <p><strong>Services:</strong> ${contact.services.join(', ') || 'None specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
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