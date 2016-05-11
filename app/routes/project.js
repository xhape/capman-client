import Ember from 'ember';

var offices =  [
  {
    name : "North Bay"
  },
  {
    name : "South Bay"
  }
];

export default Ember.Route.extend({
  model() {
    return {
      offices: offices,
      header : {
        title : "Project",
        navs : [
          {
            active : true,
            title : "Project"
          }
        ]
      }
    };
  }
});
