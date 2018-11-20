module.exports = function(api) {
  const presets = [
    '@babel/preset-react',
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
  ];
  const plugins = ['lodash'];

  const env = {
    test: {
      plugins: [
        [
          'styled-components',
          {
            minify: false,
          },
        ],
        'lodash',
      ],

      presets: [
        [
          'env',
          {
            targets: {
              node: 8,
            },
          },
        ],
        'react',
      ],
    },
  };
  return {
    env,
    presets,
    plugins,
  };
};
