// src/app/docs/tabs/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/tabs/example/features';
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
                    The Tabs component organizes content into multiple sections, displaying one section at a time. Users can switch between tabs to view different content without navigating away from the page.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Ogranizing settings pages</PageInfo.Item>
                    <PageInfo.Item>Grouping data into logical sections</PageInfo.Item>
                    <PageInfo.Item>Creating clean and efficient UI layouts for dashboards</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default DashboardPage;
