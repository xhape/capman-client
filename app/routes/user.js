import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Users",
        navs : [
          {
            active : true,
            title : "User"
          }
        ]
      }
    };
  }
});
