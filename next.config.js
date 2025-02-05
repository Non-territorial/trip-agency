/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      if (process.env.NODE_ENV !== 'production') return [];
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
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            {
              key: 'Content-Security-Policy-Report-Only',
              value: "default-src 'self'; media-src 'self' https://www.mux.com/;",
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  