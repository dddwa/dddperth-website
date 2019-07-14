const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  BundleAnalyzerPlugin
} = require('webpack-bundle-analyzer')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(
  withCSS(
    withTypescript(
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
                entries['main.js'].unshift('./static/scripts/es6-shim.js');
              }

              return entries;
            };
          }
          return config;
        },
        poweredByHeader: false
      })
    )
  )
)
