/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/google',
        destination: 'https://google.com/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
