import { Route, Routes } from "react-router-dom";
import { LandingLayout } from "../layouts/landingLayout";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/signIn";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingLayout />}>
                <Route path="/" element={<LandingPage />} />
            </Route>

            <Route path="/login" element={<Login />} />

        </Routes>
    )
}