const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const withSass = require('@zeit/next-sass')

module.exports = withSass(
    withBundleAnalyzer({
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      webpack: (config, {
        dev
      }) => {
        if (!dev) {
          const originalEntry = config.entry;
          config.entry = async () => {
            const entries = await originalEntry();

            if (entries['main.js']) {
              entries['main.js'].unshift('./public/static/scripts/es6-shim.js');
            }

            return entries;
          };
        }
        return config;
      },
      poweredByHeader: false
    })
)
