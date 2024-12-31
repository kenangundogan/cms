// src/app/docs/accordion/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Accordion from '@/app/components/ui/accordion/Accordion';
import CodeCard from "@/app/components/ui/CodeCard";
import Example from "@/app/docs/components/Example";

const DashboardPage = () => {
    const basicExample = {
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
        `
    };

    const allOpenExample = {
        JS: `
<Accordion isAllOpen={true}>
    <Accordion.Item>
        <Accordion.Head>Title 1</Accordion.Head>
        <Accordion.Body>
            All items are open by default.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item>
        <Accordion.Head>Title 2</Accordion.Head>
        <Accordion.Body>
            Content for the second section.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
        `
    };

    const defaultOpenExample = {
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
        `
    };

    const closeOthersExample = {
        JS: `
<Accordion closeOthers={true}>
    <Accordion.Item defaultOpen={true}>
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
        `
    };

    const disabledExample = {
        JS: `
<Accordion>
    <Accordion.Item>
        <Accordion.Head>Title 1</Accordion.Head>
        <Accordion.Body>
            This is the first item's content.
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item disable={true}>
        <Accordion.Head>Title 2</Accordion.Head>
        <Accordion.Body>
            This item is disabled.
        </Accordion.Body>
    </Accordion.Item>
</Accordion>
`
    };

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Accordion</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Accordion</PageInfo.Title>
                <PageInfo.Description>
                    The Accordion component is used to display collapsible sections of content. It can be customized to display items in both vertical and horizontal directions.
                </PageInfo.Description>
            </PageInfo>

            {/* Basic Example */}
            <Example>
                <Example.Title>Basic Example</Example.Title>
                <Example.Description>
                    A simple accordion with two sections that can be expanded or collapsed individually.
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
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>

            {/* All Items Open */}
            <Example>
                <Example.Title>All Items Open</Example.Title>
                <Example.Description>
                    Use the <code>isAllOpen</code> prop to render all items expanded by default.
                </Example.Description>
                <Example.Body>
                    <Accordion isAllOpen={true}>
                        <Accordion.Item>
                            <Accordion.Head>Title 1</Accordion.Head>
                            <Accordion.Body>
                                All items are open by default.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Head>Title 2</Accordion.Head>
                            <Accordion.Body>
                                Content for the second section.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <CodeCard codeSnippets={allOpenExample} />
                </Example.Body>
            </Example>

            {/* Default Open Item */}
            <Example>
                <Example.Title>Default Open Item</Example.Title>
                <Example.Description>
                    Use the <code>defaultOpen</code> prop to render a specific item expanded by default.
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
                    <CodeCard codeSnippets={defaultOpenExample} />
                </Example.Body>
            </Example>

            {/* Close Others */}
            <Example>
                <Example.Title>Close Others</Example.Title>
                <Example.Description>
                    Use the <code>closeOthers</code> prop to close other items when a new item is expanded.
                </Example.Description>
                <Example.Body>
                    <Accordion closeOthers={true}>
                        <Accordion.Item defaultOpen={true}>
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
                    <CodeCard codeSnippets={closeOthersExample} />
                </Example.Body>
            </Example>

            {/* Disabled Item */}
            <Example>
                <Example.Title>Disabled Item</Example.Title>
                <Example.Description>
                    Use the <code>disable</code> prop to disable an item.
                </Example.Description>
                <Example.Body>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Head>Title 1</Accordion.Head>
                            <Accordion.Body>
                                This is the first item's content.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item disable={true}>
                            <Accordion.Head>Title 2</Accordion.Head>
                            <Accordion.Body>
                                This item is disabled.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <CodeCard codeSnippets={disabledExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default DashboardPage;
