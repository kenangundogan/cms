'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/checkbox/example/_sample';
import Features from '@/app/docs/checkbox/example/features';

const CheckboxPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Checkbox</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Checkbox</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Checkbox</code> component allows users to select one or more items from a set. It supports various styling options, sizes, shapes, and custom behavior to fit different use cases in your project.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Use for single or multiple selections in forms, such as accepting terms and conditions or selecting multiple options.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Provide user-friendly input options with customizable styles and sizes to match your application's theme.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Add functionality for controlled or uncontrolled components based on your form requirements.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default CheckboxPage;
