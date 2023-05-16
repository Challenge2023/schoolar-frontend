import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 55px 15rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors['brand-blue']};

  @media(max-width: 1366px) {
    padding: 55px 100px;
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`

export const LogoContainer = styled.div`
  img {
    width: 90%;
  }
`

export const NavContainer = styled.nav`
    
`

export const Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 768px) {
      align-items: flex-start;
    }
`

export const NavDesktopContainer = styled.ul`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavMobileContainer = styled.ul`
  display: none;
  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    text-transform: uppercase;
  }
`

export const MobileButton = styled.div`
  display: none;
  
  
  @media (max-width: 768px) {
    display: block;

    .hamburger-react{
      color: ${({ theme }) => theme.colors['base-background']};
    }
  }
`

export const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`