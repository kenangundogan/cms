// src/app/docs/table/basic/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/table/basic/example/_sample';
import Features from '@/app/docs/table/basic/example/features';

const TablePage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs/table">Table</Breadcrumb.Item>
                <Breadcrumb.Item>Basic</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Table</PageInfo.Title>
                <PageInfo.Description>
                    The Table component provides a simple and flexible way to display tabular data without advanced features like filtering or pagination. It’s a foundational table component for building lightweight and fast layouts.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Displaying simple lists or data overviews</PageInfo.Item>
                    <PageInfo.Item>Static tables without dynamic data</PageInfo.Item>
                    <PageInfo.Item>Quick data visualization in dashboards</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default TablePage;
