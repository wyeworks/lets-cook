import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(query) {
      if (query) {
        this.transitionTo('search.results', query);
      } else {
        this.transitionTo('search.index');
      }
    },

    addToBacklog(recipe) {
      let backlog = this.store.findAll('backlog');

      if (backlog.get('length') === 0) {
        backlog = this.store.createRecord('backlog');
      } else {
        backlog = backlog.get('firstObject');
      }

      backlog.get('recipes').pushObject(recipe);
      backlog.save();

      this.transitionTo('backlog');
    }
  }
});
