/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'trip-agency.net', // Redirect non-www version
          },
        ],
        destination: 'https://www.trip-agency.net/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

  