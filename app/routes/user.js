import Ember from 'ember';

//dummy teams for the search panel
let teams = [
  {
    name: "Design"
  }, {
    name: "Audit"
  }, {
    name: "Render"
  }, {
    name: "Sales"
  }];

//dummy offices for the search panel
let offices = [
  {
    name: "North Bay"
  }, {
    name: "South Bay"
  }];

//dummy users
let users = [
  {
    name : "Arya Stark",
    office: "PVS",
    image: "img/user4-128x128.jpg",
    teams : ["Design", "Render"]
  },
  {
    name : "Cercei Lannister",
    office: "PVS",
    image: "img/user7-128x128.jpg",
    teams : ["Render"]
  },
  {
    name : "Jon Snow",
    office: "PVS",
    image: "img/user8-128x128.jpg",
    teams : ["Audit"]
  }
];
export default Ember.Route.extend({
  model(){
    return {
      //for the search panel
      teams : teams,
      offices: offices,
      header : {
        title : "Users",
        navs : [
          {
            active : true,
            title : "User"
          }
        ]
      },
      users : users
    };
  }
});
