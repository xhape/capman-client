import Ember from 'ember';

const FullCalendarComponent = Ember.Component.extend({
  events: Ember.computed('params.[]', function(){
    return this.get('params')[0];
  }),

  didInsertElement: function () {
    //initialize the calendar
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today', center: 'title', right: 'month,basicWeek,basicDay'
      }, buttonText: {
        today: 'Today', month: 'Monthly', week: 'Weekly', day: 'Daily'
      },
      events: this.events,
      editable: false,
      dayClick: function() {

        alert('Do you want to apply a leave or reserve for a project? Sorry but it will be available soon! ');

        // change the day's background color just for fun
        $(this).css('background-color', 'red');
      }
    });
  }
});

FullCalendarComponent.reopenClass({
  positionalParams: ['params']
});

export default FullCalendarComponent;
