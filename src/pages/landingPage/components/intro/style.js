import styled from 'styled-components'

export const IntroContainer = styled.section`
  padding: 50px 100px 110px;
  background-color: ${({ theme }) => theme.colors['brand-blue']};
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%; 

  @media (max-width: 768px) {
    padding: 30px 30px 80px;
    display: flex;
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

export const ButtonContainer = styled.div`
  padding-top: 20px;
`