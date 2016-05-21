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
            icon : "ion ion-easel"
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
