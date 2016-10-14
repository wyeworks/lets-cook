import { test } from 'qunit';
import moduleForAcceptance from 'lets-cook/tests/helpers/module-for-acceptance';
import _ from 'ember-cli-page-object';

moduleForAcceptance('Acceptance | search');

const page = _.create('/search', {
  recipes: _.collection({
    itemScope: '.recipe'
  })
});

test('shows suggested recipes', function(assert) {
  page.visit();

  andThen(function() {
    assert.equal(page.recipes().count, 3);
  });
});
