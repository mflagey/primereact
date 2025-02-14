import { useRef } from 'react';
import { SplitButton } from '../../lib/splitbutton/SplitButton';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoadingDoc(props) {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: (e) => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: (e) => {
                window.location.hash = '/fileupload';
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items} loading></SplitButton>
        `,
        javascript: `
import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function LoadingDoc() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items} loading></SplitButton>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function LoadingDoc() {
    const toast = useRef<Toast>(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current?.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current?.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    const save = () => {
        toast.current?.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items} loading></SplitButton>
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
                <Toast ref={toast}></Toast>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading></SplitButton>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
