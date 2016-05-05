import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('dashboard', {path: '/'});
  this.route('project');
  this.route('office');
  this.route('capacity');
  this.route('leave');
  this.route('user');
  this.route('client');
});

export default Router;
