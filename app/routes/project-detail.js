import Ember from 'ember';

let project = {
  pidNumber : "P123456778",

};

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Stanford – Green Industry Courtyard",
        navs : [
          {
            active : false,
            title : "Projects",
            url : "project",
            icon : "ion ion-easel"
          },
          {
            active : true,
            title: "Detail"
          }
        ]
      },
      project : project
    };
  }
});
