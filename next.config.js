module.exports = {
    async redirects() {
      return [
        {
          source: '/(.*)',
          has: [
            {
              type: 'host',
              value: 'trip-agency.net', // non-www version
            },
          ],
          destination: 'https://www.trip-agency.net/:path*',
          permanent: true,
        },
      ];
    },
  };
  

  