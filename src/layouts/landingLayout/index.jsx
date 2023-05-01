import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./style"
import { Header } from "../../pages/landingPage/components/header"

export function LandingLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}