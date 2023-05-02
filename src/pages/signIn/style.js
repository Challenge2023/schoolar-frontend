import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const ImageContainer = styled.div`
    width: 100%;
    margin: 1.5rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors['background-login']};   

    @media(max-width: 768px) {
        display: none;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    padding: 0rem 4rem;
    display: flex;
    justify-content: center;
    gap: 3.75rem;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors['base-background']};   
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