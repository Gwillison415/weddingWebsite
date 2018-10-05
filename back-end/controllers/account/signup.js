const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../../utils/nodemailer').transporter;
const signupEmailOptions = require('../../utils/nodemailer').signupEmailOptions;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/signup')
  .post((req, res) => {
    console.log('0 post request.body = ', req.body);
    const knex = require('../../knex.js')

    bcrypt.hash(req.body.password, 12)
    .then(hashed_password => {
      console.log('0 hashed_password=', hashed_password);
      return knex('main_guests')
      .where('email', req.body.email)
      .update('hashed_password', hashed_password);
    })
    .then((truthy) => {
      console.log("1 passed the update! truthy=",truthy);
    // create token to send with confirm email to confirm the email.
      if (truthy) {
        return knex('main_guests')
        .where('email', req.body.email)
      } else {
        throw new Error("User does not exist - You're not on our list!")
      }
    })
    .then(updatedUser => {
      const user = { userId: updatedUser[0].id };
      const token = jwt.sign(user, process.env.JWT_KEY, {
        expiresIn: '30 days',
      });
      console.log('2 sending a token', token);
      return token;
    })
    .then((tokenToSend) => {
      // send the email confirmation
      const signUpEmail = signupEmailOptions(req.body.email, process.env.HOST, tokenToSend);
      transporter.sendMail(signUpEmail, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      })
    })
    .then(() => {
      res.status(200).json({accountConfirmation: 'Please check your email to confirm your account.'})
    })
    .catch(err => {
      res.status(400).json('Email is already registered')
    })
  })
//process.env.CLIENT is the front end and is needed for development. For dev its localhost:3006/ and production it would be /
router.route('/signup/confirmation/:token')
  .get((req, res, next) => {
    const knex = require('../../knex.js')
    //Takes the token which is comprised of the user ID and decrypts it
    jwt.verify(req.params.token, process.env.JWT_KEY, (err, payload) => {
      if (err) {
        res.status(401).json('Unauthorized');
        return res.redirect(`${process.env.CLIENT}`)
      } else {
        //If valid token it takes changes the confirmed flag to true
        return knex('main_guests').where('id', Number(payload.userId)).update({confirmed: true})
        .then(() => {
          return res.redirect(`${process.env.CLIENT}`)
        })
        .catch(err => res.redirect(`${process.env.CLIENT}`))
      }
    })
  })


  module.exports = router;
