// src/app/docs/inputtext/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/textfield/example/_sample';
import Features from '@/app/docs/textfield/example/features';

const InputTextPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Input Text</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Input Text</PageInfo.Title>
                <PageInfo.Description>
                    The <strong>Input Text</strong> component provides a flexible and customizable way to create
                    input fields for your application. It supports validations, icons, placeholders, and much more
                    to enhance the user experience.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Creating form fields with validations such as required fields, email addresses, and phone numbers.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Displaying input fields with dynamic icons for better user interaction.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Using the component as a <strong>textarea</strong> for multi-line text input, such as comments or descriptions.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Supporting character limits with a character counter for user guidance.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default InputTextPage;
