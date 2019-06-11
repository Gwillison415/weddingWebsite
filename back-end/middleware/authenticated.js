const jwt = require('jsonwebtoken');

var verifyLoggedIn = function(req, res, next) {
  jwt.verify(req.cookies.authTokenSillyWilly, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      console.log('authentication err');
      res.status(401).json({ error: 'Not Logged In' });
    } else {
      next();
    }
  });
}

module.exports = verifyLoggedIn;
