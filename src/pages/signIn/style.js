import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ImageContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #D6D6D6;
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem;

    @media(max-width: 768px) {
    padding: 1rem 2rem;

      img {
        max-width: 7rem;
      }
    }
`

export const FormContainer = styled.div`
    width: 100%;
    padding: 0rem 30%;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors['base-background']};  

    @media(max-width: 768px) {
      padding: 0 5%;
    }
`

export const TextsContainer = styled.div`
`

export const FormDataContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`