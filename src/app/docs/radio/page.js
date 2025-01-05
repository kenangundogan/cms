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
                    The <code>Radio</code> component is a versatile UI element for creating single-choice options. It provides a range of styling and functionality to fit seamlessly into any project.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Create single-choice forms or surveys.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Use for selecting options such as payment methods or delivery options.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Customize its size, color, and behavior to align with your design system.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default RadioPage;
