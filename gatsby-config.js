module.exports = {
  siteMetadata: {
    siteUrl: "https://whynoise.com.ar",
    title: "why?noise",
    description: "Noise politics and culture",
    copyright:`© 2022 | luigi tamagnini`,
    keywords: `why?noise, noise, politics, art, aesthetics, culture, music, poetry, code`
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `culture`,
        path: `${__dirname}/content`,
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],
};
