import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function sendEmail({ to, subject, text, html }) {
    try {
        // configuring gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // defining email options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text,
            html
        }

        const info = await transporter.sendMail(mailOptions);

        console.log('Message sent successfully', info.messageId);
        console.log('Message sent to: ', to);
    } catch (error) {
        console.error('Failed to send an email', error.message);
    }

}