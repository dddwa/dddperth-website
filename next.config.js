const config = {
  poweredByHeader: false,
  experimental: {
    outputStandalone: process.env.STANDALONE_BUILD === 'true',
  },
}

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(config)
} else {
  module.exports = config
}
