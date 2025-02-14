import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function HexDoc(props) {
    const code = {
        basic: `
<label htmlFor="hex">Hex</label>
<InputText id="hex" keyfilter="hex" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function HexDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="hex">Hex</label>
            <InputText id="hex" keyfilter="hex" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function HexDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="hex">Hex</label>
            <InputText id="hex" keyfilter="hex" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid gap-2">
                    <label htmlFor="hex">Hex</label>
                    <InputText id="hex" keyfilter="hex" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
