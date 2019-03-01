
var express = require('express');
const helmet = require('helmet')

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const PORT = process.env.PORT || 3005;
const PORT = 3005;
const cors = require('cors');
// const verifyLoggedIn = require('./utils/auth') //NOTE no idea why fs isn't reading auth file
const jwt = require('jsonwebtoken');

var usersRouter = require('./controllers/account/users');
const userLogin = require('./controllers/account/login');
const signup = require('./controllers/account/signup');

var app = express();
app.use(helmet())
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var verifyLoggedIn = function(req, res, next) {
  jwt.verify(req.cookies.authTokenSillyWilly, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      res.status(401).json({ error: 'Not Logged In' });
    } else {
      next();
    }
  });
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// const allowCrossDomain = function (req, res, next) {
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   if (req.method == 'OPTIONS') {
//     res.sendStatus(200);
//   } else {
//     next();
//   }
// };
// app.use(allowCrossDomain);

var corsOptions = {
  // origin: 'http://www.sillywilliwedding.com',
  origin: 'http://localhost:3005',
  credentials: true,
};

app.use(cors(corsOptions));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use('/api', signup) //For User Sign Up and for confirmation of account
app.use('/api', userLogin) //User Login

// app.use(verifyLoggedIn)
app.use('/user', verifyLoggedIn, usersRouter);

app.listen(PORT, () => {
	console.log(`Express server listening on port ${PORT}`);
})
module.exports = app;
