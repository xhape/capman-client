import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "User Detail",
        navs : [
          {
            active : false,
            title : "Users",
            url : "user",
            icon : "fa fa-users"
          },
          {
            active : true,
            title: "Detail"
          }
        ]
      }
    };
  }
});
