export default defineAppConfig({
  name: 'Thom Bruce',
  hostname: 'https://thombruce.com',
  // TODO: Before we uncomment rss...
  //       - Fix presentation of blog/article pages
  //       - Write a genuinely worth publishing piece of blog content
  // rss: '/blog',
  copyright: `Copyright © 1989 - ${new Date().getFullYear()} Thom Bruce`,
  layout: 'article',
  taxonomies: [
    'franchise'
  ],
})
