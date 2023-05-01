import { BaseSectionContainer, ImageContainer, TextContainer } from "./style";
import PropTypes from 'prop-types';
import { RegularText, TitleText } from "../../../../styles/typograph";

export function BaseSection({ title, desc, image, animation }) {
    return (
        <BaseSectionContainer data-aos={animation}>
            <TextContainer>
                <TitleText color="brand-blue" weight="700" fontSize="title-l">
                    {title}
                </TitleText>
                <RegularText color="base-text-darker" weight="400" fontSize="text-m">
                    {desc}
                </RegularText>
            </TextContainer>

            <ImageContainer>
                <img src={image} alt="image" />
            </ImageContainer>
        </BaseSectionContainer>
    )
}

BaseSection.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    animation: PropTypes.string.isRequired,
};