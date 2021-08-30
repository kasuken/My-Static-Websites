module.exports = {
  siteMetadata: {
    description: "Emanuele Bartolesi - Microsoft 365 Architect & CTO for Early Stage Startups",
    locale: "en",
    title: "Emanuele Bartolesi",
    showThemeLogo: false,
    formspreeEndpoint: "https://formspree.io/f/xleaadly",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "classic",
      },
    },
  ],
};
