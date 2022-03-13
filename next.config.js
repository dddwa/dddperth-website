const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  experimental: {
    outputStandalone: process.env.STANDALONE_BUILD === 'true',
  },
})
