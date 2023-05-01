import { RegularText, TitleText } from "../../../../styles/typograph";
import { ImageContainer, IntroContainer, TextsContainer } from "./style";
import IntroImage from '../../../../assets/intro.png'

export function Intro() {
    return (
        <IntroContainer>
            <TextsContainer>
                <TitleText color="base-background" weight="700" fontSize="title-l">
                    Tecnologia e eficiência: transformando a forma como aprendemos.
                </TitleText>
                <RegularText color="base-text" weight="500" fontSize="text-s">
                    Unimos a tecnologia e a eficiência para oferecer aprendizagem personalizada e direcionada às necessidades dos alunos. A análise de dados e inteligência artificial permitem que professores possam identificar pontos específicos dos estudantes de forma mais precisa
                </RegularText>
            </TextsContainer>

            <ImageContainer>
                <img src={IntroImage} alt="intro-image" />
            </ImageContainer>
        </IntroContainer>
    )
}