import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FlexFullCentered } from '../../assets/styles/styles'

const SingleOffer = styled.article`
  display: flex;
  width: 555px;
  height: 182px;
  background: #fcfcfc;
  margin-bottom: 30px;
`

const ImageWrapper = styled.div`
  width: 165px;
  ${FlexFullCentered};
`

const OfferIcon = styled.img`
  height: 70px;
`

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
`

const Heading = styled.h1`
    margin: 0;
    font-size: 18px;
    font-weight 800;
`

const Description = styled.p`
  width: 354px;
  margin: 0;
  margin-top: 20px;
  font-family: 'Open Sans';
  font-weight: normal;
  line-height: 1.54;
  color: #777777;
`

const Offer = props => (
  <SingleOffer>
    <ImageWrapper>
      <OfferIcon src={props.data.icon.file.url} />
    </ImageWrapper>
    <TextSection>
      <Heading>{props.data.heading}</Heading>
      <Description>{props.data.description}</Description>
    </TextSection>
  </SingleOffer>
)

Offer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Offer
