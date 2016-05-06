import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var date = new Date();
    var d = date.getDate(), m = date.getMonth(), y = date.getFullYear();

    return {
      //Random leaves
      events: [
        {
          title: 'Wenthel',
          start: new Date(y, m, d - 2),
          allDay: true,
          backgroundColor: "#39cccc ",
          borderColor: "#39cccc"
        }, {
          title: 'Jok', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00a65a", borderColor: "#00a65a"
        }, {
          title: 'Daryll',
          start: new Date(y, m, d - 1),
          allDay: true,
          backgroundColor: "#f56954",
          borderColor: "#f39c12"
        }, {
          title: 'Bien', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00c0ef", borderColor: "#00c0ef"
        }, {
          title: 'Marj', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00c0ef", borderColor: "#00c0ef"
        }, {
          title: 'Triccie',
          start: new Date(y, m, d - 1),
          allDay: true,
          backgroundColor: "#39cccc",
          borderColor: "#39cccc"
        }, {
          title: 'TJ', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00a65a", borderColor: "#00a65a"
        }, {
          title: 'Edcy', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00a65a", borderColor: "#00a65a"
        }, {
          title: 'Ghed', start: new Date(y, m, d - 1), allDay: true, backgroundColor: "#00a65a", borderColor: "#00a65a"
        }, {
          title: 'Jok', start: new Date(y, m, d + 7), allDay: true, backgroundColor: "#00a65a", borderColor: "#00a65a"
        }, {
          title: 'Daryll',
          start: new Date(y, m, d + 7),
          allDay: true,
          backgroundColor: "#f56954",
          borderColor: "#f39c12"
        }, {
          title: 'Bien', start: new Date(y, m, d + 7), allDay: true, backgroundColor: "#00c0ef", borderColor: "#00c0ef"
        },]
    };
  }
});