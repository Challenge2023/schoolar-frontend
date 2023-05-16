import { ReactComponent as DashboardIcon } from '../../../../assets/dashboard-icon.svg'
import { ReactComponent as ContentIcon } from '../../../../assets/content-icon.svg'
import { ReactComponent as TestIcon } from '../../../../assets/test-icon.svg'
import { useState } from 'react'
import { NavItem } from '../navItem'
import { NavMobileContainer } from '../../../../pages/landingPage/components/header/style'
import { NavMobileItem } from '../../../../pages/landingPage/components/header/components/navMobileItem'
import {
    DesktopNav,
    MobileIcon,
    SidebarBody,
    SidebarContainer,
    SidebarHeader,
    SidebarUserInfo,
} from './style'
import Hamburger from 'hamburger-react'
import { useLocation } from 'react-router-dom'
import { UserInfo } from '../../../../components/userInfo'

const navData = [
    {
        title: 'Dashboard',
        path: '/home',
        icon: <DashboardIcon />,
    },
    {
        title: 'Conteúdo',
        path: '/home/content',
        icon: <ContentIcon />,
    },
    {
        title: 'Provas',
        path: '/home/test',
        icon: <TestIcon />,
    },
]

const NavMobileLinks = [
    { title: 'Dashboard', path: '/home' },
    { title: 'Conteúdo', path: '/home/content' },
    { title: 'Provas', path: '/home/test' },
]

export function SideBar() {
    const [isOpen, setOpen] = useState(false)
    const location = useLocation()

    const isActiveRoute = (route) => {
        return location.pathname === route
    }

    return (
        <SidebarContainer>
            <SidebarHeader>
                <div>

                    <SidebarUserInfo>
                        <UserInfo />
                    </SidebarUserInfo>

                    <MobileIcon className="menu-icon">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </MobileIcon>
                </div>

                {isOpen && (
                    <NavMobileContainer>
                        {NavMobileLinks.map(({ title, path }) => (
                            <NavMobileItem key={path} title={title} path={path} textcolor="base-text-darker" />
                        ))}
                    </NavMobileContainer>
                )}
            </SidebarHeader>
            <SidebarBody>
                <DesktopNav>
                    <ul>
                        {navData.map((item, index) => {
                            return (
                                <NavItem
                                    key={index}
                                    title={item.title}
                                    path={item.path}
                                    icon={item.icon}
                                    color={isActiveRoute(item.path) ? 'brand-blue' : 'base-text-lighter'}
                                />
                            )
                        })}
                    </ul>
                </DesktopNav>
            </SidebarBody>
        </SidebarContainer>
    )
}