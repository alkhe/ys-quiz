/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: prod ? './' : undefined
}

module.exports = nextConfig
