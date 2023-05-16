import styled from 'styled-components'

export const NavLink = styled.a`
  display: flex;
  max-width: 100%;
  padding: 0.625rem;
  color: ${({ theme, textcolor }) => theme.colors[`${textcolor}`]};
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
