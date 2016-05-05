import Ember from 'ember';

const FullCalendarComponent = Ember.Component.extend({
  events: Ember.computed('params.[]', function(){
    return this.get('params')[0];
  }),

  didInsertElement: function () {
    //initialize the calendar
    //Date for the calendar events (dummy data)

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today', center: 'title', right: 'month,basicWeek,basicDay'
      }, buttonText: {
        today: 'Today', month: 'Monthly', week: 'Weekly', day: 'Daily'
      },

      events: this.events,
      editable: false
    });
  }
});

FullCalendarComponent.reopenClass({
  positionalParams: ['params']
});

export default FullCalendarComponent;
