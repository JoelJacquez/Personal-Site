module.exports = {
  siteTitle: 'Joel Jacquez',
  siteDescription: 'Software Engineer',
  authorName: 'Joel Jacquez',
  twitterUsername: 'cryptt3r',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'es', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Soy backend y frontend developer, me gusta probar nuevas tecnologías, soy apasionado de la tecnología, amo viajar y me gusta mucho leer, autodidacta y creo firmemente en que el aprendizaje debe ser constante, y la renovación una constante. <a href="https://jacquez.xyz/" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://jacquez.xyz/',
  disqusSiteUrl: 'https://jacquez.xyz/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  // pathPrefix: '/Personal-Site/', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-primary.png', // file in content/images
  // googleAnalyticsId: 'UA-67868977-2', // TODO: change this
  trackingId: 'G-5ZLPQWZ62P',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/logo.png',
  postsPerPage: 6,
  disqusShortname: '', // TODO: change this
  headerTitle: 'Joel Jacquez',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    // {
    //   label: 'About',
    //   url: '/about-gatsby-starter-morning-dew',
    // },
    // {
    //   label: 'Installation',
    //   url: '/how-to-install',
    // },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        // {
        //   label: 'About',
        //   url: '/about-gatsby-starter-morning-dew',
        // },
        // {
        //   label: 'Installation',
        //   url: '/how-to-install',
        // },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/JoelJacquez',
        },
        {
          label: 'Website',
          url: '/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/cryptt3r',
        },
      ],
    },
  ],
}
