const jwt = require('jsonwebtoken');

function verifyLoggedIn(req, res, next) {
  jwt.verify(req.cookies.gettingHitched, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      res.status(401).json({ error: 'Not Logged In' });
    } else {
      next();
    }
  });
}

module.exports = verifyLoggedIn;
