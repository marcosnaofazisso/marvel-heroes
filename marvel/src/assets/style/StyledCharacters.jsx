import styled from 'styled-components'

export const CenteredHeroes = styled.div`
  text-align: center;
  p {
    margin-left: auto;
    margin-right: auto;
    width: 25rem;
  }
  .selectedHeight {
    height: 20rem;
  }
  .charactersHeight {
    height: 20rem;
  }
  @media(max-width:800px) {
    width: 90%;
    p {
      font-size: 12px;
      width: 85%;
  }
  .heroeCardButton {
    margin-bottom: 2rem;
  }

  }
  .heroeCard {
    width: 100%;
  }

`;