import Ember from 'ember';

let informations = [
  {
    background: "bg-aqua", icon: "ion ion-easel", title: "Projectx", value: 30, url: "project"
  }, {
    background: "bg-red", icon: "ion-ios-time-outline", title: "Wait List", value: 3, url: "project"
  }, {
    background: "bg-yellow", icon: "ion ion-paintbucket", title: "Leaves", value: 3, url: "leave"
  }];

let capacities = [
  {
    title: "Design", informations: [
    {
      title: "North Bay", remaining: 9, capacity: 54, background: "progress-bar-aqua", percentage: 81.25
    }, {
      title: "South Bay", remaining: 8, capacity: 24, background: "progress-bar-red", percentage: 66
    }, {
      title: "Two", remaining: 6, capacity: 10, background: "progress-bar-green", percentage: 66
    }, {
      title: "Healthcare", remaining: 6, capacity: 12, background: "progress-bar-yellow", percentage: 50
    }]
  }, {
    title: "Render", informations: [
      {
        title: "North Bay", remaining: 0, capacity: 6, background: "progress-bar-aqua", percentage: 100
      }, {
        title: "South Bay", remaining: 6, capacity: 6, background: "progress-bar-red", percentage: 0
      }, {
        title: "Two", remaining: 2, capacity: 6, background: "progress-bar-green", percentage: 33
      }, {
        title: "Healthcare", remaining: 4, capacity: 6, background: "progress-bar-yellow", percentage: 66
      }]
  }];
export default Ember.Route.extend({
  model(){
    return {
      header: {
        title: "Dashboard", subTitle: "Dashboard for Supervisor with access to Design and Render", navs: [
          {
            active: true, title: "Dashboard"
          }]
      }, informations: informations, capacities: capacities
    };
  }
});
