import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./style"
import { Header } from "../../pages/landingPage/components/header"
import { Footer } from "../../pages/landingPage/components/footer"

export function LandingLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}