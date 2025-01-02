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
                    The <code>Breadcrumb</code> component is used to display a breadcrumb navigation.
                </PageInfo.Description>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default BreadcrumbPage;
