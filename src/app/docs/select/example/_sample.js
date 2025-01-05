'use client';
import React, { useState } from "react";
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Select from "@/app/components/ui/select/Select";

// Code Snippets
const codeSnippets = {
    defaultExample: `
<Select value={value} onChange={setValue}>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>
</Select>
    `,
    multipleExample: `
<Select value={value} onChange={setValue} multiple>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>
</Select>
    `,
    disabledExample: `
<Select value={value} onChange={setValue} disabled>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2">Option 2</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>
</Select>
    `,
    optionDisableExample: `
<Select value={value} onChange={setValue}>
    <Select.Option value="1">Enabled Option</Select.Option>
    <Select.Option value="2" disabled>Disabled Option</Select.Option>
    <Select.Option value="3">Enabled Option</Select.Option>
</Select>
    `,
    multipleWithDisableExample: `
<Select value={value} onChange={setValue} multiple>
    <Select.Option value="1">Option 1</Select.Option>
    <Select.Option value="2" disabled>Disabled Option</Select.Option>
    <Select.Option value="3">Option 3</Select.Option>
</Select>
    `,
    optgroupExample: `
<Select value={value} onChange={setValue}>
    <Select.Optgroup label="Group 1">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
    </Select.Optgroup>
    <Select.Optgroup label="Group 2">
        <Select.Option value="3">Option 3</Select.Option>
        <Select.Option value="4">Option 4</Select.Option>
    </Select.Optgroup>
</Select>
    `,
    optgroupMultipleExample: `
<Select value={value} onChange={setValue} multiple>
    <Select.Optgroup label="Group 1">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
    </Select.Optgroup>
    <Select.Optgroup label="Group 2">
        <Select.Option value="3">Option 3</Select.Option>
        <Select.Option value="4">Option 4</Select.Option>
    </Select.Optgroup>
</Select>
    `,
};

const SampleExample = () => {
    const [singleValue, setSingleValue] = useState("");
    const [multipleValue, setMultipleValue] = useState([]);
    const [disabledValue, setDisabledValue] = useState("");
    const [optionDisabledValue, setOptionDisabledValue] = useState("");
    const [multipleWithDisableValue, setMultipleWithDisableValue] = useState([]);
    const [optgroupValue, setOptgroupValue] = useState("");
    const [optgroupMultipleValue, setOptgroupMultipleValue] = useState([]);

    return (
        <div>
            {/* Default Select */}
            <Example>
                <Example.Title>Default Select</Example.Title>
                <Example.Description>
                    A single-selection dropdown with default settings.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select value={singleValue} onChange={setSingleValue}>
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                            <Select.Option value="3">Option 3</Select.Option>
                        </Select>
                    </div>
                    <CodeCard codeSnippets={{ JS: codeSnippets.defaultExample }} />
                </Example.Body>
            </Example>

            {/* Multiple Select */}
            <Example>
                <Example.Title>Multiple Select</Example.Title>
                <Example.Description>
                    A dropdown allowing multiple selections.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select
                            value={multipleValue}
                            onChange={setMultipleValue}
                            multiple
                        >
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                            <Select.Option value="3">Option 3</Select.Option>
                        </Select>
                    </div>
                    <CodeCard codeSnippets={{ JS: codeSnippets.multipleExample }} />
                </Example.Body>
            </Example>

            {/* Disabled Select */}
            <Example>
                <Example.Title>Disabled Select</Example.Title>
                <Example.Description>
                    A dropdown that is fully disabled.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select
                            value={disabledValue}
                            onChange={setDisabledValue}
                            disabled
                        >
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2">Option 2</Select.Option>
                            <Select.Option value="3">Option 3</Select.Option>
                        </Select>
                    </div>
                    <CodeCard codeSnippets={{ JS: codeSnippets.disabledExample }} />
                </Example.Body>
            </Example>

            {/* Option Disabled */}
            <Example>
                <Example.Title>Option Disabled</Example.Title>
                <Example.Description>
                    An example where specific options are disabled.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select
                            value={optionDisabledValue}
                            onChange={setOptionDisabledValue}
                        >
                            <Select.Option value="1">Enabled Option</Select.Option>
                            <Select.Option value="2" disabled>
                                Disabled Option
                            </Select.Option>
                            <Select.Option value="3">Enabled Option</Select.Option>
                        </Select>
                    </div>
                    <CodeCard codeSnippets={{ JS: codeSnippets.optionDisableExample }} />
                </Example.Body>
            </Example>

            {/* Multiple Selection with Option Disabled */}
            <Example>
                <Example.Title>Multiple Select with Option Disabled</Example.Title>
                <Example.Description>
                    A dropdown allowing multiple selections where some options are disabled.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select
                            value={multipleWithDisableValue}
                            onChange={setMultipleWithDisableValue}
                            multiple
                        >
                            <Select.Option value="1">Option 1</Select.Option>
                            <Select.Option value="2" disabled>
                                Disabled Option
                            </Select.Option>
                            <Select.Option value="3">Option 3</Select.Option>
                        </Select>
                    </div>
                    <CodeCard
                        codeSnippets={{ JS: codeSnippets.multipleWithDisableExample }}
                    />
                </Example.Body>
            </Example>

            {/* Optgroup Example */}
            <Example>
                <Example.Title>Optgroup Example</Example.Title>
                <Example.Description>
                    Grouped options with labels for better categorization.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select value={optgroupValue} onChange={setOptgroupValue}>
                            <Select.Optgroup label="Group 1">
                                <Select.Option value="1">Option 1</Select.Option>
                                <Select.Option value="2">Option 2</Select.Option>
                            </Select.Optgroup>
                            <Select.Optgroup label="Group 2">
                                <Select.Option value="3">Option 3</Select.Option>
                                <Select.Option value="4">Option 4</Select.Option>
                            </Select.Optgroup>
                        </Select>
                    </div>
                    <CodeCard codeSnippets={{ JS: codeSnippets.optgroupExample }} />
                </Example.Body>
            </Example>

            {/* Optgroup Multiple Example */}
            <Example>
                <Example.Title>Optgroup with Multiple Select</Example.Title>
                <Example.Description>
                    Grouped options with support for multiple selections.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col gap-4">
                        <Select
                            value={optgroupMultipleValue}
                            onChange={setOptgroupMultipleValue}
                            multiple
                        >
                            <Select.Optgroup label="Group 1">
                                <Select.Option value="1">Option 1</Select.Option>
                                <Select.Option value="2">Option 2</Select.Option>
                            </Select.Optgroup>
                            <Select.Optgroup label="Group 2">
                                <Select.Option value="3">Option 3</Select.Option>
                                <Select.Option value="4">Option 4</Select.Option>
                            </Select.Optgroup>
                        </Select>
                    </div>
                    <CodeCard
                        codeSnippets={{ JS: codeSnippets.optgroupMultipleExample }}
                    />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
