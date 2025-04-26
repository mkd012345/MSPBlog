const nodemailer = require("nodemailer");

const sendContactMail = async (req, res) => {
  const { to, from, subject, message, country } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",  
      auth: {
        user: "dubeymanthan728@gmail.com", // Admin Gmail
        pass: "xrvq svrf koqd abqz", // Gmail App Password
      },
    });

    // Mail options for sending the email
    const mailOptions = {
      from: from,  
      to: "dubeymanthan728@gmail.com",  
      subject: subject, 
      text: `From: ${from}\nCountry: ${country}\n\nMessage:\n${message}`,  
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
