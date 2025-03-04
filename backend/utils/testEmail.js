import { sendEmail } from "./sendEmail.js";

sendEmail({
    to: "click2ashishgzp@gmail.com",
    subject: "Test Email",
    text: "This is a test email",
    html: "<p>This is a test email</p>"
})
    .then(res => {
        console.log('Test email sent successfully')
    })
    .catch(err => {
        console.error('Failed to send test email', err.message)
    })

// This is a demo js file to test sending email using nodejs nodemailer package
// run this file -> node testEmail.js