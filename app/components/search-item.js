import Ember from 'ember';

/**
 * Display search result item
 *
 * @example
 *
 * {{search-item recipe}}
 *
 * @param {Recipe} recipe - recipe to display
 */
const Component = Ember.Component.extend({
  classNames: ['search-result--item', 'recipe'],

  click() {
    this.get('on-select')(this.get('recipe'));
  }
});

Component.reopenClass({
  positionalParams: ['recipe']
});

export default Component;
