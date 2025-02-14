import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const code = {
        basic: `
<InputText placeholder="Username" />
<InputNumber placeholder="Price" />
<InputText placeholder="Website" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function BasicDoc() {

    return (
        <div className="card flex justify-content-center">
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">$</span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">.00</span>
            </div>
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">www</span>
                <InputText placeholder="Website" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function BasicDoc() {

    return (
        <div className="card flex justify-content-center">
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Username" />
            </div>
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">$</span>
                <InputNumber placeholder="Price" />
                <span className="p-inputgroup-addon">.00</span>
            </div>
            <div className="p-inputgroup">
                <span className="p-inputgroup-addon">www</span>
                <InputText placeholder="Website" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Addons</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="col-12 md:col-4">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Username" />
                    </div>
                </div>

                <div className="col-12 md:col-4">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">$</span>
                        <InputNumber placeholder="Price" />
                        <span className="p-inputgroup-addon">.00</span>
                    </div>
                </div>

                <div className="col-12 md:col-4">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">www</span>
                        <InputText placeholder="Website" />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
