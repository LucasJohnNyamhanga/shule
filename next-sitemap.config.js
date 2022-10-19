/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shule.co.tz',
  generateRobotsTxt: true,
  exclude: ['/Admin/*','/Account','/CheckOut','/Auth/*','/Admin'], // <= exclude here
  robotsTxtOptions: {
      policies: [
          { userAgent: "*", disallow: "/Admin" },
          { userAgent: "*", disallow: "/Account" },
          { userAgent: "*", disallow: "/CheckOut" },
          { userAgent: "*", disallow: "/Auth" },
          { userAgent: "*", disallow: "/Admin/*" },
          {userAgent:"*",allow:"/"}
    ]
  },
}