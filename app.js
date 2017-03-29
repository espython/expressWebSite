var express = require('express');
var exphbs  = require('express-handlebars');
var Router = require('./controllers/routes');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var multer = require('multer');
var uploading = require('./controllers/uploading');
var app = express();


mongoose.connect('mongodb://localhost/users');

require('./controllers/passport')(passport);

app.set('views', __dirname + '/views')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


//set my routes
//==============================================================================

Router(app,passport);
uploading(app);

//==============================================================================

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
