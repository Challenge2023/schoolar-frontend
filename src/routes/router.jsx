import { Route, Routes } from "react-router-dom";
import { LandingLayout } from "../layouts/landingLayout";
import { LandingPage } from "../pages/landingPage";
import { Login } from "../pages/signIn";
import { PrivateRoute } from "./privateRoute";
import { DefaultLayout } from "../layouts/defaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingLayout />}>
                <Route path="/" element={<LandingPage />} />
            </Route>

            <Route path="/login" element={<Login />} />

            <Route path="/home" element={<PrivateRoute />}>
                <Route path="" element={<DefaultLayout />}>

                </Route>
            </Route>

        </Routes>
    )
}