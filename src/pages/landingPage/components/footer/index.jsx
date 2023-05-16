import { ContactContainer, FooterContainer, FooterLinksContainer, PoweredContainer } from "./style";
import SchoolarBrand from "../../../../assets/schoolar-brand.svg"
import { ButtonLink } from "../../../../components/button";
import { FooterLinks } from "./components/footerLinks";
import { RegularText } from "../../../../styles/typograph";


export function Footer() {

    const Links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Sobre",
            path: "/sobre"
        },
        {
            name: "Termos",
            path: "/terms"
        },
    ]

    return (
        <FooterContainer>
            <ContactContainer>
                <img src={SchoolarBrand} alt="schoolar-logo" />

                <ButtonLink
                    path="/contact"
                    backgroundcolor="secondary-background"
                    hoverbackgroundcolor="brand-blue"
                    textcolor="brand-blue"
                    width="180px"
                    hovercolor="base-background"
                >
                    Contate-nos
                </ButtonLink>
            </ContactContainer>

            <FooterLinksContainer>
                {Links.map((item, index) => {
                    return (
                        <FooterLinks
                            key={index}
                            name={item.name}
                            path={item.path}
                        />
                    )
                })}
            </FooterLinksContainer>

            <PoweredContainer>
                <RegularText color="base-text-darker" weight="500" fontSize="text-ms">
                    powered by TOPA
                </RegularText>
            </PoweredContainer>

        </FooterContainer>
    )
}