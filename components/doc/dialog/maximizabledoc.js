import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Dialog } from '../../lib/dialog/Dialog';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MaximizableDoc(props) {
    const [displayMaximizable, setDisplayMaximizable] = useState(false);

    const onClick = (name, position) => {
        setDisplayMaximizable(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        setDisplayMaximizable(false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }} />
<Dialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
    <p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</Dialog>
        `,
        javascript: `
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function MaximizableDoc() {
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    const onClick = (name, position) => {
        setDisplayResponsive(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        setDisplayResponsive(false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    return (
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }} />
            <Dialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                <p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </Dialog>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dialog, DialogPositionType } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function MaximizableDoc() {
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    const onClick = (name: string, position: DialogPositionType) => {
        setDisplayResponsive(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name: string) => {
        setDisplayResponsive(false);
    };

    const renderFooter = (name: string) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    return (
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }} />
            <Dialog header="Header" visible={displayMaximizable} maximizable modal style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                <p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </Dialog>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Maximizable</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayMaximizable')} className="mr-2 mb-2 line-height-3" style={{ minWidth: '10rem' }} />
                <Dialog header="Header" visible={displayMaximizable} maximizable modal className="mr-2 mb-2 line-height-3" style={{ width: '50vw' }} footer={renderFooter('displayMaximizable')} onHide={() => onHide('displayMaximizable')}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
