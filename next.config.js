const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  webpack(config, options) {
    return config;
  },
  trailingSlash: true,
});