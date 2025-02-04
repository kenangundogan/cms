'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Haber</Breadcrumb.Item>
                <Breadcrumb.Item>Ekle</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Haber</PageInfo.Title>
                <PageInfo.Description>Haber listesi burada yer alacak.</PageInfo.Description>
            </PageInfo>
        </div>
    );
};

export default DashboardPage;
