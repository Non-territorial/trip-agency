/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['gateway.pinata.cloud'], // Add this to allow external images from Pinata
  },
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

  