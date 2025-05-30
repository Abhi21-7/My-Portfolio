import nodemailer from 'nodemailer';

const sendEmailController = async (req, res) => {
  try {
    const { Name, Email, Msg } = req.body;

    if (!Name || !Email || !Msg) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO_EMAIL,
      subject: "Portfolio Contact Form",
      replyTo: Email,
      text: `Name: ${Name}\nEmail: ${Email}\nMessage: ${Msg}`,
      html: `
        <h1>Portfolio Contact</h1>
        <ul>
          <li><strong>Name:</strong> ${Name}</li>
          <li><strong>Email:</strong> ${Email}</li>
          <li><strong>Message:</strong> ${Msg}</li>
        </ul>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: "Failed to send email.", error: error.message });
  }
};

export default sendEmailController;