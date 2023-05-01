import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 40px 100px;
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%; 

  @media (max-width: 768px) {
    padding: 30px;
    display: flex;
    text-align: center;
  }
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 80%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`