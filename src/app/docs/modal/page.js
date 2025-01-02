// src/app/docs/modal/page.js

'use client';
import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/modal/example/features';
import Sample from '@/app/docs/modal/example/_sample';

const DashboardPage = () => {


    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Modal</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Modal</PageInfo.Title>
                <PageInfo.Description>
                    The Modal component provides a focused interface for presenting content or prompting user interactions. It overlays the screen to grab attention and isolate the user interaction from the rest of the page.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Displaying forms or user inputs</PageInfo.Item>
                    <PageInfo.Item>Confirmations or alerts</PageInfo.Item>
                    <PageInfo.Item>Showing additional content like images or videos</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />

        </div>
    );
};

export default DashboardPage;
