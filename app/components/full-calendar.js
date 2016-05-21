import Ember from 'ember';

const FullCalendarComponent = Ember.Component.extend({
  events: Ember.computed('params.[]', function () {
    return this.get('params')[0];
  }),

  options: Ember.computed('params.[]', function () {
    return this.get('params')[1];
  }),

  didInsertElement: function () {
    let header = {center: 'title'};
    let options = this.options;
    header.left = options.left ? options.left : "prev,next today";
    header.right = options.right ? options.right : 'month,basicWeek,basicDay';

    //initialize the calendar
    $('#calendar').fullCalendar({
      header: header, buttonText: {
        today: 'Today', month: 'Monthly', week: 'Weekly', day: 'Daily'
      }, defaultView: "basicWeek", events: this.events, editable: false, dayClick: function () {

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
