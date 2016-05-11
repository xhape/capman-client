import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "Dashboard for VP with access to all",
        navs : [
          {
            active : true,
            title : "Dashboard"
          }
        ]
      }
    };
  }
});
