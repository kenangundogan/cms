'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataBreadcrumb from '@/app/components/ui/breadcrumb/DataBreadcrumb';

const generateBasicExample = () => {
    return {
        JS: `
 <DataBreadcrumb
    source={{
        type: 'data',
        mapping: {
            data: breadcrumbData,
            fields: {
                label: 'label',
                href: 'href',
            },
        },
    }}
/>
        `,
    };
};

const sampleData = [
    {
        "label": "Home",
        "href": "/"
    },
    {
        "label": "Games",
        "href": "/home"
    },
    {
        "label": "Music",
        "href": "/games"
    },
    {
        "label": "Tools",
        "href": "/music"
    },
    {
        "label": "Automotive",
        "href": "/tools"
    }
];

const SampleExample = () => {
    return (
        <Example>
            <Example.Title>Static Data</Example.Title>
            <Example.Description>
                This example demonstrates how to use the <code>DataBreadcrumb</code> component with statically provided breadcrumb data instead of fetching from an API.
            </Example.Description>
            <Example.Body>
                <DataBreadcrumb
                    source={{
                        type: 'data',
                        mapping: {
                            data: sampleData,
                            fields: {
                                label: 'label',
                                href: 'href',
                            },
                        },
                    }}
                />
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
