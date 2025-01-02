//src/app/docs/box/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/box/example/features';
import Sample from '@/app/docs/box/example/_sample';

const BoxDocsPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Box</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Box</PageInfo.Title>
                <PageInfo.Description>
                    The Box component is a versatile container used to structure and organize content.
                    It consists of sections such as Head, Body, and Foot, making it ideal for card-based designs.
                    It also supports advanced features like fullscreen mode for improved usability.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Information cards</PageInfo.Item>
                    <PageInfo.Item>Task or note containers</PageInfo.Item>
                    <PageInfo.Item>Advanced data visualization</PageInfo.Item>
                    <PageInfo.Item>Organizing content within modals</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default BoxDocsPage;
