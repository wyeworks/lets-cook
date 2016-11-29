import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),

  model() {
    return this.store.findAll('recipe');
  },

  setupController(controller, model) {
    controller.set('recipes', model);
  }
});
