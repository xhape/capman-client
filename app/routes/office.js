import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Office",
        navs : [
          {
            active : true,
            title : "Office"
          }
        ]
      }
    };
  }
});
