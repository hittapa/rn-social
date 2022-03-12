module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  presets: [['module:metro-react-native-babel-preset', {
    unstable_disableES6Transforms: true
  }]],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
