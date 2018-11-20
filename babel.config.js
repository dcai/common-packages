module.exports = function(api = {}) {
  if (api.cache) {
    api.cache(true);
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
        targets: {
          browsers: ['last 2 versions', 'ie 10'],
        },
      },
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    'lodash',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-class-properties',
  ];
  return {
    presets,
    plugins,
  };
};
