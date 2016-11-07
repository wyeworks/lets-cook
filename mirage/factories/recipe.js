import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  slug() {
    return faker.random.uuid();
  },

  title() {
    return faker.lorem.sentence(4);
  },

  description() {
    return faker.lorem.sentence(10);
  },

  imageUrl(i) {
    return faker.image.food('300', '300') + `?${i%8}`;
  }
});
