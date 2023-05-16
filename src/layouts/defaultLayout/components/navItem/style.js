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
    gap: 10px;
    padding: 10px 50px;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors['base-text-lighter']};
  } 

`

export const NavItemIcon = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
`