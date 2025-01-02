// src/app/docs/treeview/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/treeview/example/_sample';
import Features from '@/app/docs/treeview/example/features';

const TreeviewPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Treeview</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Treeview</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Treeview</code> component is a simple treeview component that can be used to display hierarchical data.
                </PageInfo.Description>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default TreeviewPage;
