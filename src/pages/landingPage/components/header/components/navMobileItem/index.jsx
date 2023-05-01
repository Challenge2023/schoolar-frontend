import { NavLink } from './style'

// eslint-disable-next-line react/prop-types
export function NavMobileItem({ title, path }) {
    return (
        <li>
            <NavLink href={path}>{title}</NavLink>
        </li>
    )
}