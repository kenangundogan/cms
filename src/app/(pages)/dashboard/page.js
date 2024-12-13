'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Dashboard</PageInfo.Title>
                <PageInfo.Description>Dashboard description goes here.</PageInfo.Description>
            </PageInfo>
        </div>
    );
};

export default DashboardPage;
