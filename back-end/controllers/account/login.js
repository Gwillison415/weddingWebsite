const express = require('express');
const app = express();
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../../utils/nodemailer').transporter;
const signupEmailOptions = require('../../utils/nodemailer').signupEmailOptions;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/login')
  .post((req,res) => {
    const knex = require('../../knex.js')
    knex('main_guests').where('email', req.body.email.toLowerCase())
    .then(user => {
      let compare = user[0].hashed_password;
      return bcrypt.compare(req.body.password, compare)
    })
    .then(verified => {
      return knex('main_guests').where('email', req.body.email.toLowerCase())
    })
    .then(userToSend => {
      const claim = { userId: userToSend.id };
      const token = jwt.sign(claim, process.env.JWT_KEY, {
      expiresIn:  '30 days'
      })
      delete userToSend[0].hashed_password
      if (userToSend[0].confirmed === false) {
        return res.status(400).json({ error: 'Please Confirm Your Account' })
      } else {
        res.cookie('authTokenSillyWilly', token, {
          domain: process.env.DOMAIN_FOR_COOKIES || 'localhost',
        });
        console.log('toke', token, 'userToSend[0]',userToSend[0]);
        console.log('process.env.DOMAIN_FOR_COOKIES', process.env.DOMAIN_FOR_COOKIES);
        return res.status(200).json(userToSend[0])
      }
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({ error: 'Invalid Email or Password'})
    })
  })

module.exports = router;
