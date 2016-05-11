import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "Dashboard for Supervisor with access to Design and Render",
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
