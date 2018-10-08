const nodemailer = require('nodemailer');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'keenewillison2019@gmail.com',
    pass: process.env.EMAIL_PASSWORD,
  },
});

const signupEmailOptions = (email, url, token) => {
  const mailObject =
    {
      from: '"Cora and Grant" <keenewillison2019@gmail.com>',
      to: email, // list of receivers
      subject: 'Confirm your account for our weddin\' thang',
      html: `<h1> Welcome to my crappy web skillz! </h1>
      <p>Please use the link below to confirm your account</p>
      <a href="http://${url}/api/signup/confirmation/${token}">Click here to confirm</a>
      <p>If you believe you have received this email in error please contact your senator. or something... </p>`,
      dsn: {
        id: 'signup',
        return: 'headers',
        notify: ['success', 'failure', 'delay'],
        recipient: 'keenewillison2019@gmail.com',
      },
    };
  return mailObject;
};

const resetPasswordOptions = (email, url, token) => {
  const mailObject =
    {
      from: '"Team SillyWilly" <keenewillison2019@gmail.com>',
      to: email,
      subject: 'Your Reset Password Requested',
      html: `<h1> Get it together!! we can't be making this database instance to allllll this extra work just because you didn't want to use a password manager!  </h1>
      <p>Ok i guess you might as well... side eye</p>
      <p>Please use the link below to take you to a screen to change your password</p>
      <a href=${url}?resetModal=open&id=${token}>Click here change password</a>
      <p>If you believe you have received this email in error please contact info@home-slice.io </p>`,
      dsn: {
        id: 'resetPassword',
        return: 'headers',
        notify: ['success', 'failure', 'delay'],
        recipient: 'keenewillison2019@gmail.com',
      },
    };
    return mailObject
}

module.exports = {
  transporter,
  signupEmailOptions,
  resetPasswordOptions,
}
