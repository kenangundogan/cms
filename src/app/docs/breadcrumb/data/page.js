// src/app/docs/breadcrumb/data/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/breadcrumb/data/example/features';
import SampleFetch from '@/app/docs/breadcrumb/data/example/fetch';
import SampleData from '@/app/docs/breadcrumb/data/example/data';

const BreadcrumbPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs/breadcrumb">Breadcrumb</Breadcrumb.Item>
                <Breadcrumb.Item>DataBreadcrumb</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>DataBreadcrumb</PageInfo.Title>
                <PageInfo.Description>
                    The <code>DataBreadcrumb</code> component helps users visualize and navigate hierarchical site structures. It supports dynamic data fetching and static data for flexible implementations.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Category navigation in e-commerce sites</PageInfo.Item>
                    <PageInfo.Item>Hierarchical links in blog articles</PageInfo.Item>
                    <PageInfo.Item>Navigation in admin panels</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <SampleFetch />
            <SampleData />
        </div>
    );
};

export default BreadcrumbPage;
