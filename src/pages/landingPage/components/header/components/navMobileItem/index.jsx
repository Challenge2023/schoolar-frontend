import { NavLink } from './style'

// eslint-disable-next-line react/prop-types
export function NavMobileItem({ title, path, textcolor }) {
    return (
        <li>
            <NavLink href={path} textcolor={textcolor}>{title}</NavLink>
        </li>
    )
}