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
export default Ember.Route.extend({
  model(){

    return {
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
