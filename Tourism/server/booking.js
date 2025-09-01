// Node.js/Express backend for booking form integration
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Configure your email transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email provider
  auth: {
    user: 'khushal45y@gmail.com',
    pass: 'your-app-password'
  }
});

app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, service, date, people, requests } = req.body;
  const mailOptions = {
    from: email,
    to: 'khushal45y@gmail.com',
    subject: `New Booking: ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nPeople: ${people}\nRequests: ${requests}`
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Booking received!' });
  } catch (error) {
    console.error('Booking email error:', error);
    res.status(500).json({ success: false, message: 'Error sending booking.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Booking server running on port ${PORT}`));
