import { useState } from 'react';
import { Dropdown } from '../../lib/dropdown/Dropdown';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function EditableDoc(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    };

    const code = {
        basic: `
<Dropdown value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" editable />
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function EditableDoc() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e) => {
        setSelectedCity(e.value);
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" editable />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown, DropdownChangeParams } from 'primereact/dropdown';
import './DropdownDemo.css';

export default function EditableDoc() {
    const [selectedCity, setSelectedCity] = useState<any | null>(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e: DropdownChangeParams) => {
        setSelectedCity(e.value);
    }

    return (
        <div className="card flex justify-content-center dropdown-demo">
            <Dropdown value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" editable />
        </div>
    )
}
        `,
        extFiles: {
            'DropdownDemo.css': `
/* DropdownDemo.css */

.dropdown-demo .p-dropdown {
    width: 14rem;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SelectButton is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with the options collection. There are two alternatives of how to define the options property; One way is providing a collection
                    of <i>SelectItem</i> instances having label-value pairs whereas other way is providing an array of arbitrary objects along with the <i>optionLabel</i> and <i>optionValue</i> properties to specify the label/value field pair. In
                    addition, options can be simple primitive values such as a string array, in this case no optionLabel or optionValue is necessary.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center dropdown-demo">
                <Dropdown value={selectedCity} options={cities} onChange={onCityChange} optionLabel="name" editable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
