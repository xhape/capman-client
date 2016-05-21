import Ember from 'ember';
let date = new Date();
let d = date.getDate(), m = date.getMonth(), y = date.getFullYear();

let project = {
  pid: "P123456778",
  client: "Standford",
  address: "Stanford, CA",
  scope: "Please conduct full audit.",
  isRevision: true,
  deliverables: "Finish Notes:",
  dueDate: new Date(y, m, d + 2),
  assignee: {
    name: "Wenthel Javonitalla", image: "img/user7-128x128.jpg"
  },
  createdBy: {
    name: "Leslie Pearson", image: "img/user3-128x128.jpg"
  },
  createdDate: new Date(y, m, d - 2),
  updatedBy: {
    name: "Leslie Pearson", image: "img/user3-128x128.jpg"
  },
  updateDate: new Date(y, m, d - 2),
  files: [
    {
      location: "Z:\\FTP Files\\ProView Studio\\Studio South Bay\\Stanford - Industry Courtyard\\160422_For Proview Audit",
      description: "FTP Path"
    }],
  subtasks: [
    {
      type: "Design", name: "Design Office Space", assignee: "Sansa Stark", status: "Closed"
    }, {
      type: "Render", name: "Render Office Space", assignee: "Jon Snow", status: "Closed"
    }, {
      type: "Audit", name: "Audit Office Space Design", assignee: "Tyrion Lannister", status: "In Progress"
    }]
};

export default Ember.Route.extend({
  model(){
    return {
      header: {
        title: "Stanford – Green Industry Courtyard", navs: [
          {
            active: false, title: "Projects", url: "project", icon: "ion ion-easel"
          }, {
            active: true, title: "Detail"
          }]
      },

      project: project
    };
  }
});
