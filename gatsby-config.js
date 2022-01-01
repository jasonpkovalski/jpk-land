module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jasonpkovalski.me",
    title: "JPK Landing Site",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-154161137-1",
      },
    },
  ],
};
