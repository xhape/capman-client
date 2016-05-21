import Ember from 'ember';
let date = new Date();
let d = date.getDate(), m = date.getMonth(), y = date.getFullYear();

let projects = [
  {
    id: "21121-1212", name: "Google San Diego 3rd Floor", assignee: {
    name: "Arya Stark", image: "img/user4-128x128.jpg"
  }, pid: 123434, hours: 6, office: 'South Bay', client: 'Google', createdBy: {
    name: 'Cercei Lannister', image: "img/user7-128x128.jpg"
  }, status: 'Open', address: "San Diego, CA", isRevision: false, dueDate: new Date(y, m, d + 1)
  }, {
    id: "21121-23512", name: "LinkedIn San Diego Basement", assignee: {
      name: "Jon Snow", image: "img/user8-128x128.jpg"
    }, pid: 121255, hours: 3, office: 'South Bay', client: 'LinkedIn', createdBy: {
      name: 'Tyrion Lannister', image: "img/user1-128x128.jpg"
    }, status: 'Open', address: "San Diego, CA", isRevision: true, dueDate: new Date()
  }];

export default Ember.Route.extend({
  model(){
    return {
      header: {
        title: "Dashboard", subTitle: "Ongoing Projects", navs: [
          {
            active: true, title: "Dashboard"
          }]
      },

      projects: projects
    };
  }
});
