import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

injectGlobal`
  ${styledNormalize}
 body{
    margin: 0; 
    font-family: Raleway;
    font-weight: bold;
    font-size: 13px;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
 }
`

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.contentfulLayout.title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:600,700,800"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossorigin="anonymous"
        />
      </Helmet>
      {children()}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    contentfulLayout {
      title
    }
  }
`
