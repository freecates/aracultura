const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.aracultura.com',
  pagesDirectory: __dirname + "/server/static/EJWYQSuJAvySE8lA_YQwK/pages",
  targetDirectory : '../public/',
  ignoredExtensions: [
        'png',
        'jpg',
        'js'
  ],
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "/test/styles.css"
    },
    {
      type: "text/xsl",
      styleFile: "test/test/styles.xls"
    }
  ]
});

console.log(`✅ sitemap.xml generated!`);
