import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Dashboard",
        subTitle: "South Bay",
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
