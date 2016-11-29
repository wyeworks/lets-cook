import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  imageUrl: DS.attr()
});
