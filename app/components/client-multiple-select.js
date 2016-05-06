import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $("#client-multiple").select2();
  }
});
