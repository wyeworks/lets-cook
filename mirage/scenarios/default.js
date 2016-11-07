export default function(server) {
  server.loadFixtures();

  server.createList('recipe', 40);
}
