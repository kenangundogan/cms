'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/radio/example/_sample';
import Features from '@/app/docs/radio/example/features';

const RadioPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Radio</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Radio</PageInfo.Title>
                <PageInfo.Description>
                    ...
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        ...
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default RadioPage;
