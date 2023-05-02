import { Button } from './style'

// eslint-disable-next-line react/prop-types
export function ButtonForm({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}