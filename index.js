const nodemailer = require('nodemailer');
const express = require('express');
const body_parser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.static('dist'));
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.get('/',(req,res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anasramadanking@gmail.com',
    pass: 'szrb kmkc tgyp whyp',
  },
});


app.post('/send',(req,res) => {



const mailOptions = {
    from: '"Game IDEA !" <anasramadanking@gmail.com>',
    to: 'anasramadanking@gmail.com',
    subject: 'Email From Game IDEA Website ',
    html: `<!DOCTYPE html>
    <html>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500;800&display=swap" rel="stylesheet">
      <style>
        body {
          direction:rtl;
          font-family: 'Tajawal', sans-serif;
        }
        h1 {
          color:#673AB7;
          font-size:3em;
        }
        p {
          margin-top:30px;
          font-size:1.5em;
          line-height:2;
          color:#009688;
        }
      </style>
    </head>
    <body>
        <h1>${req.body.name}</h1>
        <p>${req.body.idea}</p>
    </body>
    </html>`,
  };


transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
  });

  console.log(req.body);

  res.send(`شكرا يا <span style="color:#009688;font-size:18px;font-weight:bold;">${req.body.name}</span>`)

})


app.listen(3000,() => {
  console.log('HELLO !');
})