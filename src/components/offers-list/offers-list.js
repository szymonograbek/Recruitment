import React from 'react'
import PropTypes from 'prop-types'
import Offer from './offer'
import {
  ListWrapper,
  SmallSeparator,
  ContentWrapper,
} from '../../assets/styles/styles'
import styled from 'styled-components'

const Heading = styled.h1`
  margin: 0;
  margin-bottom: 14px;
  font-size: 30px;
  color: #333333;
`

const Subheading = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: inherit;
  color: #888888;
  text-transform: uppercase;
`

const CenteredDiv = ContentWrapper.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 69px;
  margin-bottom: 40px;
`

const OffersList = props => (
  <div>
    <CenteredDiv>
      <Heading>{props.data.heading}</Heading>
      <Subheading>{props.data.subheading}</Subheading>
      <SmallSeparator margin="15px 0 0 0 " />
    </CenteredDiv>
    <ListWrapper>
      {props.data.offers.map(offer => {
        return <Offer key={offer.id} data={offer} />
      })}
    </ListWrapper>
  </div>
)

OffersList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default OffersList
