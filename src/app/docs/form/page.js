// src/app/docs/form/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/form/example/_sample';
import Features from '@/app/docs/form/example/features';

const FormPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Form</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Form</PageInfo.Title>
                <PageInfo.Description>
                    The Form component is a versatile and accessible way to manage user input.
                    It provides a structure for handling data submission, validation, and styling,
                    making it suitable for a wide range of use cases. The Form component supports
                    modern HTML5 attributes, custom styling, and flexible configurations for developers.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        <b>User Registration Forms</b>: Collect and validate user information during signup.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>File Upload Forms</b>: Handle file inputs with `multipart/form-data` encoding for file uploads.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Feedback or Contact Forms</b>: Capture user feedback or inquiries with accessible layouts.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Search Filters</b>: Use forms for advanced search functionality with multiple input types.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>Authentication</b>: Login and password recovery forms with proper data validation.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        <b>E-commerce</b>: Checkout or address input forms tailored to user needs.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default FormPage;
