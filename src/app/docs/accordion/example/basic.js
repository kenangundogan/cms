'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Accordion from '@/app/components/ui/accordion/Accordion';

const generateBasicExample = () => {
    return {
        JS: `
<Accordion>
    <Accordion.Item>
        <Accordion.Head>Title 1</Accordion.Head>
        <Accordion.Body>
            This is the first item's content.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item>
        <Accordion.Head>Title 2</Accordion.Head>
        <Accordion.Body>
            This is the second item's content.
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
                <Example.Title>Basic</Example.Title>
                <Example.Description>
                    Use the <code>Accordion</code> component to create an accordion.
                </Example.Description>
                <Example.Body>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Head>Title 1</Accordion.Head>
                            <Accordion.Body>
                                This is the first item's content.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Head>Title 2</Accordion.Head>
                            <Accordion.Body>
                                This is the second item's content.
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
