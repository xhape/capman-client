import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $("#office-multiple").select2();
  }
});
