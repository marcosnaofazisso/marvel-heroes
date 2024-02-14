import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/img/logo-marvel.png'
import Menu from '../menu/Menu'

const HeaderOne = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  background-color: #070000;
  text-align: center;
  img {
    margin-top: 2rem;
    height: 10rem;
    width: 20rem;
  }
  @media(max-width: 800px) {
    img {
      margin-top: 1rem;
      height: 5rem;
      width: 10rem;
    }

  }
`;

export default function Header() {
  return (
    <>
      <HeaderOne>
        <img src={logo} alt="Logo Marvel" />
        <Menu />
      </HeaderOne>
    </>
  )
}
