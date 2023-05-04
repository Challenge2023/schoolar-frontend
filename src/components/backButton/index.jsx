import PropTypes from 'prop-types';
import { Button } from './style';

export function BackButton({ path, backgroundcolor, hoverbackgroundcolor, textcolor, children, weight, width, hovercolor }) {
    return (
        <Button
            to={path}
            weight={weight}
            width={width}
            hovercolor={hovercolor}
            backgroundcolor={backgroundcolor}
            hoverbackgroundcolor={hoverbackgroundcolor}
            textcolor={textcolor}
        >
            <img src={children} alt="" />
        </Button>
    );
}

BackButton.propTypes = {
    path: PropTypes.string.isRequired,
    backgroundcolor: PropTypes.string,
    hoverbackgroundcolor: PropTypes.string,
    textcolor: PropTypes.string,
    hovercolor: PropTypes.string,
    weight: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node.isRequired,
};
