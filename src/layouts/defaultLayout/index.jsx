import { Outlet } from "react-router-dom";
import { MainContent } from "./components/mainContent";
import { SideBar } from "./components/sideBar";
import { LayoutContainer } from "./style";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <SideBar />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    )
}