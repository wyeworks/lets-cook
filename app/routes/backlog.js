import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('backlog');
  },

  afterModel(model) {
    if (model.get('length') === 0) {
      this.replaceWith('backlog.empty');
    }
  }
});
