import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function IntegersDoc(props) {
    const code = {
        basic: `
<label htmlFor="integer">Integers</label>
<InputText id="integer" keyfilter="int" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function IntegersDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="integer">Integers</label>
            <InputText id="integer" keyfilter="int" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function IntegersDoc() {

    return (
        <div className="grid p-fluid gap-2">
            <label htmlFor="integer">Integers</label>
            <InputText id="integer" keyfilter="int" />
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
                    <label htmlFor="integer">Integers</label>
                    <InputText id="integer" keyfilter="int" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
