'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/dropdown/example/features';
import Basic from '@/app/docs/dropdown/example/basic';

const DashboardPage = () => {

    return (
        <div className="p-6">
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Dropdown</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Dropdown</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Dropdown</code> component is a highly flexible and customizable UI component designed to provide users with a convenient way to display a list of options or actions.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Use it in navigation menus to show nested links.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Provide users with a list of actions (e.g., user settings menu).
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Enhance forms with dropdown-based selections.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            {/* Features Section */}
            <Features />

            {/* Basic Example Section */}
            <Basic />
        </div>
    );
};

export default DashboardPage;
