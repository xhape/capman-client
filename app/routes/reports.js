import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Reports",
        navs : [
          {
            active : true,
            title : "Report"
          }
        ]
      }
    };
  }
});
