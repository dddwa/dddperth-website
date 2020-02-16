const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withSass = require('@zeit/next-sass')

module.exports = withSass(
    withBundleAnalyzer({
      poweredByHeader: false
    })
)
