import { Input, InputContainer, ErrorMessage } from './style'
import PropTypes from 'prop-types';
import { forwardRef } from 'react'

export function InputBase(
    { labelText, placeholder, inputColor, disabled, typeInput, error, ...props },
    ref,
) {
    return (
        <InputContainer>
            <label htmlFor={props.name}>{labelText}</label>
            <Input
                ref={ref}
                type={typeInput}
                placeholder={placeholder}
                inputColor={inputColor}
                disabled={disabled}
                {...props}
                isInvalid={!!error}
            />
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
        </InputContainer>
    )
}

InputBase.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputColor: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    typeInput: PropTypes.string.isRequired,
    error: PropTypes.object,
    name: PropTypes.string.isRequired,
};

export const InputForm = forwardRef(InputBase)