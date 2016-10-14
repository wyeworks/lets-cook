import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),

  model() {
    return this
      .get('ajax')
      .request('/api/recipes')
      .then((response) => response.recipes);
  },

  setupController(controller, model) {
    controller.set('recipes', model);
  }
});
