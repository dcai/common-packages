module.exports = function(api = {}) {
  if (api.cache) {
    api.cache(true);
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        targets: {
          browsers: ['last 2 versions', 'ie 10'],
        },
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
