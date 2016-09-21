module.exports = function(deployTarget) {
  return {
    pagefront: {
      app: 'lets-cook',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
