const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/mail', (req, res) => {
  const address = process.env.MAIL_ADDRESS;
  const pass = process.env.MAIL_PASS;

  if (address && pass) {
    const from = req.body.from;
    const subject = req.body.subject;
    const body = req.body.body;
    if (from && subject && body) {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'avior.uberspace.de',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: address,
          pass: pass
        }
      });

      // prepare mail body
      let text = ''
      body.forEach(item => {
        text += item.label + ': ' + item.value + '\n'
      })
      let html = ''
      body.forEach(item => {
        html += item.label + ': ' + item.value.replace(/\n/g, '<br>') + '<br>'
      })

      // setup email data
      let mailOptions = {
        to: address,
        from,
        subject,
        text,
        html
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          res.status(400);
          res.send(err);
        } else {
          res.status(200);
          res.send(info);
        }
      });
    } else {
      res.status(400);
      res.send('Missing form data. (from/subject/body)');
    }
  } else {
    res.status(400);
    res.send('No mail account set.');
  }
});

module.exports = {
  path: '/api',
  handler: app
}
