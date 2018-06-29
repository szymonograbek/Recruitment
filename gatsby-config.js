module.exports = {
  siteMetadata: {
    title: 'Trucking',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uzgurdms6b9w`,
        accessToken: `d44e690b06b65ccb1350bc61971f4fa227e4567ecd97c17a9901a1511a551815`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
