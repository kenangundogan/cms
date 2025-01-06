'use client';

import { ClockIcon } from '@heroicons/react/24/outline';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DateTimePicker from "@/app/components/ui/DateTimePicker/DateTimePicker";

// Basic Date Picker
const generateBasicExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Tarih Seç"
    id="default-date-picker"
    name="date"
    mode="date"
    defaultValue="2025-01-01"
    onChange={(value) => console.log("Seçilen Tarih:", value)}
/>
        `,
    };
};

// Time Picker
const generateTimeExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Saat Seç"
    id="time-picker"
    name="time"
    mode="time"
    placeholder="Saat seçiniz"
    iconLeft={<ClockIcon />}
    onChange={(value) => console.log("Seçilen Saat:", value)}
/>
        `,
    };
};

// Datetime Picker
const generateDatetimeExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Tarih ve Saat Seç"
    id="datetime-picker"
    name="datetime"
    mode="datetime"
    placeholder="Tarih ve saat seçiniz"
    onChange={(value) => console.log("Seçilen Tarih ve Saat:", value)}
/>
        `,
    };
};

// Week Picker
const generateWeekExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Hafta Seç"
    id="week-picker"
    name="week"
    mode="week"
    placeholder="Hafta seçiniz"
    onChange={(value) => console.log("Seçilen Hafta:", value)}
/>
        `,
    };
};

// Disabled
const generateDisabledExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Tarih Seç"
    id="disabled-date-picker"
    name="date"
    mode="date"
    defaultValue="2025-01-01"
    onChange={(value) => console.log("Seçilen Tarih:", value)}
    disabled
/>
        `,
    };
};

// Date Between
const generateDateBetweenExample = () => {
    return {
        JS: `
<div className='mb-4'>
    <DateTimePicker
        label="Tarih Seç"
        id="date-between-picker"
        name="date"
        mode="date"
        defaultValue="2025-01-01"
        onChange={(value) => console.log("Seçilen Tarih:", value)}
        min="2025-01-01"
        max="2025-01-12"
    />
</div>
        `,
    };
};

// Size
const generateSizeExample = () => {
    return {
        JS: `
<DateTimePicker
    label="Tarih Seç"
    id="small-date-picker"
    name="date"
    mode="date"
    defaultValue="2025-01-01"
    onChange={(value) => console.log("Seçilen Tarih:", value)}
    size="sm"
/>
        `,
    };
};



const SampleExample = () => {
    return (
        <div className="space-y-6">
            {/* Basic Usage */}
            <Example>
                <Example.Title>Basic Usage</Example.Title>
                <Example.Description>
                    This example demonstrates basic usage of the <code>DateTimePicker</code> component for selecting a date.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Tarih Seç"
                            id="default-date-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                        />
                    </div>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>

            {/* Time Picker */}
            <Example>
                <Example.Title>Time Picker</Example.Title>
                <Example.Description>
                    This example shows how to use the <code>DateTimePicker</code> component for selecting a time.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Saat Seç"
                            id="time-picker"
                            name="time"
                            mode="time"
                            placeholder="Saat seçiniz"
                            onChange={(value) => console.log("Seçilen Saat:", value)}
                        />
                    </div>
                    <CodeCard codeSnippets={generateTimeExample()} />
                </Example.Body>
            </Example>

            {/* Datetime Picker */}
            <Example>
                <Example.Title>Datetime Picker</Example.Title>
                <Example.Description>
                    Use the <code>DateTimePicker</code> component to select both a date and a time.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Tarih ve Saat Seç"
                            id="datetime-picker"
                            name="datetime"
                            mode="datetime"
                            placeholder="Tarih ve saat seçiniz"
                            onChange={(value) => console.log("Seçilen Tarih ve Saat:", value)}
                        />
                    </div>
                    <CodeCard codeSnippets={generateDatetimeExample()} />
                </Example.Body>
            </Example>

            {/* Week Picker */}
            <Example>
                <Example.Title>Week Picker</Example.Title>
                <Example.Description>
                    This example demonstrates how to use the <code>DateTimePicker</code> component for selecting a specific week.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Hafta Seç"
                            id="week-picker"
                            name="week"
                            mode="week"
                            placeholder="Hafta seçiniz"
                            onChange={(value) => console.log("Seçilen Hafta:", value)}
                        />
                    </div>
                    <CodeCard codeSnippets={generateWeekExample()} />
                </Example.Body>
            </Example>

            {/* Disabled */}
            <Example>
                <Example.Title>Disabled</Example.Title>
                <Example.Description>
                    This example shows how to disable the <code>DateTimePicker</code> component.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Tarih Seç"
                            id="disabled-date-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                            disabled
                        />
                    </div>
                    <CodeCard codeSnippets={generateDisabledExample()} />
                </Example.Body>
            </Example>

            {/* Date Between */}
            <Example>
                <Example.Title>Date Between</Example.Title>
                <Example.Description>
                    This example demonstrates how to set a date range for the <code>DateTimePicker</code> component.
                </Example.Description>
                <Example.Body>
                    <div className='mb-4'>
                        <DateTimePicker
                            label="Tarih Seç"
                            id="date-between-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                            min="2025-01-01"
                            max="2025-01-12"
                        />
                    </div>
                    <CodeCard codeSnippets={generateDateBetweenExample()} />
                </Example.Body>
            </Example>

            {/* Size */}
            <Example>
                <Example.Title>Size</Example.Title>
                <Example.Description>
                    This example demonstrates how to change the size of the <code>DateTimePicker</code> component.
                </Example.Description>
                <Example.Body>
                    <div className='flex flex-wrap gap-2 mb-4'>
                        <DateTimePicker
                            label="Tarih Seç"
                            id="small-date-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                            size="sm"
                        />
                        <DateTimePicker
                            label="Tarih Seç"
                            id="medium-date-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                            size="md"
                        />
                        <DateTimePicker
                            label="Tarih Seç"
                            id="large-date-picker"
                            name="date"
                            mode="date"
                            defaultValue="2025-01-01"
                            onChange={(value) => console.log("Seçilen Tarih:", value)}
                            size="lg"
                        />
                    </div>
                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

        </div>
    );
};

export default SampleExample;
