import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    $(function () {
      // initialize the calendar
      //Date for the calendar events (dummy data)
      var date = new Date();
      var d = date.getDate(),
        m = date.getMonth(),
        y = date.getFullYear();
      $('#calendar').fullCalendar({
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaThree,agendaDay'
        },
        views: {
          agendaThree: {
            type: 'agenda',
            duration: { days: 3 },
            buttonText: '3 day'
          }
        },
        buttonText: {
          today: 'today',
          month: 'month',
          week: 'week',
          day: 'day'
        },
        //Random default events
        events: [
          {
            title: 'Design -  8/54',
            start: new Date(y, m, d + 1),
            allDay: true,
            backgroundColor: "#f56954", //red
            borderColor: "#f56954" //red
          },
          {
            title: 'Audit -  6/16',
            start: new Date(y, m, d + 1),
            allDay: true,
            backgroundColor: "#f56954", //red
            borderColor: "#f56954" //red
          },
          {
            title: 'Render - 0/2',
            start: new Date(y, m, d+ 1),
            allDay: true,
            url: 'http://google.com/',
            backgroundColor: "#f39c12", //yellow
            borderColor: "#f39c12" //yellow
          }
        ],
        editable: false,
      });
    });
  }
});
