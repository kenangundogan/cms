'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/list/example/_sample';
import Features from '@/app/docs/list/example/features';

const ListPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>List</PageInfo.Title>
                <PageInfo.Description>
                    The <code>List</code> component provides a structured way to display lists with rows and items. It supports features like alternating row colors, active row highlights, and dynamic configurations.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Displaying tabular data in a structured list format.</PageInfo.Item>
                    <PageInfo.Item>Highlighting specific rows for better user interaction.</PageInfo.Item>
                    <PageInfo.Item>Implementing dynamic styles for alternating row colors.</PageInfo.Item>
                    <PageInfo.Item>Supporting customizable row content with nested components.</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default ListPage;
