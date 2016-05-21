import Ember from 'ember';

//dummy offices for the search panel
let offices = [
  {
    name: "North Bay"
  }, {
    name: "South Bay"
  }];

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

//dummy clients for the search panel
let clients = [
  {
    name: "Google"
  }, {
    name: "AutoDesk"
  }, {
    name: "LinkedIn"
  }, {
    name: "Instagram"
  }];

//dummy projects
let projects = [
  {
    id: "21121-1212", name: "Google San Diego 3rd Floor", assignee: {
    name: "Arya Stark", image: "img/user4-128x128.jpg"
  }, pid: 123434, hours: 6, office: 'South Bay', client: 'Google', createdBy: {
    name: 'Cercei Lannister', image: "img/user7-128x128.jpg"
  }, status: 'Open'
  }, {
    id: "21121-23512", name: "LinkedIn San Diego Basement", assignee: {
      name: "Jon Snow", image: "img/user8-128x128.jpg"
    }, pid: 121255, hours: 3, office: 'South Bay', client: 'LinkedIn', createdBy: {
      name: 'Tyrion Lannister', image: "img/user1-128x128.jpg"
    }, status: 'Open'
  }, {
    id: "21121-23512", name: "Stanford San Diego 1st Floor", assignee: {
      name: "Ned Stark", image: "img/user2-160x160.jpg"
    }, pid: 1218765, hours: 3, office: 'Healthcare', client: 'Stanford', createdBy: {
      name: 'Tywin Lannister', image: "img/user6-128x128.jpg"
    }, status: 'In Progress'
  }];

export default Ember.Route.extend({
  model() {
    return {
      //for the search panel
      offices: offices, teams: teams, clients : clients,

      header: {
        title: "Project", navs: [
          {
            active: true, title: "Project"
          }]
      },

      projects: projects

    };
  }
});
