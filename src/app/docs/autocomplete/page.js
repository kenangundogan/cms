// src/app/docs/autocomplete/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/autocomplete/example/_sample';
import Features from '@/app/docs/autocomplete/example/features';

const AutocompletePage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Autocomplete</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Autocomplete</PageInfo.Title>
                <PageInfo.Description>
                    The <code>Autocomplete</code> component provides an efficient way to search and select items from a dynamic list. It integrates with APIs to fetch results based on user input, offering flexibility for various use cases.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Searching for items like products, users, or categories in large datasets.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Providing real-time suggestions in search bars.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Enabling dynamic selection of values for forms or filters.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default AutocompletePage;
