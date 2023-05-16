import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  background-color: #F2F3F7;
  height: 100vh;

  @media (max-width: 1600px) {
    grid-template-columns: 25% 75%;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`