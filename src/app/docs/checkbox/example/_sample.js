'use client';
import React, { useState } from "react";
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Checkbox from "@/app/components/ui/checkbox/Checkbox";

const generateDefaultExample = () => {
    return {
        JS: `
<Checkbox label="Primary" variant="primary" />
<Checkbox label="Secondary" variant="secondary" />
<Checkbox label="Info" variant="info" />
<Checkbox label="Success" variant="success" />
<Checkbox label="Danger" variant="danger" />
<Checkbox label="Warning" variant="warning" />
<Checkbox label="Black" variant="black" />
<Checkbox label="White" variant="white" />
        `,
    };
};

const generateOutlineExample = () => {
    return {
        JS: `
<Checkbox label="Primary" variantType="outline" variant="primary" />
<Checkbox label="Secondary" variantType="outline" variant="secondary" />
<Checkbox label="Info" variantType="outline" variant="info" />
<Checkbox label="Success" variantType="outline" variant="success" />
<Checkbox label="Danger" variantType="outline" variant="danger" />
<Checkbox label="Warning" variantType="outline" variant="warning" />
<Checkbox label="Black" variantType="outline" variant="black" />
<Checkbox label="White" variantType="outline" variant="white" />
        `,
    };
};

const generateShapeExample = () => {
    return {
        JS: `
<Checkbox label="Circle" shape="circle" variant="primary" />
<Checkbox label="Pill" shape="pill" variant="secondary" />
<Checkbox label="Rounded" shape="rounded" variant="info" />

<Checkbox label="Circle Outline" shape="circle" variantType="outline" variant="primary" />
<Checkbox label="Pill Outline" shape="pill" variantType="outline" variant="secondary" />
<Checkbox label="Rounded Outline" shape="rounded" variantType="outline" variant="info" />
        `,
    };
};

const generateSizeExample = () => {
    return {
        JS: `
<Checkbox label="Small" size="sm" />
<Checkbox label="Medium" size="md" />
<Checkbox label="Large" size="lg" />

<Checkbox label="Small Outline" size="sm" variantType="outline" />
<Checkbox label="Medium Outline" size="md" variantType="outline" />
<Checkbox label="Large Outline" size="lg" variantType="outline" />
        `,
    };
};

const generateCheckedExample = () => {
    return {
        JS: `
<Checkbox label="Checked" checked={true} />
<Checkbox label="Unchecked" checked={false} />

<Checkbox label="Checked Outline" checked={true} variantType="outline" />
<Checkbox label="Unchecked Outline" checked={false} variantType="outline" />
        `,
    };
};

const generateDisabledExample = () => {
    return {
        JS: `
<Checkbox label="Disabled Checked" checked={true} disabled />
<Checkbox label="Disabled Unchecked" checked={false} disabled />

<Checkbox label="Disabled Checked Outline" checked={true} disabled variantType="outline" />
<Checkbox label="Disabled Unchecked Outline" checked={false} disabled variantType="outline" />
        `,
    };
};

const SampleExample = () => {

    const [checkboxStates, setCheckboxStates] = useState({
        primary: false,
        secondary: false,
        info: false,
        success: false,
        danger: false,
        warning: false,
        black: false,
        white: false,
        circle: false,
        pill: false,
        rounded: false,
        sm: false,
        md: false,
        lg: false,
    });

    const handleCheckboxChange = (key, isChecked) => {
        setCheckboxStates((prev) => ({
            ...prev,
            [key]: isChecked,
        }));
    };

    return (
        <div>
            <Example>
                <Example.Title>Default Checkboxes</Example.Title>
                <Example.Description>
                    These are the default checkbox variants with solid background colors. Use them for primary selections or actions.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Primary" variant="primary" checked={checkboxStates.primary} onChange={(isChecked) => handleCheckboxChange("primary", isChecked)} />
                        <Checkbox label="Secondary" variant="secondary" checked={checkboxStates.secondary} onChange={(isChecked) => handleCheckboxChange("secondary", isChecked)} />
                        <Checkbox label="Info" variant="info" checked={checkboxStates.info} onChange={(isChecked) => handleCheckboxChange("info", isChecked)} />
                        <Checkbox label="Success" variant="success" checked={checkboxStates.success} onChange={(isChecked) => handleCheckboxChange("success", isChecked)} />
                        <Checkbox label="Danger" variant="danger" checked={checkboxStates.danger} onChange={(isChecked) => handleCheckboxChange("danger", isChecked)} />
                        <Checkbox label="Warning" variant="warning" checked={checkboxStates.warning} onChange={(isChecked) => handleCheckboxChange("warning", isChecked)} />
                        <Checkbox label="Black" variant="black" checked={checkboxStates.black} onChange={(isChecked) => handleCheckboxChange("black", isChecked)} />
                        <Checkbox label="White" variant="white" checked={checkboxStates.white} onChange={(isChecked) => handleCheckboxChange("white", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateDefaultExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Outline Checkboxes</Example.Title>
                <Example.Description>
                    Outline checkboxes have a transparent background with a border matching the variant color. Ideal for subtle selections.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Primary" variantType="outline" variant="primary" checked={checkboxStates.primary} onChange={(isChecked) => handleCheckboxChange("primary", isChecked)} />
                        <Checkbox label="Secondary" variantType="outline" variant="secondary" checked={checkboxStates.secondary} onChange={(isChecked) => handleCheckboxChange("secondary", isChecked)} />
                        <Checkbox label="Info" variantType="outline" variant="info" checked={checkboxStates.info} onChange={(isChecked) => handleCheckboxChange("info", isChecked)} />
                        <Checkbox label="Success" variantType="outline" variant="success" checked={checkboxStates.success} onChange={(isChecked) => handleCheckboxChange("success", isChecked)} />
                        <Checkbox label="Danger" variantType="outline" variant="danger" checked={checkboxStates.danger} onChange={(isChecked) => handleCheckboxChange("danger", isChecked)} />
                        <Checkbox label="Warning" variantType="outline" variant="warning" checked={checkboxStates.warning} onChange={(isChecked) => handleCheckboxChange("warning", isChecked)} />
                        <Checkbox label="Black" variantType="outline" variant="black" checked={checkboxStates.black} onChange={(isChecked) => handleCheckboxChange("black", isChecked)} />
                        <Checkbox label="White" variantType="outline" variant="white" checked={checkboxStates.white} onChange={(isChecked) => handleCheckboxChange("white", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateOutlineExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Shapes</Example.Title>
                <Example.Description>
                    Checkboxes come in different shapes: circle, pill, and rounded. Use them to match your design language.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Circle" shape="circle" variant="primary" checked={checkboxStates.circle} onChange={(isChecked) => handleCheckboxChange("circle", isChecked)} />
                        <Checkbox label="Pill" shape="pill" variant="primary" checked={checkboxStates.pill} onChange={(isChecked) => handleCheckboxChange("pill", isChecked)} />
                        <Checkbox label="Rounded" shape="rounded" variant="primary" checked={checkboxStates.rounded} onChange={(isChecked) => handleCheckboxChange("rounded", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Circle" shape="circle" variantType="outline" variant="primary" checked={checkboxStates.circle} onChange={(isChecked) => handleCheckboxChange("circle", isChecked)} />
                        <Checkbox label="Pill" shape="pill" variantType="outline" variant="primary" checked={checkboxStates.pill} onChange={(isChecked) => handleCheckboxChange("pill", isChecked)} />
                        <Checkbox label="Rounded" shape="rounded" variantType="outline" variant="primary" checked={checkboxStates.rounded} onChange={(isChecked) => handleCheckboxChange("rounded", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateShapeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Sizes</Example.Title>
                <Example.Description>
                    Checkboxes come in three sizes: small, medium, and large. Choose the appropriate size for your UI.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Small" size="sm" checked={checkboxStates.sm} onChange={(isChecked) => handleCheckboxChange("sm", isChecked)} />
                        <Checkbox label="Medium" size="md" checked={checkboxStates.md} onChange={(isChecked) => handleCheckboxChange("md", isChecked)} />
                        <Checkbox label="Large" size="lg" checked={checkboxStates.lg} onChange={(isChecked) => handleCheckboxChange("lg", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Small" size="sm" variantType="outline" checked={checkboxStates.sm} onChange={(isChecked) => handleCheckboxChange("sm", isChecked)} />
                        <Checkbox label="Medium" size="md" variantType="outline" checked={checkboxStates.md} onChange={(isChecked) => handleCheckboxChange("md", isChecked)} />
                        <Checkbox label="Large" size="lg" variantType="outline" checked={checkboxStates.lg} onChange={(isChecked) => handleCheckboxChange("lg", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Checked States</Example.Title>
                <Example.Description>
                    Examples of checkboxes in checked and unchecked states.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Checked" checked={true} onChange={handleCheckboxChange} />
                        <Checkbox label="Unchecked" checked={false} onChange={handleCheckboxChange} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Checked" checked={true} variantType="outline" onChange={handleCheckboxChange} />
                        <Checkbox label="Unchecked" checked={false} variantType="outline" onChange={handleCheckboxChange} />
                    </div>
                    <CodeCard codeSnippets={generateCheckedExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Disabled Checkboxes</Example.Title>
                <Example.Description>
                    Examples of disabled checkboxes in checked and unchecked states.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Disabled Checked" checked={true} disabled onChange={handleCheckboxChange} />
                        <Checkbox label="Disabled Unchecked" checked={false} disabled onChange={handleCheckboxChange} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Checkbox label="Disabled Checked" checked={true} disabled variantType="outline" onChange={handleCheckboxChange} />
                        <Checkbox label="Disabled Unchecked" checked={false} disabled variantType="outline" onChange={handleCheckboxChange} />
                    </div>
                    <CodeCard codeSnippets={generateDisabledExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
