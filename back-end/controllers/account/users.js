var express = require('express');

var router = express.Router();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

router.route('/dependents/:id').get((req, res) => {
  const knex = require('../../knex.js')
  const userId = req.params.id;
  const name = req.query.name;
  knex.select('*').from('dependent_guests')
    .where({ main_guest: name })
    .then(dependent_guests => {
      return res.status(200).json(dependent_guests)
    })
});

// this route blocks usage of all other routes - gotta cut off rsvp's sometime
router.use('/', (req, res) => {
  res.status(200).send({ error: 'Responses can no longer be submitted'})
})
router.use('/', (req, res) => {
  res.status(200).send({ error: 'Responses can no longer be submitted'})
})
// this route blocks usage of all other routes - gotta cut off rsvp's sometime


router.route('/1strsvp').post((req, res) => {
  const knex = require('../../knex.js')
  const name = req.body.name;
  const rsvpStatus = req.body.RSVP;

  knex('main_guests')
    .where({ full_name: name })
    .update({
      first_rsvp: rsvpStatus
    })
    .returning(['first_rsvp'])
    .then(updatedField => {
      res.status(200).send(updatedField[0])
    })
});
router.route('/2ndrsvp').post((req, res) => {
  const knex = require('../../knex.js')
  const { name, RSVP, type } = req.body;
  if (type === 'final_rsvp') {
    knex('main_guests')
      .where({ full_name: name })
      .update({
        final_rsvp: RSVP
      })
      .returning(['final_rsvp'])
      .then(updatedField => {
        res.status(200).send(updatedField[0])
      })

  } else if (type === 'rehersal_rsvp') {
    knex('main_guests')
      .where({ full_name: name })
      .update({
        rehersal_rsvp: RSVP
      })
      .returning(['rehersal_rsvp'])
      .then(updatedField => {
        res.status(200).send(updatedField[0])
      })
  } else {
    res.status(403).send('rsvp type not found')
  }
});
// router.route('/rehersalrsvp').post((req, res) => {
//   const knex = require('../../knex.js')
//   const { name, RSVP } = req.body;

//   knex('main_guests')
//     .where({ full_name: name })
//     .update({
//       rehersal_rsvp: RSVP
//     })
//     .returning(['rehersal_rsvp'])
//     .then(updatedField => {
//       res.status(200).send(updatedField[0])
//     })
// });

router.route('/meals').post((req, res) => {
  const knex = require('../../knex.js')
  const { mealType, mainGuest, allergies } = req.body;
  knex('main_guests')
    .where({ full_name: mainGuest })
    .update({
      meal_pref: mealType,
      food_allergies: allergies
    }, '*')
    .then(updatedGuest => {
      delete updatedGuest[0].hashed_password
      res.status(200).send(updatedGuest[0])
    })

})

router.route('/dependents/meals').post((req, res) => {
  const knex = require('../../knex.js')
  const { fullName, mealType, allergies } = req.body;
  knex('dependent_guests')
    .where({ full_name: fullName })
    .update(
      {
        meal_pref: mealType,
        food_allergies: allergies
      }, '*')
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })
})
router.route('/arsvp').post((req, res) => {
  const knex = require('../../knex.js')

  const { userName, accomodations } = req.body;
  knex('main_guests')
    .where({ full_name: userName })
    .update({
      poll_q1: accomodations
    })
    .returning(['poll_q1'])
    .then(updatedField => {
      res.status(200).send(updatedField[0])
    })

})
router.route('/bbq').post((req, res) => {
  const knex = require('../../knex.js')

  const { RSVP, full_name } = req.body;
  knex('main_guests')
    .where({ full_name })
    .update({
      poll_q2: RSVP
    })
    .returning(['poll_q2'])
    .then(updatedField => {
      res.status(200).send(updatedField[0])
    })

})
router.route('/dependents/bbq').post((req, res) => {
  const knex = require('../../knex.js')

  const { RSVP, full_name } = req.body;
  knex('dependent_guests')
    .where({ full_name })
    .update({
      poll_q2: RSVP
    }, '*')
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })

})
router.route('/brunch').post((req, res) => {
  const knex = require('../../knex.js')

  const { RSVP, full_name } = req.body;
  knex('main_guests')
    .where({ full_name })
    .update({
      poll_q3: RSVP
    })
    .returning(['poll_q3'])
    .then(updatedField => {
      res.status(200).send(updatedField[0])
    })

})
router.route('/dependents/brunch').post((req, res) => {
  const knex = require('../../knex.js')

  const { RSVP, full_name } = req.body;
  knex('dependent_guests')
    .where({ full_name })
    .update({
      poll_q3: RSVP
    }, '*')
    .then(updatedGuest => {
      res.status(200).send(updatedGuest[0])
    })

})
router.route('/drsvp/dependents').post((req, res) => {
  const knex = require('../../knex.js')
  const rsvpType = req.body.type;
  const mainGuest = req.body.mainGuest
  const dependentGuest = req.body.dependentGuest;
  const rsvpStatus = req.body.RSVP;

  if (rsvpType == 'rsvp') { // initial
    knex('dependent_guests')
      .where({ full_name: dependentGuest, main_guest: mainGuest })
      .update({
        rsvp: rsvpStatus
      }, '*')
      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  } else if (rsvpType == 'final_rsvp') {
    knex('dependent_guests')
      .where({ full_name: dependentGuest, main_guest: mainGuest })
      .update({
        final_rsvp: rsvpStatus
      }, '*')
      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  } else if (rsvpType == 'rehersal_rsvp') {
    knex('dependent_guests')
      .where({ full_name: dependentGuest, main_guest: mainGuest })
      .update({
        rehersal_rsvp: rsvpStatus
      }, '*')

      .then(updatedGuest => {
        res.status(200).send(updatedGuest[0])
      })
  }
});



module.exports = router;
