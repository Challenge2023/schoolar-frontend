import styled from 'styled-components'

export const NavLink = styled.a`
  display: flex;
  max-width: 100%;
  padding: 0.625rem;
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
