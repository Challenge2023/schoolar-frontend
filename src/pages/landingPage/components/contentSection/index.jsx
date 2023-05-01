import PropTypes from 'prop-types';
import { ContentSectionContainer, ImageContainer, TextsContainer } from './style';
import { RegularText, TitleText } from "../../../../styles/typograph";

export function ContentSection({ title, desc, image, animation }) {
    return (
        <ContentSectionContainer data-aos={animation}>
            <TextsContainer>
                <TitleText color="base-white" weight="700" fontSize="title-l">
                    {title}
                </TitleText>
                <RegularText color="base-background" weight="500" fontSize="text-m">
                    {desc}
                </RegularText>
            </TextsContainer>

            <ImageContainer>
                <img src={image} alt="image" />
            </ImageContainer>
        </ContentSectionContainer>
    )
}

ContentSection.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    animation: PropTypes.string.isRequired,
};