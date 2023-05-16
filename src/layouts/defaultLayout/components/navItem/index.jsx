import { RegularText } from '../../../../styles/typograph'
import { NavItemContainer, NavItemIcon } from './style'

// eslint-disable-next-line react/prop-types
export function NavItem({ title, path, icon }) {
    return (
        <NavItemContainer>
            <a href={path}>
                <NavItemIcon>
                    <img src={icon} alt="p" />
                </NavItemIcon>
                <RegularText fontSize="text-m" weight="500">
                    {title}
                </RegularText>
            </a>
        </NavItemContainer>
    )
}