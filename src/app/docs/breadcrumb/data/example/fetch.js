'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataBreadcrumb from '@/app/components/ui/breadcrumb/DataBreadcrumb';

const generateBasicExample = () => {
    return {
        JS: `
<DataBreadcrumb
    source={{
        type: 'fetch',
        endpoint: '/api/breadcrumb',
        mapping: {
            data: 'breadcrumb',
            type: 'array',
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

const FetchExample = () => {
    return (
        <Example>
            <Example.Title>Fetched Data</Example.Title>
            <Example.Description>
                This example demonstrates how to use the <code>DataBreadcrumb</code> component to fetch and render breadcrumb data dynamically from an API endpoint.
            </Example.Description>
            <Example.Body>
                <DataBreadcrumb
                    source={{
                        type: 'fetch',
                        endpoint: '/api/breadcrumb',
                        mapping: {
                            data: 'breadcrumb',
                            type: 'array',
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

export default FetchExample;
