var express = require('express');

var router = express.Router();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/1strsvp/:id?').post((req, res) => {
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;
  const rsvpStatus = req.query.rsvp;

  knex('main_guests')
    .where({
      full_name: name
    })
    .update({
      first_rsvp: rsvpStatus
    })
    .returning(['first_rsvp', 'additional_guest_count', 'rehersal_invite', 'rehersal_rsvp'])
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })
});
router.route('/2ndrsvp').post((req, res) => {
  const knex = require('../../knex.js')
  const {
    name,
    RSVP
  } = req.body;

  knex('main_guests')
    .where({
      full_name: name
    })
    .update({
      final_rsvp: RSVP
    })
    .returning(['final_rsvp', 'additional_guest_count', 'rehersal_invite', 'rehersal_rsvp'])
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })
});

router.route('/arsvp').post((req, res) => {
  const knex = require('../../knex.js')
  const {
    userName,
    accomodations
  } = req.body;
  knex('main_guests')
    .where({
      full_name: userName
    })
    .update({
      poll_q1: accomodations
    })
    .returning(['first_rsvp', 'additional_guest_count', 'rehersal_invite', 'rehersal_rsvp', 'poll_q1'])
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })
})
router.route('/drsvp/dependents').post((req, res) => {

  const knex = require('../../knex.js')
  const rsvpType = req.query.type;
  const mainGuest = req.body.mainGuest
  const dependentGuest = req.body.dependentGuest;
  const rsvpStatus = req.body.rsvp;
  const rehersalInvite = req.body.rehersalInvite ? req.body.rehersalInvite : null;
  if (rsvpType == 'rsvp') {
    knex('dependent_guests')
      .where({
        full_name: dependentGuest,
        main_guest: mainGuest
      })
      .update({
        rsvp: rsvpStatus
      })
      .returning(['full_name', 'rsvp', 'rehersal_invite', 'rehersal_rsvp'])
      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  } else if (rsvpType == 'final_rsvp') {
    knex('dependent_guests')
      .where({
        full_name: dependentGuest,
        main_guest: mainGuest
      })
      .update({
        final_rsvp: rsvpStatus
      })
      .returning(['full_name', 'rsvp', 'rehersal_invite', 'rehersal_rsvp'])
      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  } else if (rsvpType == 'rehersal_invite') {
    knex('dependent_guests')
      .where({
        full_name: dependentGuest,
        main_guest: mainGuest
      })
      .update({
        rehersal_invite: rsvpStatus
      })
      .returning(['full_name', 'rsvp', 'rehersal_invite', 'rehersal_rsvp'])
      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  } else if (rsvpType == 'rehersal_rsvp') {
    knex('dependent_guests')
      .where({
        full_name: dependentGuest,
        main_guest: mainGuest
      })
      .update({
        rehersal_rsvp: rsvpStatus
      })
      .returning(['full_name', 'rsvp', 'rehersal_invite', 'rehersal_rsvp'])

      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  }


});

router.route('/dependents/:id').get((req, res) => {
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;

  knex.select('*').from('dependent_guests')
    .where({
      main_guest: name
    })
    .then(dependent_guests => {
      return res.status(200).json(dependent_guests)
    })
});

module.exports = router;
