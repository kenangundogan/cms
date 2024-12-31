// src/app/docs/table/page.js

'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/table/example/_sample';

const TablePage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Table</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Table Component Documentation</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Table</code> component is used to display data in a tabular format.
                </PageInfo.Description>
            </PageInfo>
            <Sample />
        </div>
    );
};

export default TablePage;
