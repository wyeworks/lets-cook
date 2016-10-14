import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  ajax: inject.service(),

  model(params) {
    return this
      .get('ajax')
      .request('/api/recipes', {
        data: { query: params.term }
      })
    .then((response) => response.recipes);
  },

  setupController(controller, model) {
    controller.set('recipes', model);
  }
});
