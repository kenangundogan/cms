'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Accordion from '@/app/components/ui/accordion/Accordion';

const generateBasicExample = () => {
    return {
        JS: `
<Accordion>
    <Accordion.Item defaultOpen={true}>
        <Accordion.Head>Title 1</Accordion.Head>
        <Accordion.Body>
            This section is open by default.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item>
        <Accordion.Head>Title 2</Accordion.Head>
        <Accordion.Body>
            This section is closed by default.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
        `,
    };
};

const BasicExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Default Open Items</Example.Title>
                <Example.Description>
                    Use the <code>defaultOpen</code> prop to open an item by default.
                </Example.Description>
                <Example.Body>
                    <Accordion>
                        <Accordion.Item defaultOpen={true}>
                            <Accordion.Head>Title 1</Accordion.Head>
                            <Accordion.Body>
                                This section is open by default.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Head>Title 2</Accordion.Head>
                            <Accordion.Body>
                                This section is closed by default.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default BasicExample;
