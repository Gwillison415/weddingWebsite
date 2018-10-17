var express = require('express');

var router = express.Router();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/rsvp/:id?').post((req, res) => {
  console.log('req.query', req.query);
  console.log('req.params', req.params);
  console.log('req.cookies', req.cookies);
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;
  const rsvpStatus = req.query.rsvp;
  // knex('main_guests').where('id', userId)
  // .then(mainGuest =>{
  //   console.log('mainGuest', mainGuest[0]);
  //    return knex.('dependent_guests').where()
  // })

  knex('main_guests')
  .where({full_name: name})
  .update({
    first_rsvp: rsvpStatus
  })
  .returning(['first_rsvp', 'additional_guest_count','rehersal_invite', 'rehersal_rsvp'])
  .then(updatedGuest => {
    console.log('updatedGuest===', updatedGuest[0]);
    res.status(200).send(updatedGuest[0])})
});
router.route('/:id').get((req, res) => {
  console.log('req.query', req.query);
  console.log('req.params', req.params);
  const userId = req.params.id;
  const knex = require('../../knex.js')
  const name = req.query.name;

  // knex('main_guests').where('id', userId)
  // .then(mainGuest =>{
  //   console.log('mainGuest', mainGuest[0]);
  //    return knex.('dependent_guests').where()
  // })

  knex.select('*').from('dependent_guests')
  .where({main_guest: name})
  .then(dependent_guests => {
    console.log('dependent_guests==', dependent_guests);
     return res.status(200).json(dependent_guests)
  })
});

module.exports = router;

// knex.select('*').from('main_guests').rightJoin('dependent_guests', 'main_guests.name', 'dependent_guests.')
