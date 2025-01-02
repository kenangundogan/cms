// src/app/docs/breadcrumb/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/breadcrumb/example/_sample';
import Features from '@/app/docs/breadcrumb/example/features';

const BreadcrumbPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Breadcrumb</PageInfo.Title>
                <PageInfo.Description>
                    The Breadcrumb component allows users to understand their location within a site and navigate back to previous pages or categories easily. It’s ideal for hierarchical navigation.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Category navigation in e-commerce sites</PageInfo.Item>
                    <PageInfo.Item>Hierarchical links in blog articles</PageInfo.Item>
                    <PageInfo.Item>Navigation in admin panels</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default BreadcrumbPage;
