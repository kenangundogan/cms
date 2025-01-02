'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/drawer/example/features';
import Sample from '@/app/docs/drawer/example/_sample';

const DrawerDocsPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Drawer</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Drawer</PageInfo.Title>
                <PageInfo.Description>
                    The Drawer component is a flexible side panel used to display additional content or functionality without navigating away from the current page.
                    It supports sliding in from any edge of the screen and can be closed via an overlay click or the "Escape" key.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Displaying additional information</PageInfo.Item>
                    <PageInfo.Item>Side navigation menus</PageInfo.Item>
                    <PageInfo.Item>Interactive forms or filters</PageInfo.Item>
                    <PageInfo.Item>Custom tool panels</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default DrawerDocsPage;
