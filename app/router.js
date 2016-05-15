import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('project');
  this.route('project-detail');
  this.route('project-edit');

  this.route('office');
  this.route('capacity');
  this.route('leave');
  this.route('user');
  this.route('client');

  this.route('dashboard', {path: '/'});
  this.route('dashboard-team-lead');
  this.route('dashboard-client');
  this.route('dashboard-team-member');
  this.route('dashboard-supervisor');
  this.route('dashboard-director');

  this.route('reports');
});

export default Router;
