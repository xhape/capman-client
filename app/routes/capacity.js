import Ember from 'ember';

let date = new Date();
let d = date.getDate(), m = date.getMonth(), y = date.getFullYear();
let capacities = [
  {
    title: 'Design - 0/54', start: new Date(y, m, d - 2), allDay: true, url: 'project', backgroundColor: "#00c0ef", //red
    borderColor: "#00c0ef" //red
  }, {
    title: 'Audit - 6/16', start: new Date(y, m, d - 2), allDay: true, url: 'project', backgroundColor: "#f56954", //red
    borderColor: "#f56954" //red
  }, {
    title: 'Render - 0/2', start: new Date(y, m, d - 2), allDay: true, url: 'project', backgroundColor: "#f39c12", //yellow
    borderColor: "#f39c12" //yellow
  }, {
    title: 'Design - 8/54',
    start: new Date(y, m, d - 1),
    allDay: true,
    url: 'project-detail',
    backgroundColor: "#00c0ef", //red
    borderColor: "#00c0ef" //red
  }, {
    title: 'Audit - 6/16', start: new Date(y, m, d - 1), allDay: true, url: 'project', backgroundColor: "#f56954", //red
    borderColor: "#f56954" //red
  }, {
    title: 'Render - 0/2', start: new Date(y, m, d - 1), allDay: true, url: 'project', backgroundColor: "#f39c12", //yellow
    borderColor: "#f39c12" //yellow
  }, {
    title: 'Design - 8/54', start: new Date(y, m, d), allDay: true, url: 'project', backgroundColor: "#00c0ef", //red
    borderColor: "#00c0ef" //red
  }, {
    title: 'Audit - 6/16', start: new Date(y, m, d), allDay: true, url: 'project', backgroundColor: "#f56954", //red
    borderColor: "#f56954" //red
  }, {
    title: 'Render - 0/2', start: new Date(y, m, d), allDay: true, url: 'project', backgroundColor: "#f39c12", //yellow
    borderColor: "#f39c12" //yellow
  }];

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
export default Ember.Route.extend({
  model(){

    return {
      //for the search panel
      offices: offices, teams: teams,

      //Random capacity
      capacities: capacities,

      header : {
        title : "Capacity",
        navs : [
          {
            active : true,
            title : "Capacity"
          }
        ]
      }
    };
  }
});
