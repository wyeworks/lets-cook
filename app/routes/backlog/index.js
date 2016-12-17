import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    var recipes = this.modelFor('backlog');

    if (!recipes.get('length')) {
      this.replaceWith('backlog.empty');
    }
  },

  model() {
    return this.modelFor('backlog');
  },

  setupController(controller, model) {
    controller.set('recipes', model);
  },

  actions: {
    showRecipe(recipe) {
      console.log('show recipe %o', recipe);
    }
  }
});
