import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { user_name, user_email, user_phone, user_company, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set up email data
    const mailOptions = {
      from: user_email, // The sender's email address
      to: process.env.EMAIL_USER, // Your email address
      subject: `New Contact from ${user_name}`,
      text: `
        Name: ${user_name}
        Email: ${user_email}
        Phone: ${user_phone}
        Company: ${user_company}
        Message: ${message}
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
