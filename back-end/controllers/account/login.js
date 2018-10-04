const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-as-promised');
const transporter = require('../../helpers/nodemailer-setup').transporter;
const signupEmailOptions = require('../../helpers/nodemailer-setup').signupEmailOptions;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/login')
  .post((req,res) => {
    const knex = require('../../knex.js')
    knex('users').where('email', req.body.email)
    .then(user => {
      let compare = user[0].hashed_password;
      return bcrypt.compare(req.body.password, compare)
    })
    .then(verified => {
      return knex('main_guests').where('email', req.body.email)
    })
    .then(userToSend => {
      const claim = { userId: userToSend.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
      expiresIn:  Math.floor(Date.now() / 1000) + (60 * 60* 24)
      })
      delete userToSend[0].hashed_password
      if (userToSend[0].confirmed === false) {
        return res.status(400).json({ error: 'Please Confirm Your Account' })
      } else {
        res.cookie('authTokenSillyWilly', token, {
          domain: process.env.DOMAIN_FOR_COOKIES || 'localhost',
        });
        return res.status(200).json(userToSend[0])
      }
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({ error: 'Invalid Email or Password'})
    })
  })
