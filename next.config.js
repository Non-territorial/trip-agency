const siteUrl = 'https://www.trip-agency.net';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // Automatically generate robots.txt

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
        permanent: true, // This sets a 301 redirect
      },
    ];
  },
};

  