import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $('#daterange').daterangepicker();
  }
});
