var express = require('express');
var exphbs  = require('express-handlebars');
var Router = require('./controllers/routes');
var app = express();

app.set('views', __dirname + '/views')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));

//set my routes
//==============================================================================

Router(app);

//==============================================================================

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
