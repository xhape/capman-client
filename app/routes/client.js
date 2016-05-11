import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Clients",
        navs : [
          {
            active : true,
            title : "Client"
          }
        ]
      }
    };
  }
});
