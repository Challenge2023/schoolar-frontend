import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./style"

export function LandingLayout() {
    return (
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}