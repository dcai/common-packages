module.exports = function (api = {}) {
  if (api.cache) {
    api.cache(true);
  }

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
        loose: true,
        targets: {
          node: '10',
        },
      },
    ],
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
