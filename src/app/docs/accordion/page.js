// src/app/docs/accordion/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
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
                    The Accordion component is used to display collapsible sections of content. It can be customized to display items in both vertical and horizontal directions.
                </PageInfo.Description>
            </PageInfo>
            <Basic />
            <DefaultOpen />
            <DisabledItem />
            <CloseOthers />
            <AllOpen />
        </div>
    );
};

export default DashboardPage;
