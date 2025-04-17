const nodemailer = require("nodemailer");

const sendContactMail = async (req, res) => {
  const { to, from, subject, message, country } = req.body;

  try {
    // Gmail transporter setup with your admin credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Use your email service (Gmail here)
      auth: {
        user: "dubeymanthan728@gmail.com", // Admin Gmail
        pass: "xrvq svrf koqd abqz", // Gmail App Password
      },
    });

    // Mail options for sending the email
    const mailOptions = {
      from: from,  // User's email (dynamic)
      to: "dubeymanthan728@gmail.com",  // Admin's static email
      subject: subject, // Subject dynamically passed
      text: `From: ${from}\nCountry: ${country}\n\nMessage:\n${message}`,  // Message dynamically passed
    };

    // Sending the email
    await transporter.sendMail(mailOptions);
    
    // Responding with success
    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Email sending error:", error);
    
    // Responding with failure
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
};

module.exports = { sendContactMail };
