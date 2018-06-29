import React from 'react'
import PropTypes from 'prop-types'
import Feature from './feature'
import styled from 'styled-components'
import { ListWrapper } from '../../assets/styles/styles'

const FeaturesList = props => (
  <ListWrapper>
    {props.list.map(feature => {
      return <Feature key={feature.id} data={feature} />
    })}
  </ListWrapper>
)

FeaturesList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default FeaturesList
