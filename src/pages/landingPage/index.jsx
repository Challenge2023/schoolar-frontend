import { Intro } from "./components/intro";
import { LandingPageContainer } from "./style";
import { Brands } from "./components/brands"
import Analytics from "../../assets/analytics.png"
import Upload from "../../assets/upload-test.png"

export function LandingPage() {

    return (
        <LandingPageContainer>
            <Intro />
            <Brands />
        </LandingPageContainer>
    )
}