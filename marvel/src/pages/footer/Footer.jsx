import React from 'react'
import styled from 'styled-components';

const FooterOne = styled.div`
  margin-top: 0.1rem;
  width: 100%;
  background-color: #050000;
  border: 3px solid black;
  align-items: center;
  justify-content: center;
  display: flex;
  p {
      color: #ffffff;
      font-size: 1.25rem;
      font-weight: 400;
  }

  @media(max-width: 800px) {
    text-align: center;
    p {
      font-size: .8rem;
      font-weight: 400;
  }
    }
`;

function Footer() {
    return (
        <FooterOne>
            <p>Desafio Marvel desenvolvido por Marcos Vinicius Ferreira</p>
        </FooterOne>
    )
}

export default Footer