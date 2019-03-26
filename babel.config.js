/* eslint-disable-next-line no-undef */
module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    'inline-react-svg'
  ];

  return {
    presets,
    plugins
  };
};
