// src/app/docs/tabs/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/tabs/example/_sample';

const DashboardPage = () => {

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Tabs</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Tabs</PageInfo.Title>
                <PageInfo.Description>
                    The Tabs component is used to create a tabbed interface. It is a simple way to switch between different sections of content.
                </PageInfo.Description>
            </PageInfo>
            <Sample />
        </div>
    );
};

export default DashboardPage;
