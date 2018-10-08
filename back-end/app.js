var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = process.env.PORT || 3005;
const cors = require('cors');
const verifyLoggedIn = require('./utils/auth')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const userLogin = require('./controllers/account/login');
const signup = require('./controllers/account/signup');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

var corsOptions = {
  origin: 'http://localhost:3005',
  credentials: true,
};

app.use(cors(corsOptions));
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use('/', indexRouter);
app.use('/api', signup) //For User Sign Up and for confirmation of account
app.use('/api', userLogin) //User Login
app.use(verifyLoggedIn)
app.use('/users', usersRouter);

app.listen(PORT, () => {
	console.log(`Express server listening on port ${PORT}`);
})
module.exports = app;
