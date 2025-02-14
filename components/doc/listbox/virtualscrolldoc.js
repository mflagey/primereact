import { useState } from 'react';
import { ListBox } from '../../lib/listbox/ListBox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function VirtualScrollDoc(props) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: `Item #${i}`, value: i }));

    const code = {
        basic: `
<ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        `,
        javascript: `
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDoc() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e: ListBoxChangeParams) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { ListBox, ListBoxChangeParams } from 'primereact/listbox';

export default function VirtualScrollDoc() {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e: ListBoxChangeParams) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }}/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Whether to use the virtualScroller feature. The properties of <i>VirtualScroller</i> component can be used like an object in it.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ListBox value={selectedItem} options={items} virtualScrollerOptions={{ itemSize: 38 }} onChange={(e) => setSelectedItem(e.value)} style={{ width: '15rem' }} listStyle={{ height: '250px' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
