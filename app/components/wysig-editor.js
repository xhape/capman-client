import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    $(".wysig-editor").wysihtml5();
  }
});
