import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $("#team-multiple").select2();
  }
});
