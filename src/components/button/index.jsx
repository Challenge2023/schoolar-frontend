import PropTypes from 'prop-types';
import { Button } from './style';

export function ButtonLink({ path, backgroundcolor, hoverbackgroundcolor, textcolor, children, weight, width, hovercolor }) {
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
            {children}
        </Button>
    );
}

ButtonLink.propTypes = {
    path: PropTypes.string.isRequired,
    backgroundcolor: PropTypes.string,
    hoverbackgroundcolor: PropTypes.string,
    textcolor: PropTypes.string,
    hovercolor: PropTypes.string,
    weight: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node.isRequired,
};
