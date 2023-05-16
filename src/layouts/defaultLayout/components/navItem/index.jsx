import { RegularText } from '../../../../styles/typograph'
import { NavItemContainer, NavItemIcon } from './style'

// eslint-disable-next-line react/prop-types
export function NavItem({ title, path, icon, color }) {
    return (
        <NavItemContainer>
            <a href={path}>
                <NavItemIcon color={color}>
                    {icon}
                </NavItemIcon>
                <RegularText fontSize="text-m" weight="500" color={color}>
                    {title}
                </RegularText>
            </a>
        </NavItemContainer>
    )
}