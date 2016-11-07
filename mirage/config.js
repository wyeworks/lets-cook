export default function() {
  this.namespace = '/api';

  this.get('/recipes', function({ recipes }, request) {
    if (request.queryParams.query) {
      let term = request.queryParams.query.toLowerCase();

      return recipes.all().filter((recipe) => {
        return recipe.title.toLowerCase().indexOf(term) > -1;
      });
    }

    return recipes.all();
  });
}
