import { FooterLink } from "./style";

// eslint-disable-next-line react/prop-types
export function FooterLinks({ name, path }) {
    return (
        <li>
            <FooterLink href={path}>{name}</FooterLink>
        </li>

    )
}