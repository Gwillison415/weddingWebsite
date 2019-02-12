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
  // knex('main_guests').where('id', userId)
  // .then(mainGuest =>{
  //    return knex.('dependent_guests').where()
  // })

  knex('main_guests')
  .where({full_name: name})
  .update({
    first_rsvp: rsvpStatus
  })
  .returning(['first_rsvp', 'additional_guest_count','rehersal_invite', 'rehersal_rsvp'])
  .then(updatedGuest => {
   res.status(200).send(updatedGuest[0])
 })
});
router.route('/2ndrsvp').post((req, res) => {
  const knex = require('../../knex.js')
  const {name, RSVP} = req.body;

  knex('main_guests')
  .where({full_name: name})
  .update({
    final_rsvp: RSVP
  })
  .returning(['final_rsvp', 'additional_guest_count','rehersal_invite', 'rehersal_rsvp'])
  .then(updatedGuest => {
   res.status(200).send(updatedGuest[0])
 })
});

router.route('/meals').post((req, res) => {
  const knex = require('../../knex.js')
  console.log('req.body', req.body);

  const { fullName, mealType, mainGuest, allergies } = req.body;
  if (!fullName) {
    //we have a mainGuest and don't need to query the dependent guest table

    knex('main_guests')
      .where({ full_name: mainGuest})
    .update({
      meal_pref: mealType,
      food_allergies: allergies
    })
      .returning(['meal_pref','food_allergies'])
    .then(updatedGuest => {
      // console.log('updatedGuest===', updatedGuest[0]);
     res.status(200).send(updatedGuest[0])
   })
  }
  // 'first_rsvp', 'additional_guest_count', 'rehersal_invite', 'rehersal_rsvp', 'poll_q1', 
  // res.send(201)
})
router.route('/arsvp').post((req, res) => {
  const knex = require('../../knex.js')
  // console.log('req.body', req.body);

  const {userName, accomodations} = req.body;
  // const accomodations = req.body.accomodations;
  // console.log('req.body username==', userName, "accomodations==", accomodations);
  knex('main_guests')
  .where({full_name: userName})
  .update({
    poll_q1: accomodations
  })
  .returning(['first_rsvp', 'additional_guest_count','rehersal_invite', 'rehersal_rsvp', 'poll_q1'])
  .then(updatedGuest => {
    // console.log('updatedGuest===', updatedGuest[0]);
   res.status(200).send(updatedGuest[0])
 })
  // res.send(201)
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
    .where({full_name: dependentGuest, main_guest: mainGuest})
    .update({
      rsvp: rsvpStatus
    })
    .returning(['full_name', 'rsvp','rehersal_invite', 'rehersal_rsvp'])
    .then(updatedGuest => {
     res.status(200).send(updatedGuest[0])
   })
  } else if (rsvpType =='final_rsvp') {
    knex('dependent_guests')
    .where({full_name: dependentGuest, main_guest: mainGuest})
    .update({
      final_rsvp: rsvpStatus
    })
    .returning(['full_name', 'rsvp','rehersal_invite', 'rehersal_rsvp'])
    .then(updatedGuest => {
     res.status(200).send(updatedGuest[0])
   })
  } else if (rsvpType =='rehersal_invite') {
    knex('dependent_guests')
    .where({full_name: dependentGuest, main_guest: mainGuest})
    .update({
      rehersal_invite: rsvpStatus
    })
    .returning(['full_name', 'rsvp','rehersal_invite', 'rehersal_rsvp'])
  .then(updatedGuest => {
   res.status(200).send(updatedGuest[0])
 })
  } else if (rsvpType =='rehersal_rsvp') {
    knex('dependent_guests')
    .where({full_name: dependentGuest, main_guest: mainGuest})
    .update({
      rehersal_rsvp: rsvpStatus
    })
    .returning(['full_name', 'rsvp','rehersal_invite', 'rehersal_rsvp'])

  .then(updatedGuest => {
   res.status(200).send(updatedGuest[0])
 })
  }
//    | final_rsvp | rehersal_rsvp | rehersal_invite
// Object.assign({}, {  `${rsvpType}`: rsvpStatus})



});

router.route('/dependents/:id').get((req, res) => {
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;

  knex.select('*').from('dependent_guests')
  .where({main_guest: name})
  .then(dependent_guests => {
     return res.status(200).json(dependent_guests)
  })
});

module.exports = router;
