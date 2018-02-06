module.exports = {
  plugins: {
    'postcss-image-set-polyfill': true,
    'postcss-font-family-system-ui': true,
    'postcss-custom-media': true,
    autoprefixer: {
      cascade: false,
      flexbox: 'no-2009',
    },
  },
};
