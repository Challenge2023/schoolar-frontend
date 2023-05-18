import styled from 'styled-components'

export const NavItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  cursor: pointer;

  > a {
    width: 100%;
    display: flex;
    gap: 25px;
    transition: all 0.3s;
    align-items: center;
    color: ${({ theme }) => theme.colors['base-text-lighter']};
  } 

`

export const NavItemIcon = styled.div`
  display: flex;
  justify-content: center;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme, color }) => theme.colors[`${color}`]};
  }
`