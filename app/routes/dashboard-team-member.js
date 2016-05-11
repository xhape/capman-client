import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "Team Member View",
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
