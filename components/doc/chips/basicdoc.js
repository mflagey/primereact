import { useState } from 'react';
import { Chips } from '../../lib/chips/Chips';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState([]);

    const code = {
        basic: `
<Chips value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeParams) => setValue(e.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Chips requires an array as its <i>value</i> and <i>onChange</i> callback to update the model.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
