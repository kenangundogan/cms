'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';

const generateBasicExample = () => {
    return {
        JS: `
<Breadcrumb>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb>
`,
    };
};

const SampleExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Sample Usage</Example.Title>
                <Example.Description>
                    This is a basic example of the Table component with all features enabled.
                </Example.Description>
                <Example.Body>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
                    </Breadcrumb>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
