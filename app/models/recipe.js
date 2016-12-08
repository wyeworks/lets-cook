import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  slug: attr('string'),
  title: attr('string'),
  description: attr('string'),
  imageUrl: attr('string')
});
