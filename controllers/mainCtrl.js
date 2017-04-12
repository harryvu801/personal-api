var user = require('../user.js');

var mainCtrl = module.mainCtrl = {};
module.exports ={
getName : (req, res) => {
  res.json({name : user.name})
},

getLocation : function(req, res) {
  res.status(200).json({location : user.location})
},

getOccupations : function(req, res) {
  res.status(200).json({occupations : user.occupations})
},

getOccupationsLatest : function(req, res) {
  res.status(200).json({latest : user.occupations.slice(-1)})
},

getHobbies : function(req, res) {
  res.status(200).json({hobbies : user.hobbies})
},

getHobbieType : function(req, res) {
  res.status(200).json({htype : user.hobbies.type})
},

getFamily : function(req, res) {
  res.status(200).json({family : user.family})
},

getFamilyGender : function(req, res) {
  res.status(200).json({fgender : user.family.gender})
},

getRestaurants : function(req, res) {
  res.status(200).json({restaurants : user.restaurants})
},

getRestaurantsName : function(req, res) {
  res.status(200).json({rname : user.restaurants.name})
},
}
