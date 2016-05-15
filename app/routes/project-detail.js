import Ember from 'ember';

let project = {

};

export default Ember.Route.extend({
  model(){
    return {
      header : {
        title : "Stanford – Green Industry Courtyard",
        navs : [
          {
            active : false,
            title : "Project",
            url : "project",
            icon : "ion ion-easel"
          },
          {
            active : true,
            title: "Edit"
          }
        ]
      },
      project : project
    };
  }
});
