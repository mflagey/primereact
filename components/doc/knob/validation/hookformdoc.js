import { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { Knob } from '../../../lib/knob/Knob';

export function HookFormDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        knobValue: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.knobValue && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Controller
    name="city"
    control={control}
    rules={{ required: 'knobValue is required.' }}
    render={({ field }) => (
        <CascadeSelect id={field.name} name="city" value={field.value} options={countries} optionLabel={'cname'} optionGroupLabel={'name'}
         optionGroupChildren={['states', 'cities']} style={{ minWidth: '14rem' }} placeholder={'Select a City'}
         onChange={(e) => field.onChange(e.value)}/>)}
    />
<Button type="submit" label="Submit" className="mt-2" />
        `,
        javascript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        knobValue: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.knobValue && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className="flex flex-column align-items-center">
                    <Controller
                        name="knobValue"
                        control={control}
                        rules={{ required: 'The value must be greater than zero.' }}
                        render={({ field }) => <Knob id={field.name} name="knobValue" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                    />

                    {getFormErrorMessage('knobValue')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </div>
            </form>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function HookFormDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const defaultValues = {
        knobValue: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.knobValue && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>;
    };

    return (
        <div className="card flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Toast ref={toast} />
                <div className="flex flex-column align-items-center">
                    <Controller
                        name="knobValue"
                        control={control}
                        rules={{ required: 'The value must be greater than zero.' }}
                        render={({ field }) => <Knob id={field.name} name="knobValue" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                    />

                    {getFormErrorMessage('knobValue')}
                    <Button type="submit" label="Submit" className="mt-2" />
                </div>
            </form>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Toast ref={toast} />
                    <div className="flex flex-column align-items-center">
                        <Controller
                            name="knobValue"
                            control={control}
                            rules={{ required: 'The value must be greater than zero.' }}
                            render={({ field }) => <Knob id={field.name} name="knobValue" value={field.value || '0'} onChange={(e) => field.onChange(e.value)} />}
                        />

                        {getFormErrorMessage('knobValue')}
                        <Button type="submit" label="Submit" className="mt-2" />
                    </div>
                </form>
            </div>
            <DocSectionCode code={code} dependencies={{ 'react-hook-form': '^7.39.4' }} />
        </>
    );
}
