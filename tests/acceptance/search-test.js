import { test } from 'qunit';
import moduleForAcceptance from 'lets-cook/tests/helpers/module-for-acceptance';
import _ from 'ember-cli-page-object';

moduleForAcceptance('Acceptance | search', {
  beforeEach() {
    server.loadFixtures();
  }
});

const page = _.create('/search', {
  fillIn: _.fillable('.search--input'),
  submit: _.triggerable('submit', '.search--form'),

  searchFor(term) {
    this.fillIn(term);
    this.submit();

    return this;
  },

  recipes: _.collection({
    itemScope: '.search-result--item',

    item: {
      name: _.text('.search-result--heading')
    }
  })
});

test('shows suggested recipes', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.recipes().count, 3);
  });
});

test('searches for receipes', function(assert) {
  page.visit();

  page.searchFor("World's Best Lasagna");

  andThen(function() {
    assert.equal(page.recipes().count, 1);
    assert.equal(page.recipes(0).name, "World's Best Lasagna");
  });
});
