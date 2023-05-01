import styled from 'styled-components'

export const NavLink = styled.a`
  border-bottom: 2px solid transparent;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors['base-white']};
  font-size: ${({ theme }) => theme.textSizes['text-m']};
  font-weight: 500;
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors['base-white']};
    color: ${({ theme }) => theme.colors['base-white']};
  }
`