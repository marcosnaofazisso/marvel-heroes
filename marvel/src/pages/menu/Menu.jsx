import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuOne = styled.nav`
  margin-top: 7rem;
  width: 100%;
  height: 8rem;
  background-color: black;
  border-radius: 8px;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
  }

  li {
    margin: 0 1rem;
    line-height: 2rem;
  }
  
  a {
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
  }
  
  a:hover,
  a:active,
  a.active {
    color: #fd5353;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #ff0808;
  }
  
  @media(max-width: 800px) {
    margin-top: 2rem;
    a {
      font-size: 1rem;
    }
  }
  `;

export default function Menu() {


  return (
    <div>
      <MenuOne>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/selected" >Selected Characters</Link></li>
        </ul>
      </MenuOne>
    </div>
  )
}