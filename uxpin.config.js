/* eslint-disable sort-keys */
module.exports = {
  components: {
    categories: [
      {
        name: 'Web Components',
        include: [
          'src/components/AuiButton/AuiButton.jsx',
          'src/components/AuiPaper/AuiPaper.jsx',
          'src/components/AuiText/AuiText.jsx',
          'src/components/AuiCollapse/AuiCollapse.jsx',
          'src/components/AuiInput/AuiInput.jsx',
        ],
      },
    ],
    wrapper: './src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: './webpack.uxpin.config.js',
  },
  name: 'Awesome UI',
};
