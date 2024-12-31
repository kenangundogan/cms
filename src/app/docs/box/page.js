//src/app/docs/box/page.js
'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Box from '@/app/components/ui/box/Box';
import CodeCard from "@/app/components/ui/CodeCard";
import Example from "@/app/docs/components/Example";

const BoxDocsPage = () => {

    const basicExample = {
        JS: `
        <Box>
            <Box.Head>Box Title</Box.Head>
            <Box.Body>
                <p>This is the body of the box. You can add any content here, such as text, images, or other components.</p>
            </Box.Body>
            <Box.Foot>
                <p>This is the footer of the box.</p>
            </Box.Foot>
        </Box>
            `
    };

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Box</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Box Component Documentation</PageInfo.Title>
                <PageInfo.Description>
                    The <strong>Box</strong> component is a flexible and reusable container for organizing UI content.
                    It provides a structured layout with optional Header, Body, and Footer subcomponents, making it ideal for creating
                    consistent and clean interfaces.
                </PageInfo.Description>
            </PageInfo>

            <Example>
                <Example.Title>Basic Example</Example.Title>
                <Example.Description>
                    Here is a basic implementation of the <strong>Box</strong> component, showcasing the use of the Head, Body, and Foot
                    subcomponents for a well-structured layout.
                </Example.Description>
                <Example.Body>
                    <Box>
                        <Box.Head>Box Title</Box.Head>
                        <Box.Body>
                            <p>This is the body of the box. You can add any content here, such as text, images, or other components.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Box.Body>
                        <Box.Foot>
                            <p>This is the footer of the box.</p>
                        </Box.Foot>
                    </Box>
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default BoxDocsPage;
