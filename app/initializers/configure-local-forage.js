export function initialize() {
  window.localforage.config({
    name: 'lets-cook',
    version: 1.0,
    storeName: 'lets_cook',
    description: 'Let\'s Cook recipe database'
  });
}

export default {
  name: 'configure-local-forage',
  initialize
};
