import React from 'react'
import styled from 'styled-components'
import Menu from '../menu/Menu'

const HeaderOne = styled.header`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  display: inline-block;
  width: 100%;
  background-color: #00000085;
  border-radius: 8px;
  img {
    position: absolute;
    height: 160px;
    width: 160px;
    padding: 10px 195px 0 0;
  }
`;

const HeaderTwo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  p {
    position: relative;
    margin: 0 0 0 170px;
    padding-top: 4rem;
    font-size: 35px;
    font-weight: bold;
  }
`;

export default function Header() {
    return (
        <>
            <HeaderOne>
                <HeaderTwo>
                    <h1>header</h1>
                </HeaderTwo>
                <Menu />

            </HeaderOne>
        </>
    )
}
