import { Intro } from "./components/intro";
import { BaseSectionContainer, LandingPageContainer } from "./style";
import { Brands } from "./components/brands"
import Analytics from "../../assets/analytics.png"
import Upload from "../../assets/upload-test.png"
import Content from "../../assets/content-helper.png"
import { BaseSection } from "./components/baseSection";
import { ContentSection } from "./components/contentSection";

export function LandingPage() {

    const InfoSectionData = [
        {
            title: "O poder da tecnologia na correção de provas",
            desc: (
                <>
                    Com a Schoolar, os professores podem contar com uma funcionalidade que agiliza a correção de provas. Ao fazer o upload das provas no sistema, a inteligência artificial da plataforma compara as respostas dos alunos com o gabarito previamente cadastrado, reduzindo significativamente a carga de trabalho dos educadores. <br /><br />
                    Dessa forma, os professores podem dedicar mais tempo a atividades importantes, como a preparação de aulas e o relacionamento com os alunos. Tornamos a correção de provas eficiente e prática, beneficiando
                </>
            ),
            image: Upload,
            animation: 'fade-right',
            equals: true
        },
        {
            title: "Utilize IA para criação de conteúdos",
            desc: "Com nossa tecnologia de inteligente artificial, você não perderá mais tempo com crianção de conteúdos para aulas, atividades, provas entre outros.",
            image: Content,
            animation: 'fade-left',
            equals: false
        },
        {
            title: "Análise desempenhos das suas salas e alunos",
            desc: (
                <>
                    Com a Schoolar, os professores podem contar com uma funcionalidade que agiliza a correção de provas. Ao fazer o upload das provas no sistema, a inteligência artificial da plataforma compara as respostas dos alunos com o gabarito previamente cadastrado, reduzindo significativamente a carga de trabalho dos educadores. <br /><br />
                    Dessa forma, os professores podem dedicar mais tempo a atividades importantes, como a preparação de aulas e o relacionamento com os alunos. Tornamos a correção de provas eficiente e prática, beneficiando
                </>
            ),
            image: Analytics,
            animation: 'fade-right',
            equals: true
        }
    ]

    return (
        <LandingPageContainer>
            <Intro />
            <Brands />

            <BaseSectionContainer>
                {InfoSectionData.map((item, index) => {
                    if (item.equals) {
                        return (
                            <BaseSection
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                                animation={item.animation}
                            />
                        )
                    } else {
                        return (
                            <ContentSection
                                key={index}
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                                animation={item.animation}
                            />
                        )
                    }
                })}
            </BaseSectionContainer>

        </LandingPageContainer>
    )
}