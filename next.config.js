/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  experimental: {
    outputStandalone: true,
  },
  output: 'standalone',
  async rewrites() {
    return {
      beforeFiles: [
        {
          /** Rewrite for Elo voting */
          source: '/vote/voting',
          destination: '/vote/elo',
        },
        {
          /** Rewrite for Elo voting */
          source: '/vote',
          destination: '/vote/landing',
        },      
    ]}
  }
}

if (process.env.ANALYZE) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(config)
} else {
  module.exports = config
}
