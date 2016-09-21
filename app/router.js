import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('telling-stories-dashboard', { path: 'stories' });

  this.route('backlog', { path: '/' }, function() {
    this.route('empty');
  });
  this.route('search');
});

export default Router;
