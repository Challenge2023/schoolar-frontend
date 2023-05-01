import PropTypes from 'prop-types';
import { Button } from './style';

export function ButtonLink({ path, backgroundColor, hoverBackgroundColor, textColor, children }) {
    return (
        <Button
            to={path}
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
    children: PropTypes.node.isRequired,
};
