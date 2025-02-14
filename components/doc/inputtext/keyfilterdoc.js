import Link from 'next/link';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function KeyFilterDoc(props) {
    const code = {
        basic: `
<InputText keyfilter="int" placeholder="Integers" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <InputText keyfilter="int" placeholder="Integers" />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <InputText keyfilter="int" placeholder="Integers" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText has built-in key filtering support to block certain keys, refer to <Link href="/keyfilter">keyfilter</Link> page for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText keyfilter="int" placeholder="Integers" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
