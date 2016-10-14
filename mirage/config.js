export default function() {
  this.namespace = '/api';

  this.get('/recipes', function({ recipes }, request) {
    if (request.queryParams.query) {
      return recipes.where({ title: request.queryParams.query });
    }

    return recipes.all();
  });
}
