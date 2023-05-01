import { NavLink } from './style'

// eslint-disable-next-line react/prop-types
export function NavDesktopItem({ title, path }) {
    return (
        <li>
            <NavLink href={path}>{title}</NavLink>
        </li>
    )
}