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
                    The Modal component is used to display a modal dialog. It can be used to display a message, a form, or any other content.
                </PageInfo.Description>
            </PageInfo>

            <Features />
            <Sample />

        </div>
    );
};

export default DashboardPage;
