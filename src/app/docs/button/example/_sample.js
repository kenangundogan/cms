'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Button from "@/app/components/ui/button/Button";

const generateDefaultExample = () => {
    return {
        JS: `
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="black">Black</Button>
<Button variant="white">White</Button>
        `,
    };
};

const generateOutlineExample = () => {
    return {
        JS: `
<Button variantType="outline" variant="primary">Primary</Button>
<Button variantType="outline" variant="secondary">Secondary</Button>
<Button variantType="outline" variant="info">Info</Button>
<Button variantType="outline" variant="success">Success</Button>
<Button variantType="outline" variant="danger">Danger</Button>
<Button variantType="outline" variant="warning">Warning</Button>
<Button variantType="outline" variant="black">Black</Button>
<Button variantType="outline" variant="white">White</Button>
        `,
    };
};

const generateTextExample = () => {
    return {
        JS: `
<Button variantType="text" variant="primary">Primary</Button>
<Button variantType="text" variant="secondary">Secondary</Button>
<Button variantType="text" variant="info">Info</Button>
<Button variantType="text" variant="success">Success</Button>
<Button variantType="text" variant="danger">Danger</Button>
<Button variantType="text" variant="warning">Warning</Button>
<Button variantType="text" variant="black">Black</Button>
<Button variantType="text" variant="white">White</Button>
        `,
    };
};

const generateCircleExample = () => {
    return {
        JS: `
<Button shape="circle" variant="primary">P</Button>
<Button shape="circle" variant="secondary">S</Button>
<Button shape="circle" variant="info">I</Button>
<Button shape="circle" variant="success">S</Button>
<Button shape="circle" variant="danger">D</Button>
<Button shape="circle" variant="warning">W</Button>
<Button shape="circle" variant="black">B</Button>
<Button shape="circle" variant="white">W</Button>

<Button shape="circle" variantType="outline" variant="primary">P</Button>
<Button shape="circle" variantType="outline" variant="secondary">S</Button>
<Button shape="circle" variantType="outline" variant="info">I</Button>
<Button shape="circle" variantType="outline" variant="success">S</Button>
<Button shape="circle" variantType="outline" variant="danger">D</Button>
<Button shape="circle" variantType="outline" variant="warning">W</Button>
<Button shape="circle" variantType="outline" variant="black">B</Button>
<Button shape="circle" variantType="outline" variant="white">W</Button>
        `,
    };
};

const generatePillExample = () => {
    return {
        JS: `
<Button shape="pill" variant="primary">primary</Button>
<Button shape="pill" variant="secondary">secondary</Button>
<Button shape="pill" variant="info">info</Button>
<Button shape="pill" variant="success">success</Button>
<Button shape="pill" variant="danger">danger</Button>
<Button shape="pill" variant="warning">warning</Button>
<Button shape="pill" variant="black">black</Button>
<Button shape="pill" variant="white">white</Button>

<Button shape="pill" variantType="outline" variant="primary">primary</Button>
<Button shape="pill" variantType="outline" variant="secondary">secondary</Button>
<Button shape="pill" variantType="outline" variant="info">info</Button>
<Button shape="pill" variantType="outline" variant="success">success</Button>
<Button shape="pill" variantType="outline" variant="danger">danger</Button>
<Button shape="pill" variantType="outline" variant="warning">warning</Button>
<Button shape="pill" variantType="outline" variant="black">black</Button>
<Button shape="pill" variantType="outline" variant="white">white</Button>
        `,
    };
};

const generateRoundedExample = () => {
    return {
        JS: `
<Button shape="rounded" variant="primary">primary</Button>
<Button shape="rounded" variant="secondary">secondary</Button>
<Button shape="rounded" variant="info">info</Button>
<Button shape="rounded" variant="success">success</Button>
<Button shape="rounded" variant="danger">danger</Button>
<Button shape="rounded" variant="warning">warning</Button>
<Button shape="rounded" variant="black">black</Button>
<Button shape="rounded" variant="white">white</Button>

<Button shape="rounded" variantType="outline" variant="primary">primary</Button>
<Button shape="rounded" variantType="outline" variant="secondary">secondary</Button>
<Button shape="rounded" variantType="outline" variant="info">info</Button>
<Button shape="rounded" variantType="outline" variant="success">success</Button>
<Button shape="rounded" variantType="outline" variant="danger">danger</Button>
<Button shape="rounded" variantType="outline" variant="warning">warning</Button>
<Button shape="rounded" variantType="outline" variant="black">black</Button>
<Button shape="rounded" variantType="outline" variant="white">white</Button>
        `,
    };
};

const generateSizeExample = () => {
    return {
        JS: `
<Button size="lg">Large</Button>
<Button size="md">Medium</Button>
<Button size="sm">Small</Button>
        `,
    };
};

const generateClickExample = () => {
    return {
        JS: `
<Button onClick={() => alert("Clicked!")}>Click Me</Button>
        `,
    };
};

const SampleExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Default Buttons</Example.Title>
                <Example.Description>
                    These are the default button variants with solid background colors. Use them for primary actions,
                    such as submitting a form or performing a main task.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="info">Info</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="black">Black</Button>
                        <Button variant="white">White</Button>
                    </div>
                    <CodeCard codeSnippets={generateDefaultExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Outline Buttons</Example.Title>
                <Example.Description>
                    Outline buttons have a transparent background with a border matching the variant color.
                    They are ideal for secondary actions or less prominent tasks.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button variantType="outline" variant="primary">Primary</Button>
                        <Button variantType="outline" variant="secondary">Secondary</Button>
                        <Button variantType="outline" variant="info">Info</Button>
                        <Button variantType="outline" variant="success">Success</Button>
                        <Button variantType="outline" variant="danger">Danger</Button>
                        <Button variantType="outline" variant="warning">Warning</Button>
                        <Button variantType="outline" variant="black">Black</Button>
                        <Button variantType="outline" variant="white">White</Button>
                    </div>
                    <CodeCard codeSnippets={generateOutlineExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Text Buttons</Example.Title>
                <Example.Description>
                    Text buttons have no background or border and display only the variant text color.
                    They are suitable for minimalist designs or inline actions like links.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button variantType="text" variant="primary">Primary</Button>
                        <Button variantType="text" variant="secondary">Secondary</Button>
                        <Button variantType="text" variant="info">Info</Button>
                        <Button variantType="text" variant="success">Success</Button>
                        <Button variantType="text" variant="danger">Danger</Button>
                        <Button variantType="text" variant="warning">Warning</Button>
                        <Button variantType="text" variant="black">Black</Button>
                        <Button variantType="text" variant="white">White</Button>
                    </div>
                    <CodeCard codeSnippets={generateTextExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Circle Buttons</Example.Title>
                <Example.Description>
                    Circle buttons are fully rounded and perfect for icons or short text.
                    Use them for compact or floating actions.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="circle" variant="primary">P</Button>
                        <Button shape="circle" variant="secondary">S</Button>
                        <Button shape="circle" variant="info">I</Button>
                        <Button shape="circle" variant="success">S</Button>
                        <Button shape="circle" variant="danger">D</Button>
                        <Button shape="circle" variant="warning">W</Button>
                        <Button shape="circle" variant="black">B</Button>
                        <Button shape="circle" variant="white">W</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="circle" variantType="outline" variant="primary">P</Button>
                        <Button shape="circle" variantType="outline" variant="secondary">S</Button>
                        <Button shape="circle" variantType="outline" variant="info">I</Button>
                        <Button shape="circle" variantType="outline" variant="success">S</Button>
                        <Button shape="circle" variantType="outline" variant="danger">D</Button>
                        <Button shape="circle" variantType="outline" variant="warning">W</Button>
                        <Button shape="circle" variantType="outline" variant="black">B</Button>
                        <Button shape="circle" variantType="outline" variant="white">W</Button>
                    </div>
                    <CodeCard codeSnippets={generateCircleExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Pill Buttons</Example.Title>
                <Example.Description>
                    Pill buttons have fully rounded edges, making them visually distinct and ideal for labels or decorative actions.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="pill" variant="primary">primary</Button>
                        <Button shape="pill" variant="secondary">secondary</Button>
                        <Button shape="pill" variant="info">info</Button>
                        <Button shape="pill" variant="success">success</Button>
                        <Button shape="pill" variant="danger">danger</Button>
                        <Button shape="pill" variant="warning">warning</Button>
                        <Button shape="pill" variant="black">black</Button>
                        <Button shape="pill" variant="white">white</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="pill" variantType="outline" variant="primary">primary</Button>
                        <Button shape="pill" variantType="outline" variant="secondary">secondary</Button>
                        <Button shape="pill" variantType="outline" variant="info">info</Button>
                        <Button shape="pill" variantType="outline" variant="success">success</Button>
                        <Button shape="pill" variantType="outline" variant="danger">danger</Button>
                        <Button shape="pill" variantType="outline" variant="warning">warning</Button>
                        <Button shape="pill" variantType="outline" variant="black">black</Button>
                        <Button shape="pill" variantType="outline" variant="white">white</Button>
                    </div>
                    <CodeCard codeSnippets={generatePillExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Rounded Buttons</Example.Title>
                <Example.Description>
                    Rounded buttons have slightly curved edges, combining modern aesthetics with usability.
                    They are a great choice for a soft design language.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="rounded" variant="primary">primary</Button>
                        <Button shape="rounded" variant="secondary">secondary</Button>
                        <Button shape="rounded" variant="info">info</Button>
                        <Button shape="rounded" variant="success">success</Button>
                        <Button shape="rounded" variant="danger">danger</Button>
                        <Button shape="rounded" variant="warning">warning</Button>
                        <Button shape="rounded" variant="black">black</Button>
                        <Button shape="rounded" variant="white">white</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Button shape="rounded" variantType="outline" variant="primary">primary</Button>
                        <Button shape="rounded" variantType="outline" variant="secondary">secondary</Button>
                        <Button shape="rounded" variantType="outline" variant="info">info</Button>
                        <Button shape="rounded" variantType="outline" variant="success">success</Button>
                        <Button shape="rounded" variantType="outline" variant="danger">danger</Button>
                        <Button shape="rounded" variantType="outline" variant="warning">warning</Button>
                        <Button shape="rounded" variantType="outline" variant="black">black</Button>
                        <Button shape="rounded" variantType="outline" variant="white">white</Button>
                    </div>
                    <CodeCard codeSnippets={generateRoundedExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Button Sizes</Example.Title>
                <Example.Description>
                    Buttons come in three standard sizes: small, medium, and large.
                    Use these sizes to match your layout's requirements.
                </Example.Description>
                <Example.Body>
                    <div className="space-x-4 mb-4">
                        <Button size="lg">Large</Button>
                        <Button size="md">Medium</Button>
                        <Button size="sm">Small</Button>
                    </div>

                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Click Event</Example.Title>
                <Example.Description>
                    Buttons can trigger click events to perform actions. Below is a simple example that shows an alert on click.
                </Example.Description>
                <Example.Body>
                    <Button onClick={() => alert("Clicked!")}>Click Me</Button>
                    <CodeCard codeSnippets={generateClickExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
