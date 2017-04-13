var user = {
  name: "harry",
  location: "utah",
  occupations: ["Pimp","Code Wizard"],
  hobbies: [
    {
      name: "ridin dirty",
      type: "habit"
    },
    {
      name: "blazin",
      type: "habit"
    },
    {
      name: "dank memes",
      type: "public service"
    }
  ],
  family: [
    {
      name: "Ma",
      relation: "mother",
      gender: "female"
    },
    {
      name: "Pa",
      relation: "father",
      gender: "male"
    },{
      name: "Bro",
      relation: "brother",
      gender: "male"
    }
  ],
  restaurants: [
    {
      name: "Arby's",
      type: "fastfood",
      rating: 11
    },
    {
      name: "cafe rio",
      type: "mexican",
      rating: 12
    },
    {
      name: "what the Pho",
      type: "asian",
      rating: 20
    }
  ]
};

module.exports = user;
