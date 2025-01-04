'use client';
import React, { useState } from "react";
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Switch from "@/app/components/ui/switch/Switch";

const generateDefaultExample = () => {
    return {
        JS: `
<Switch label="Primary" variant="primary" />
<Switch label="Secondary" variant="secondary" />
<Switch label="Info" variant="info" />
<Switch label="Success" variant="success" />
<Switch label="Danger" variant="danger" />
<Switch label="Warning" variant="warning" />
<Switch label="Black" variant="black" />
<Switch label="White" variant="white" />
        `,
    };
};

const generateOutlineExample = () => {
    return {
        JS: `
<Switch label="Primary" variantType="outline" variant="primary" />
<Switch label="Secondary" variantType="outline" variant="secondary" />
<Switch label="Info" variantType="outline" variant="info" />
<Switch label="Success" variantType="outline" variant="success" />
<Switch label="Danger" variantType="outline" variant="danger" />
<Switch label="Warning" variantType="outline" variant="warning" />
<Switch label="Black" variantType="outline" variant="black" />
<Switch label="White" variantType="outline" variant="white" />
        `,
    };
};

const generateShapeExample = () => {
    return {
        JS: `
<Switch label="Pill" shape="pill" variant="secondary" />
<Switch label="Rounded" shape="rounded" variant="info" />

<Switch label="Pill" shape="pill" variantType="outline" variant="secondary" />
<Switch label="Rounded" shape="rounded" variantType="outline" variant="info" />
        `,
    };
};

const generateSizeExample = () => {
    return {
        JS: `
<Switch label="Small" size="sm" />
<Switch label="Medium" size="md" />
<Switch label="Large" size="lg" />

<Switch label="Small" size="sm" variantType="outline" />
<Switch label="Medium" size="md" variantType="outline" />
<Switch label="Large" size="lg" variantType="outline" />
        `,
    };
};

const generateCheckedExample = () => {
    return {
        JS: `
<Switch label="Checked" checked={true} />
<Switch label="Unchecked" checked={false} />

<Switch label="Checked" checked={true} variantType="outline" />
<Switch label="Unchecked" checked={false} variantType="outline" />
        `,
    };
};

const generateDisabledExample = () => {
    return {
        JS: `
<Switch label="Disabled Checked" checked={true} disabled />
<Switch label="Disabled Unchecked" checked={false} disabled />

<Switch label="Disabled Checked" checked={true} disabled variantType="outline" />
<Switch label="Disabled Unchecked" checked={false} disabled variantType="outline" />
        `,
    };
};

const SampleExample = () => {
    const [switchStates, setSwitchStates] = useState({
        primary: false,
        secondary: false,
        info: false,
        success: false,
        danger: false,
        warning: false,
        black: false,
        white: false,
        pill: false,
        rounded: false,
        sm: false,
        md: false,
        lg: false,
    });

    const handleSwitchChange = (key, isChecked) => {
        setSwitchStates((prev) => ({
            ...prev,
            [key]: isChecked,
        }));
    };

    return (
        <div>
            <Example>
                <Example.Title>Default Switches</Example.Title>
                <Example.Description>
                    These are the default switch variants with solid background colors.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Primary" variant="primary" checked={switchStates.primary} onChange={(isChecked) => handleSwitchChange("primary", isChecked)} />
                        <Switch label="Secondary" variant="secondary" checked={switchStates.secondary} onChange={(isChecked) => handleSwitchChange("secondary", isChecked)} />
                        <Switch label="Info" variant="info" checked={switchStates.info} onChange={(isChecked) => handleSwitchChange("info", isChecked)} />
                        <Switch label="Success" variant="success" checked={switchStates.success} onChange={(isChecked) => handleSwitchChange("success", isChecked)} />
                        <Switch label="Danger" variant="danger" checked={switchStates.danger} onChange={(isChecked) => handleSwitchChange("danger", isChecked)} />
                        <Switch label="Warning" variant="warning" checked={switchStates.warning} onChange={(isChecked) => handleSwitchChange("warning", isChecked)} />
                        <Switch label="Black" variant="black" checked={switchStates.black} onChange={(isChecked) => handleSwitchChange("black", isChecked)} />
                        <Switch label="White" variant="white" checked={switchStates.white} onChange={(isChecked) => handleSwitchChange("white", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateDefaultExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Outline Switches</Example.Title>
                <Example.Description>
                    Outline switches with transparent background and borders.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Primary" variantType="outline" variant="primary" checked={switchStates.primary} onChange={(isChecked) => handleSwitchChange("primary", isChecked)} />
                        <Switch label="Secondary" variantType="outline" variant="secondary" checked={switchStates.secondary} onChange={(isChecked) => handleSwitchChange("secondary", isChecked)} />
                        <Switch label="Info" variantType="outline" variant="info" checked={switchStates.info} onChange={(isChecked) => handleSwitchChange("info", isChecked)} />
                        <Switch label="Success" variantType="outline" variant="success" checked={switchStates.success} onChange={(isChecked) => handleSwitchChange("success", isChecked)} />
                        <Switch label="Danger" variantType="outline" variant="danger" checked={switchStates.danger} onChange={(isChecked) => handleSwitchChange("danger", isChecked)} />
                        <Switch label="Warning" variantType="outline" variant="warning" checked={switchStates.warning} onChange={(isChecked) => handleSwitchChange("warning", isChecked)} />
                        <Switch label="Black" variantType="outline" variant="black" checked={switchStates.black} onChange={(isChecked) => handleSwitchChange("black", isChecked)} />
                        <Switch label="White" variantType="outline" variant="white" checked={switchStates.white} onChange={(isChecked) => handleSwitchChange("white", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateOutlineExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Shapes</Example.Title>
                <Example.Description>
                    Switches with different shapes: pill, and rounded.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Default" shape="default" variant="primary" checked={switchStates.default} onChange={(isChecked) => handleSwitchChange("default", isChecked)} />
                        <Switch label="Pill" shape="pill" variant="primary" checked={switchStates.pill} onChange={(isChecked) => handleSwitchChange("pill", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Default" shape="default" variantType="outline" variant="primary" checked={switchStates.default} onChange={(isChecked) => handleSwitchChange("default", isChecked)} />
                        <Switch label="Pill" shape="pill" variantType="outline" variant="primary" checked={switchStates.pill} onChange={(isChecked) => handleSwitchChange("pill", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateShapeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Sizes</Example.Title>
                <Example.Description>
                    Switches available in three sizes: small, medium, and large.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Small" size="sm" checked={switchStates.sm} onChange={(isChecked) => handleSwitchChange("sm", isChecked)} />
                        <Switch label="Medium" size="md" checked={switchStates.md} onChange={(isChecked) => handleSwitchChange("md", isChecked)} />
                        <Switch label="Large" size="lg" checked={switchStates.lg} onChange={(isChecked) => handleSwitchChange("lg", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Small" size="sm" variantType="outline" checked={switchStates.sm} onChange={(isChecked) => handleSwitchChange("sm", isChecked)} />
                        <Switch label="Medium" size="md" variantType="outline" checked={switchStates.md} onChange={(isChecked) => handleSwitchChange("md", isChecked)} />
                        <Switch label="Large" size="lg" variantType="outline" checked={switchStates.lg} onChange={(isChecked) => handleSwitchChange("lg", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Checked States</Example.Title>
                <Example.Description>
                    Examples of switches in checked and unchecked states.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Checked" checked={true} onChange={(isChecked) => handleSwitchChange("checked", isChecked)} />
                        <Switch label="Unchecked" checked={false} onChange={(isChecked) => handleSwitchChange("unchecked", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Checked" checked={true} variantType="outline" onChange={(isChecked) => handleSwitchChange("checked", isChecked)} />
                        <Switch label="Unchecked" checked={false} variantType="outline" onChange={(isChecked) => handleSwitchChange("unchecked", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateCheckedExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Disabled Switches</Example.Title>
                <Example.Description>
                    Disabled switches examples.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Disabled Checked" checked={true} disabled onChange={(isChecked) => handleSwitchChange("disabledChecked", isChecked)} />
                        <Switch label="Disabled Unchecked" checked={false} disabled onChange={(isChecked) => handleSwitchChange("disabledUnchecked", isChecked)} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Switch label="Disabled Checked" checked={true} disabled variantType="outline" onChange={(isChecked) => handleSwitchChange("disabledChecked", isChecked)} />
                        <Switch label="Disabled Unchecked" checked={false} disabled variantType="outline" onChange={(isChecked) => handleSwitchChange("disabledUnchecked", isChecked)} />
                    </div>
                    <CodeCard codeSnippets={generateDisabledExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
