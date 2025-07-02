var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const passport = require('passport');
// const City = require('./models/city'); // Import the City model
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "heyheyehhdd"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;




// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var expressSession = require('express-session');
// var passport = require('passport');
// const City = require('./routes/city'); // Import the City model

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var app = express();

// // List of 30 predefined cities
// const cities = [
//   'City 1', 'City 2', 'City 3', 'City 4', 'City 5',
//   'City 6', 'City 7', 'City 8', 'City 9', 'City 10',
//   'City 11', 'City 12', 'City 13', 'City 14', 'City 15',
//   'City 16', 'City 17', 'City 18', 'City 19', 'City 20',
//   'City 21', 'City 22', 'City 23', 'City 24', 'City 25',
//   'City 26', 'City 27', 'City 28', 'City 29', 'City 30'
// ];

// // Function to insert cities if they don't already exist
// async function createCities() {
//   try {
//     const existingCities = await City.find();
//     if (existingCities.length === 0) { // If no cities exist in the DB
//       for (const cityName of cities) {
//         await City.create({ name: cityName }); // Create the city
//       }
//       console.log('Cities have been added to the database.');
//     } else {
//       console.log('Cities already exist in the database.');
//     }
//   } catch (err) {
//     console.error('Error inserting cities:', err);
//   }
// }

// // Call this function when the app starts to ensure cities are added
// createCities();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(expressSession({
//   resave: false,
//   saveUninitialized: false,
//   secret: "heyheyehhdd"
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(usersRouter.serializeUser());
// passport.deserializeUser(usersRouter.deserializeUser());

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
