/** @type {import('next').NextConfig} */
const mode = process.env.MODE

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  distDir: 'docs',
  basePath: mode === 'pages' ? '/ys-quiz' : undefined
}

module.exports = nextConfig

