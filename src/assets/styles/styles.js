import styled, { css } from 'styled-components'

// Wrappers
export const ContentWrapper = styled.div`
  width: 1140px;
  margin: 0 auto;
`

export const ListWrapper = ContentWrapper.extend`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

// SEPARATORS
const Separator = css`
  background-color: #fdc300;
  margin: ${props => props.margin};
`

export const BigSeparator = styled.div`
  ${Separator} width: 66px;
  height: 4px;
`

export const SmallSeparator = styled.div`
  ${Separator} width: 30px;
  height: 3px;
`

// Displays

export const FlexFullCentered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
