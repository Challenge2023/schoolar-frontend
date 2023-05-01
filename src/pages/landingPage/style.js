import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12rem 0px;
  overflow-x: hidden;
`

export const BaseSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18.5rem 0px;
  padding: 0 8rem;

  @media(max-width: 768px) {
    gap: 12rem 0px;
    padding: 0 3rem;
  }
`