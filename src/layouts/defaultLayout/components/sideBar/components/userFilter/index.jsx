import { useState } from "react";
import { SelectFilter } from "../select";
import { ClassesContainer } from "./style";
import { RegularText } from "../../../../../../styles/typograph";


export function UserFilter() {
    const options = [
        { label: 'TODAS', value: 'TODAS' },
        { label: '2TDSPI', value: '2TDSPI' },
        { label: '2TDSPJ', value: '2TDSPJ' },
    ];

    const [value, setValue] = useState('fruit');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ClassesContainer>
            <SelectFilter options={options} value={value} onChange={handleChange} />
            <RegularText color="base-text-lighter" weight="400" fontSize="text-s">
                turma
            </RegularText>
        </ClassesContainer>
    )
}