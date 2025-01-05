'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/select/example/_sample';
import Features from '@/app/docs/select/example/features';

const SelectPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Select</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Select</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Select</code> component is a versatile dropdown element that supports single and multiple selections, grouped options, custom styling, and more.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Use <code>Select</code> for dropdown menus where users can select one or multiple options.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Suitable for form inputs, settings selections, or categorized data filtering.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Supports enhanced UX with grouped options (<code>Optgroup</code>) and disabled options.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default SelectPage;
