const express = require('express');
const nodemailer = require('nodemailer');
const fs = require('fs');
const app = express();

require('dotenv').config({path: __dirname + '/../.env'})

app.use(express.json());

app.get('/data', (req, res) => {
  const data = JSON.parse(fs.readFileSync(__dirname + '/data/data.json', {encoding: 'utf-8'}));
  res.json(data);
})

app.post('/data', (req, res) => {
  const data = req.body.data
  const key = req.body.key

  if (key === process.env.ADMIN_KEY) {
    fs.copyFileSync(__dirname + '/data/data.json', __dirname + '/data/data-' + (new Date().getTime()) + '.json');
    fs.writeFileSync(__dirname + '/data/data.json', JSON.stringify(data, null, 2));
    res.status(200);
    res.send('data updated');
  } else {
    res.status(403);
    res.send('forbidden');
  }
})

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
