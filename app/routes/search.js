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

    addToBacklog(searchItem) {
      this.store.createRecord('recipe', searchItem).save();
      this.transitionTo('backlog');
    }
  }
});
