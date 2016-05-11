import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "View for Designer Team Lead",
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
