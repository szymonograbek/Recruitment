import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { SmallSeparator, FlexFullCentered } from '../../assets/styles/styles'

const SingleFeature = styled.article`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
`

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 216px;
  background-color: #dededd;
`

const TextSection = styled.section`
  width: 100%;
  height: 184px;
  box-shadow: 0px 1px 3px 0 #dddddd;
`

const TextWrapper = styled.div`
  margin: 32px 29px 0 28px;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 23px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 800;
  color: #333333;
`

const Description = styled.p`
  margin: 0;
  font-family: 'Open Sans';
  line-height: 1.54;
  color: #777777;
`
const Button = css`
  display: flex;
  width: 165px;
  height: 34px;
  padding: 0;
  margin: 0;
  border: 0;
  text-transform: uppercase;
  font-family: Raleway;
  font-weight: 700;
  color: #ffffff;
`

export const ButtonPrimary = styled.button`
  ${Button} background: #006db7;
`

export const ButtonSecondary = styled.button`
  ${Button} background: #1b2936;
`

export const ButtonIcon = styled.div`
  width: 30px;
  height: 34px;
  background-color: ${props => (props.primary ? '#037ed1' : '#2f3840')};
  ${FlexFullCentered};
`

export const ButtonText = styled.p`
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 135px;
  margin: 0;
  ${FlexFullCentered};
`

const Feature = props => {
  let button
  if (props.data.id == 'c3dMkXlIw24ocwS0WuAsYSY') {
    button = (
      <ButtonPrimary>
        <ButtonText>Read more</ButtonText>
        <ButtonIcon primary>
          <i className="fas fa-chevron-right" />
        </ButtonIcon>
      </ButtonPrimary>
    )
  } else {
    button = (
      <ButtonSecondary>
        <ButtonText>Read more</ButtonText>
        <ButtonIcon>
          <i className="fas fa-chevron-right" />
        </ButtonIcon>
      </ButtonSecondary>
    )
  }
  return (
    <SingleFeature>
      <ImageWrapper>{button}</ImageWrapper>
      <TextSection>
        <TextWrapper>
          <SmallSeparator margin="0 0 9px 0" />
          <Title>{props.data.title}</Title>
          <Description>{props.data.shortDescription}</Description>
        </TextWrapper>
      </TextSection>
    </SingleFeature>
  )
}

Feature.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Feature
