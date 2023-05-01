import PropTypes from 'prop-types';
import { Button } from './style';

export function ButtonLink({ path, backgroundColor, hoverBackgroundColor, textColor, children, weight, width, hoverColor }) {
    return (
        <Button
            to={path}
            weight={weight}
            width={width}
            hoverColor={hoverColor}
            backgroundColor={backgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            textColor={textColor}
        >
            {children}
        </Button>
    );
}

ButtonLink.propTypes = {
    path: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    weight: PropTypes.number,
    width: PropTypes.number,
    children: PropTypes.node.isRequired,
};
