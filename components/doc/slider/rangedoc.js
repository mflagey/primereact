import { useState } from 'react';
import { Slider } from '../../lib/slider/Slider';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RangeDoc(props) {
    const [value, setValue] = useState([20, 80]);

    const code = {
        basic: `
<Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function RangeDemo() {
    const [value, setValue] = useState([20,80]);

    return (
        <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeParams } from "primereact/slider";

export default function RangeDemo() {
    const [value, setValue] = useState<number[]>([20,80]);

    return (
        <Slider value={value} onChange={(e: SliderChangeParams) => setValue(e.value)} className="w-14rem" range/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Range slider provides two handles to define two values. Enable <i>range</i> property and bind an array to implement a range slider.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Slider value={value} onChange={(e) => setValue(e.value)} range className="w-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
