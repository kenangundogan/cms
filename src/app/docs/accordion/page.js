// src/app/docs/accordion/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/accordion/example/features';
import Basic from '@/app/docs/accordion/example/basic';
import DefaultOpen from '@/app/docs/accordion/example/defaultOpen';
import DisabledItem from '@/app/docs/accordion/example/disabledItem';
import CloseOthers from '@/app/docs/accordion/example/closeOthers';
import AllOpen from '@/app/docs/accordion/example/allOpen';

const DashboardPage = () => {

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Accordion</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Accordion</PageInfo.Title>
                <PageInfo.Description>
                    The Accordion component allows content to be collapsed or expanded. It’s ideal for organizing large amounts of information into manageable sections that users can open or close as needed.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Frequently Asked Questions (FAQ) sections</PageInfo.Item>
                    <PageInfo.Item>Step-by-step guides or tutorials</PageInfo.Item>
                    <PageInfo.Item>Content-heavy pages with collapsible sections</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            {/* Examples */}
            <Features />
            <Basic />
            <DefaultOpen />
            <DisabledItem />
            <CloseOthers />
            <AllOpen />
        </div>
    );
};

export default DashboardPage;
