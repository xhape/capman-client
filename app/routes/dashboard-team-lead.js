import Ember from 'ember';

let capacity = {
  informations : [
    {
      title: "North Bay", remaining: 9, capacity: 54, background: "progress-bar-aqua", percentage: 81.25
    }, {
      title: "South Bay", remaining: 8, capacity: 24, background: "progress-bar-red", percentage: 66
    }, {
      title: "Two", remaining: 6, capacity: 10, background: "progress-bar-green", percentage: 66
    }
  ]
};

let waitListedProjects = [
  {
    name : "Google Sta Clara",
    hours : 6,
    reservedDate : 'May 2'
  },
  {
    name : "LinkedIn San Francisco",
    hours : 6,
    reservedDate : 'May 1'
  },
  {
    name : "Stanford 3rd Floor",
    hours : 6,
    reservedDate : 'April 30'
  }
];

let leaves = [
  {
    name : 'Jon',
    picture : "img/user1-128x128.jpg",
    isHalfDay : false
  },
  {
    name : 'Sansa',
    picture : "img/user7-128x128.jpg",
    isHalfDay : false
  },
  {
    name : 'Tyrion',
    picture : "img/user8-128x128.jpg",
    isHalfDay : true
  },
  {
    name : 'Roose',
    picture : "img/user6-128x128.jpg",
    isHalfDay : false
  }
];

let projects = [
  {
    id : "21121-1212",
    name : "Google San Diego 3rd Floor",
    assignee : {
      name : "Arya Stark",
      image : "img/user4-128x128.jpg"
    },
    pid : 123434,
    hours: 6,
    office: 'South Bay',
    client: 'Google',
    createdBy : {
      name : 'Cercei Lannister',
      image : "img/user7-128x128.jpg"
    },
    status : 'Open'
  },
  {
    id : "21121-23512",
    name : "LinkedIn San Diego Basement",
    assignee : {
      name : "Jon Snow",
      image : "img/user8-128x128.jpg"
    },
    pid : 121255,
    hours: 3,
    office: 'South Bay',
    client: 'LinkedIn',
    createdBy : {
      name : 'Tyrion Lannister',
      image : "img/user1-128x128.jpg"
    },
    status : 'Open'
  },
  {
    id : "21121-23512",
    name : "Stanford San Diego 1st Floor",
    assignee : {
      name : "Ned Stark",
      image : "img/user2-160x160.jpg"
    },
    pid : 1218765,
    hours: 3,
    office: 'Healthcare',
    client: 'Stanford',
    createdBy : {
      name : 'Tywin Lannister',
      image : "img/user6-128x128.jpg"
    },
    status : 'In Progress'
  }
];

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "View for Designer Team Lead",
        navs : [
          {
            active : true,
            title : "Dashboard"
          }
        ]
      },
      capacity : capacity,
      waitListedProjects : waitListedProjects,
      projects : projects,
      leaves : leaves
    };
  }
});
