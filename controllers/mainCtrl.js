var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');


module.exports ={

//USER FUNCTIONS//
  getName : (req, res) => {
    res.json({name : user.name})
  },

  putName: (req, res) => {
    user.name = req.body;
    res.send(user.name)
  },

  getLocation : function(req, res) {
    res.status(200).json({location : user.location})
  },

  putLocation: (req, res) => {
    user.location = req.body;
    res.send(user.location)
  },

  getOccupations : function(req, res) {
    if (req.query.order === 'asc'){
      return res.send(user.occupations.sort())
    }
    else if (req.query.order === 'desc'){
      return res.send(user.occupations.sort().reverse())
    }

    res.send({occupations : user.occupations});

  },

  getOccupationsLatest : function(req, res) {
    res.status(200).json({latest : user.occupations.slice(-1)})
  },

  postOccupations: function (req, res) {
    user.occupations.push(req.body);
    res.send(user.occupations);
  },

  getHobbies : function(req, res) {
    res.status(200).json({hobbies : user.hobbies})
  },

  getHobbieType : function(req, res) {
    var results = []
    for (key in user.hobbies){
      if (user.hobbies[key].type === req.params.type  ) {
        results.push({hobbies : user.hobbies[key]})
      }
    }
    res.send(results);
  },

  postHobbies: function (req, res) {
    user.hobbies.push(req.body);
    res.send(user.hobbies);
  },

  getFamily : function(req, res) {
    var results = []
    if (req.query.relation){
      for (key in user.family){
        if (user.family[key].relation === req.query.relation  ) {
          results.push({family : user.family[key]})
        }
      }
      res.send(results);
    }

    res.json({family : user.family})
  },

  getFamilyGender : function(req, res) {
    var results = []
    for (key in user.family){
      if (user.family[key].gender === req.params.gender  ) {
        results.push({family : user.family[key]})
      }
    }
    res.send(results);

  },

  postFamily: function (req, res) {
    user.family.push(req.body);
    res.send(user.family);
  },

  getRestaurants : function(req, res) {
    var results = []
    if(req.query.rating){
      for (key in user.restaurants){
        if (user.restaurants[key].rating >= req.query.rating) {
          results.push(user.restaurants[key])
        }
      }
       res.send(results)
    }
    res.json({restaurants : user.restaurants});
  },

  getRestaurantsName : function(req, res) {
    var results = []
    for (key in user.restaurants){
      if (user.restaurants[key].name === req.params.name  ) {
        results.push({restaurants : user.restaurants[key]})
      }
    }
    res.send(results);
  },

  postRestaurants: function (req, res) {
    user.restaurants.push(req.body);
    res.send(user.restaurants);
  },


//skillz FUNCTIONS//
  getSkillz : function (req, res) {
    var results = []
    if (req.query.experience){
      for (key in skillz){
        if (skillz[key].experience === req.query.experience) {
          results.push({skillz : skillz[key]})
        }
      }
      res.send(results);
    }
    res.send({skillz:skillz});
  },

  postSkillz : function (req, res) {
    skillz.push(req.body);
    res.send({skillz: skillz})
  },

  //secrets FUNCTIONS//

  getSecrets : function (req, res) {
    res.send({secrets:secrets.secrets})
  }

};
