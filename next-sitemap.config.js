/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.trip-agency.net',
  generateRobotsTxt: true, // Ensures robots.txt is included
  robotsTxtOptions: {
      additionalSitemaps: [
          'https://www.trip-agency.net/sitemap-0.xml', // Main sitemap
          'https://www.trip-agency.net/video-sitemap.xml', // Force include video sitemap
      ],
  },
};

