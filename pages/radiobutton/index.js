import Head from 'next/head';
import React from 'react';
import { ApiDoc } from '../../components/doc/checkbox/apidoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { FormikDoc } from '../../components/doc/radiobutton/validation/formikdoc';
import { DisabledDoc } from '../../components/doc/radiobutton/disableddoc';
import { DynamicDoc } from '../../components/doc/radiobutton/dynamicdoc';
import { GroupDoc } from '../../components/doc/radiobutton/groupdoc';
import { ImportDoc } from '../../components/doc/radiobutton/importdoc';
import { InvalidDoc } from '../../components/doc/radiobutton/invaliddoc';
import { HookFormDoc } from '../../components/doc/radiobutton/validation/hookformdoc';

const RadioButtonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic',
            component: DynamicDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React RadioButton Component</title>
                <meta name="description" content="RadioButton is an extension to standard radio button element with theming." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>RadioButton</h1>
                    <p>RadioButton is an extension to standard radio button element with theming.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RadioButtonDemo;
