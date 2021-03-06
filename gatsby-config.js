module.exports = {
  siteMetadata: {
    siteUrl: "https://whynoise.com.ar",
    title: "why?noise",
    description: "Noise politics and culture",
    copyright:`© 2022 | luigi tamagnini`,
    keywords: `why?noise, noise, noise texture, noise music, noise art, noise article, noise artists, noise politics, noise poetry, noise aesthetics, contemporary noise, noise programming, noise computing, politics, art, aesthetics, culture, music, poetry, code`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     defaults: {
    //       quality: 100,
    //       formats: ['auto', 'webp', 'avif'],
    //       // placeholder: 'blurred',
    //     },
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `culture`,
        path: `${__dirname}/content`,
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
  ],
};
