// src/app/docs/datepicker/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/datetimepicker/example/_sample';
import Features from '@/app/docs/datetimepicker/example/features';

const DatePickerPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Date Picker</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Date Picker</PageInfo.Title>
                <PageInfo.Description>
                    The <code>DatePicker</code> component allows users to select dates, times, or weeks in an intuitive and user-friendly way. It is versatile and can be used in various scenarios like forms, scheduling, and reports.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Form date inputs for collecting user-provided dates like birthdates or appointment times.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Scheduling tools to manage time and date-specific events.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Week-based reports or metrics that require a week selector for data analysis.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Combined date and time selectors for applications requiring precise time tracking.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />

            <Sample />
        </div>
    );
};

export default DatePickerPage;
