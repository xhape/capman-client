import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Client",
        subTitle: "Dashboard for Clients",
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
