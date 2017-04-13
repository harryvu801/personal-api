var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var app = express();

app.use(middleware.addHeaders);
app.use(bodyParser.json());

//user FUNCTIONS//
app.get('/name', mainCtrl.getName)
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getOccupationsLatest)
app.get('/hobbies', mainCtrl.getHobbies)
app.get('/hobbies/:type', mainCtrl.getHobbieType)
app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamilyGender)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurantsName)
app.put('/name', mainCtrl.putName)
app.put('/location', mainCtrl.putLocation)
app.post('/hobbies', mainCtrl.postHobbies)
app.post('/occupations', mainCtrl.postOccupations)
app.post('/family', mainCtrl.postFamily)
app.post('/restaurants', mainCtrl.postRestaurants)

//skillz FUNCTIONS//
app.get('/skillz', mainCtrl.getSkillz)
app.post('/skillz', middleware.generateId, mainCtrl.postSkillz);

//secrets function//
app.get('/secrets/:un/:pw', middleware.verifyUser, mainCtrl.getSecrets);


app.listen(3000, function() {
  console.log('listening');
})
