const withSass = require("@zeit/next-sass");
const webpackConf = {
  webpack(config) {
    return config;
  }
};

module.exports = withSass({
  cssModules: true,
  webpackConf
});
