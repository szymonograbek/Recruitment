import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import searchIcon from '../../assets/images/search.svg'

const Logo = styled.img`
  margin: 20px 0 20px 23px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 43px;
  background-image: linear-gradient(to top, #fcfcfc, #ffffff);
  border-radius: 3px;
  box-shadow: 0px -8px 0 0 rgba(255, 255, 255, 0.2),
    inset 0.5px 0.9px 0 0 rgba(201, 202, 202, 0.75);
`

const Navigation = styled.nav`
  display: flex;
  height: 100%;
  margin-left: 270px;
`

const NavigationLink = styled.a`
    padding: 38px 14px 34px 14px;
    white-space: nowrap;
    box-sizing: border-box;
    color: #333333;
    text-decoration: none;
    border-bottom: ${props => (props.active ? '5px solid #006db7' : 'none')}
    &:not(:last-child) {
        margin-right: 18px;
    }
    &:hover{
        cursor: pointer;
    }
`

const SearchIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-left: 18px;
  margin-right: 30px;
`

const Header = props => (
  <Wrapper>
    <Logo src={props.logo} />
    <Navigation>
      <NavigationLink active>HOME</NavigationLink>
      <NavigationLink>ABOUT US</NavigationLink>
      <NavigationLink>SERVICES</NavigationLink>
      <NavigationLink>NEWS</NavigationLink>
      <NavigationLink>LOCATIONS</NavigationLink>
      <NavigationLink>CONTACT</NavigationLink>
    </Navigation>
    <SearchIcon src={searchIcon} />
  </Wrapper>
)

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default Header
