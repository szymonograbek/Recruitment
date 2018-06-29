import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Hero from '../components/common/hero'
import OffersList from '../components/offers-list/offers-list'

const SiteWrapper = styled.div`
  width: 100%;
  overflow: auto;
`

const IndexPage = ({ data }) => (
  <SiteWrapper>
    <Hero data={data.contentfulLayout.hero} />
    <OffersList data={data.contentfulLayout.offers} />
  </SiteWrapper>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    contentfulLayout {
      hero {
        headline
        logo {
          responsiveResolution(width: 170, height: 42) {
            src
          }
        }
        features {
          id
          title
          shortDescription
          description {
            id
            childMarkdownRemark {
              html
            }
          }
          slug
        }
      }
      offers {
        heading
        subheading
        offers {
          id
          heading
          description
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`
