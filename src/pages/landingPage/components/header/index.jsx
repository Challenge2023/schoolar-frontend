import { useState } from "react";
import { ButtonContainer, Container, HeaderContainer, LogoContainer, MobileButton, NavContainer, NavDesktopContainer, NavMobileContainer } from "./style";
import Logo from '../../../../assets/logo.svg'
import { NavDesktopItem } from "./components/navDesktopItem";
import Hamburger from "hamburger-react";
import { NavMobileItem } from "./components/navMobileItem";
import { ButtonLink } from "../../../../components/button";

export function Header() {

    const [isOpen, setOpen] = useState(false)

    const NavDesktopLinks = [
        { title: 'Home', path: '/' },
        { title: 'Sobre', path: '/sobre' },
    ]

    const NavMobileLinks = [
        { title: 'Home', path: '/' },
        { title: 'Sobre', path: '/sobre' },
        { title: 'Login', path: '/login' },
    ]

    return (
        <HeaderContainer>
            <Container>
                <LogoContainer>
                    <img src={Logo} alt="schoolar-logo" />
                </LogoContainer>

                <NavContainer>
                    <NavDesktopContainer>
                        {NavDesktopLinks.map(({ title, path }) => (
                            <NavDesktopItem key={path} title={title} path={path} textcolor="base-white" />
                        ))}
                    </NavDesktopContainer>
                </NavContainer>

                <MobileButton>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </MobileButton>

                <ButtonContainer>
                    <ButtonLink
                        path="/login"
                        backgroundcolor="brand-blue"
                        hoverbackgroundcolor="base-white"
                        textcolor="base-white"
                        width="130px"
                        hovercolor="brand-blue"
                    >
                        Login
                    </ButtonLink>
                </ButtonContainer>
            </Container>

            {isOpen ? (
                <NavMobileContainer>
                    {NavMobileLinks.map(({ title, path }) => (
                        <NavMobileItem key={path} title={title} path={path} />
                    ))}
                </NavMobileContainer>
            ) : (
                ''
            )}

        </HeaderContainer>
    )
}