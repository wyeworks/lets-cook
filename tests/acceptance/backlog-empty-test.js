import { test } from 'qunit';
import moduleForAcceptance from 'lets-cook/tests/helpers/module-for-acceptance';
import _ from 'ember-cli-page-object';

moduleForAcceptance('Acceptance | backlog empty');

const page = _.create('/', {
  scope: '.backlog-empty'
});

test('shows an empty backlog message and a link to search recipes when entering the app for the first time', function(assert) {
  page.visit();

  andThen(function() {
    assert.ok(page.contains("You don't have any recipe yet!"));
  });

  page.clickOn('Add a recipe');

  andThen(function() {
    assert.equal(currentPath(), 'search.index');
  });
});
