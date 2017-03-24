var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();

app.set('views', __dirname + '/views')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));
app.get('/', function (req, res) {
  res.render('home');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
