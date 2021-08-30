module.exports = {
  siteMetadata: {
    description: "Emanuele Bartolesi - Microsoft 365 Architect",
    locale: "en",
    title: "Emanuele Bartolesi",
    showThemeLogo: false,
    formspreeEndpoint: "https://formspree.io/f/xleaadly"
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        theme: "gh-inspired"
      }
    }
  ]
};
