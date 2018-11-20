module.exports = function(api) {
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
  const plugins = ['lodash'];
  return {
    presets,
    plugins,
  };
};
