import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  border: 1.5px solid;
  border-color: ${({ theme, isInvalid }) =>
    isInvalid ? theme.colors[`base-error`] : '#D0D0D0'};
  padding: 1.25rem;
  background-color: #FCFCFC;
  border-radius: 0.6rem;
  font-size: ${({ theme }) => theme.textSizes[`text-m`]};
  &:disabled {
    cursor: not-allowed;
  }

  @media(max-width: 768px) {
    padding: 1rem;
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors[`base-error`]};
  font-size: ${({ theme }) => theme.textSizes[`text-s`]};
`