'use client';
import React, { useState } from "react";
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Radio from "@/app/components/ui/radio/Radio";

const generateDefaultExample = () => {
    return {
        JS: `
<Radio label="Primary" variant="primary" />
<Radio label="Secondary" variant="secondary" />
<Radio label="Info" variant="info" />
<Radio label="Success" variant="success" />
<Radio label="Danger" variant="danger" />
<Radio label="Warning" variant="warning" />
<Radio label="Black" variant="black" />
<Radio label="White" variant="white" />
        `,
    };
};

const generateOutlineExample = () => {
    return {
        JS: `
<Radio label="Primary" variantType="outline" variant="primary" />
<Radio label="Secondary" variantType="outline" variant="secondary" />
<Radio label="Info" variantType="outline" variant="info" />
<Radio label="Success" variantType="outline" variant="success" />
<Radio label="Danger" variantType="outline" variant="danger" />
<Radio label="Warning" variantType="outline" variant="warning" />
<Radio label="Black" variantType="outline" variant="black" />
<Radio label="White" variantType="outline" variant="white" />
        `,
    };
};

const generateSizeExample = () => {
    return {
        JS: `
<Radio label="Small" size="sm" />
<Radio label="Medium" size="md" />
<Radio label="Large" size="lg" />

<Radio label="Small Outline" size="sm" variantType="outline" />
<Radio label="Medium Outline" size="md" variantType="outline" />
<Radio label="Large Outline" size="lg" variantType="outline" />
        `,
    };
};

const generateCheckedExample = () => {
    return {
        JS: `
<Radio label="Checked" checked={true} />
<Radio label="Unchecked" checked={false} />

<Radio label="Checked" checked={true} variantType="outline" />
<Radio label="UnChecked" checked={false} variantType="outline" />
        `,
    };
};

const generateDisabledExample = () => {
    return {
        JS: `
<Radio label="Disabled Checked" checked={true} disabled />
<Radio label="Disabled Unchecked" checked={false} disabled />

<Radio label="Disabled Checked" checked={true} disabled variantType="outline" />
<Radio label="Disabled UnChecked" checked={false} disabled variantType="outline" />
        `,
    };
};

const SampleExample = () => {
    const [radioState, setRadioState] = useState("");

    const handleRadioChange = (key) => {
        setRadioState(key);
    };

    return (
        <div>
            <Example>
                <Example.Title>Default Radios</Example.Title>
                <Example.Description>
                    These are the default radio variants with solid background colors. Use them for primary selections or actions.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Primary" variant="primary" checked={radioState === "primary"} onChange={() => handleRadioChange("primary")} />
                        <Radio label="Secondary" variant="secondary" checked={radioState === "secondary"} onChange={() => handleRadioChange("secondary")} />
                        <Radio label="Info" variant="info" checked={radioState === "info"} onChange={() => handleRadioChange("info")} />
                        <Radio label="Success" variant="success" checked={radioState === "success"} onChange={() => handleRadioChange("success")} />
                        <Radio label="Danger" variant="danger" checked={radioState === "danger"} onChange={() => handleRadioChange("danger")} />
                        <Radio label="Warning" variant="warning" checked={radioState === "warning"} onChange={() => handleRadioChange("warning")} />
                        <Radio label="Black" variant="black" checked={radioState === "black"} onChange={() => handleRadioChange("black")} />
                        <Radio label="White" variant="white" checked={radioState === "white"} onChange={() => handleRadioChange("white")} />
                    </div>
                    <CodeCard codeSnippets={generateDefaultExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Outline Radios</Example.Title>
                <Example.Description>
                    Outline radios have a transparent background with a border matching the variant color. Ideal for subtle selections.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Primary" variantType="outline" variant="primary" checked={radioState === "primary"} onChange={() => handleRadioChange("primary")} />
                        <Radio label="Secondary" variantType="outline" variant="secondary" checked={radioState === "secondary"} onChange={() => handleRadioChange("secondary")} />
                        <Radio label="Info" variantType="outline" variant="info" checked={radioState === "info"} onChange={() => handleRadioChange("info")} />
                        <Radio label="Success" variantType="outline" variant="success" checked={radioState === "success"} onChange={() => handleRadioChange("success")} />
                        <Radio label="Danger" variantType="outline" variant="danger" checked={radioState === "danger"} onChange={() => handleRadioChange("danger")} />
                        <Radio label="Warning" variantType="outline" variant="warning" checked={radioState === "warning"} onChange={() => handleRadioChange("warning")} />
                        <Radio label="Black" variantType="outline" variant="black" checked={radioState === "black"} onChange={() => handleRadioChange("black")} />
                        <Radio label="White" variantType="outline" variant="white" checked={radioState === "white"} onChange={() => handleRadioChange("white")} />
                    </div>
                    <CodeCard codeSnippets={generateOutlineExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Sizes</Example.Title>
                <Example.Description>
                    Radios come in three sizes: small, medium, and large. Choose the appropriate size for your UI.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Small" size="sm" checked={radioState === "sm"} onChange={() => handleRadioChange("sm")} />
                        <Radio label="Medium" size="md" checked={radioState === "md"} onChange={() => handleRadioChange("md")} />
                        <Radio label="Large" size="lg" checked={radioState === "lg"} onChange={() => handleRadioChange("lg")} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Small" size="sm" variantType="outline" checked={radioState === "sm"} onChange={() => handleRadioChange("sm")} />
                        <Radio label="Medium" size="md" variantType="outline" checked={radioState === "md"} onChange={() => handleRadioChange("md")} />
                        <Radio label="Large" size="lg" variantType="outline" checked={radioState === "lg"} onChange={() => handleRadioChange("lg")} />
                    </div>
                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Checked States</Example.Title>
                <Example.Description>
                    Examples of radios in checked and unchecked states.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Checked" checked={true} onChange={() => handleRadioChange("checked")} />
                        <Radio label="Unchecked" checked={false} onChange={() => handleRadioChange("unchecked")} />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Checked" variantType="outline" checked={true} onChange={() => handleRadioChange("checked")} />
                        <Radio label="Unchecked" variantType="outline" checked={false} onChange={() => handleRadioChange("unchecked")} />
                    </div>
                    <CodeCard codeSnippets={generateCheckedExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Disabled Radios</Example.Title>
                <Example.Description>
                    Examples of disabled radios in checked and unchecked states.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Disabled Checked" checked={true} disabled />
                        <Radio label="Disabled Unchecked" checked={false} disabled />
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Radio label="Disabled Checked" variantType="outline" checked={true} disabled />
                        <Radio label="Disabled Unchecked" variantType="outline" checked={false} disabled />
                    </div>
                    <CodeCard codeSnippets={generateDisabledExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
