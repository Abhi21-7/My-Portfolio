import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmailController = async (req, res) => {
  try {
    const { Name, Email, Tel, Subject, Msg } = req.body;

    if (!Name || !Email || !Tel || !Subject || !Msg) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const mail = {
      from: Email,
      to: process.env.SMTP_TO_EMAIL,
      subject: Subject,
      text: Msg,
      html: `
        <h1>Portfolio Contact</h1>
        <ul>
          <li><strong>Name:</strong> ${Name}</li>
          <li><strong>Email:</strong> ${Email}</li>
          <li><strong>Phone:</strong> ${Tel}</li>
          <li><strong>Subject:</strong> ${Subject}</li>
          <li><strong>Message:</strong> ${Msg}</li>
        </ul>
      `,
    };

    const info = await transporter.sendMail(mail);

     return res.status(200).json({
      success: true,
      message: "Email sent successfully!"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email."
    });
  }
};

export default sendEmailController;
