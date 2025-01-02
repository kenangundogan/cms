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
                    The TreeView component displays hierarchical data in a structured, expandable format. It’s ideal for nested structures like file directories or category hierarchies.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>File explorer interfaces</PageInfo.Item>
                    <PageInfo.Item>Category navigation in content management systems</PageInfo.Item>
                    <PageInfo.Item>Visualizing nested data structures</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default TreeviewPage;
