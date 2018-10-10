const jwt = require('jsonwebtoken');

var verifyLoggedIn = function(req, res, next) {
  console.log('hit middleware?');
  jwt.verify(req.cookies.authTokenSillyWilly, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      console.log('authentication err');
      res.status(401).json({ error: 'Not Logged In' });
    } else {
      console.log('user is authenticated');
      next();
    }
  });
}

module.exports = verifyLoggedIn;
