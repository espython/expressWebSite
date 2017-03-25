var User = require('../models/users');

module.exports = function(app, passport){

app.get('/',function(req,res){

  res.render('home');

});

app.get('/404', function(req, res){
  res.render('404', { message: req.flash('signupMessage') });
});


app.post('/signup',passport.authenticate('local-signup',{
  successRedirect: '/',
  failureRedirect: '404',
  failureFlash: true
}));

app.get('/login', function(req, res){
  res.render('login', { message: req.flash('loginMessage') });
});
app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true
}));





}//End of main function
