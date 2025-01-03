// src/app/docs/button/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/button/example/_sample';
import Features from '@/app/docs/button/example/features';

const ButtonPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Button</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Button</code> component is a versatile UI element used to perform actions or navigate users within an application.
                    It supports multiple variants, shapes, and sizes to suit different use cases and design requirements.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        <b>Primary Actions:</b> Use for main actions like form submission, saving data, or performing tasks.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Secondary Actions:</b> Use outline or text buttons for secondary or less critical actions.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Icon Buttons:</b> Perfect for actions like toggling, adding items, or showing a modal with minimal space usage.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Navigation:</b> Use buttons to navigate between pages or trigger navigation flows.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Minimalistic Actions:</b> Use text buttons for inline actions or links in minimal designs.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Customizable Interactions:</b> Combine different shapes, variants, and sizes to create tailored user interactions.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default ButtonPage;
