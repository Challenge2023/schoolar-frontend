import { SelectContainer } from "./style";
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export function SelectFilter({ value, options, onChange }) {
    return (
        <SelectContainer value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option.value}>{option.label}</option>
            ))}
        </SelectContainer>
    )
}

SelectFilter.propTypes = {
    // eslint-disable-next-line no-undef
    options: PropTypes.arrayOf(PropTypes.string)
}