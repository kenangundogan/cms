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
                    The <strong>Box</strong> component is a flexible and reusable container for organizing UI content.
                    It provides a structured layout with optional Header, Body, and Footer subcomponents, making it ideal for creating
                    consistent and clean interfaces.
                </PageInfo.Description>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default BoxDocsPage;
