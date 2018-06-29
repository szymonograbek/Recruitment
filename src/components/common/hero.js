import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import FeaturesList from '../features-list/features-list'
import styled from 'styled-components'
import { ContentWrapper, BigSeparator } from '../../assets/styles/styles'

const HeroWrapper = styled.div`
  width: 100%;
  height: 1189px;
  background: linear-gradient(180deg, #122636 854px, #1b2936 335px);
  overflow: auto;
`

const Headline = styled.p`
  width: 504px;
  height: 172px;
  margin: 0;
  margin-bottom: 154px;
  text-transform: uppercase;
  font-size: 72px;
  font-weight: 800;
  line-height: 0.83;
  color: rgba(255, 255, 255, 1);
`

const DetailsButton = styled.button`
  width: 216px;
  height: 49px;
  margin-top: 50px;
  border: 0;
  border-radius: 24.5px;
  background: #fdc300;
  text-transform: uppercase;
  line-height: 1.54;
  color: #ffffff;
`

const DetailsWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const Hero = props => (
  <HeroWrapper>
    <ContentWrapper>
      <Header logo={props.data.logo.responsiveResolution.src} />
      <BigSeparator margin="164px 0 20px 0" />
      <Headline>{props.data.headline}</Headline>
      <FeaturesList list={props.data.features} />
      <DetailsWrapper>
        <DetailsButton>View Details</DetailsButton>
      </DetailsWrapper>
    </ContentWrapper>
  </HeroWrapper>
)

Hero.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Hero
