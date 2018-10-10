var express = require('express');
const app = express();


var router = express.Router();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/:id?')
  .post((req,res) => {
    console.log('req.query', req.query);
console.log('req.params' ,req.params);
console.log('req.cookies' ,req.cookies);
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;
  const rsvpStatus = req.query.rsvp;
  // knex('main_guests').where('id', userId)
  // .then(mainGuest =>{
  //   console.log('mainGuest', mainGuest[0]);
  //   // return knex.('dependent_guests').where()
  // })

  knex.select('*').from('dependent_guests')
  .where({main_guest: name})
  .then(dependent_guests => {
    console.log('dependent_guests==', dependent_guests);
  })

  res.send('respond with a resource');
});


module.exports = router;


  // knex.select('*').from('main_guests').rightJoin('dependent_guests', 'main_guests.name', 'dependent_guests.')
