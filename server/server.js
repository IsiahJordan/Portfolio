const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const config = require('./auth.js');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { message } = req.body;
  console.log("Recieved message");

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.EMAIL,
      pass: config.PASS,
    },
  });

 try {
    await transporter.sendMail({
      from: `"Portfolio Contact" {process.env.EMAIL}`,
      to: config.EMAIL,
      subject: 'Someone is interested',
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

