'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/switch/example/_sample';
import Features from '@/app/docs/switch/example/features';

const SwitchPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Switch</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Switch</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Switch</code> component is a versatile toggle button used to switch between two states: enabled and disabled. It is styled with TailwindCSS and supports multiple sizes, shapes, and color variants for a seamless UI integration.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Use it to toggle features on or off, such as enabling notifications or activating specific settings.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Customize the look and feel with different sizes, shapes, and color themes to match your application's design language.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Easily manage controlled and uncontrolled states for both functional and visual feedback.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default SwitchPage;
