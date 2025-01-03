'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Form from "@/app/components/ui/form/Form";

const generateBasicExample = () => {
    return {
        JS: `
<Form action="/api/submit" method="POST" onSubmit={handleSubmit} noValidate>
    <Form.Header>...</Form.Header>
    <Form.Body>...</Form.Body>
    <Form.Footer>...</Form.Footer>
</Form>
        `,
    };
};

const SampleExample = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };
    return (
        <Example>
            <Example.Title>Sample Usage</Example.Title>
            <Example.Description>
                Below is a simple example of how to use the <code>Form</code> component. This example includes
                basic fields like <code>Name</code> and <code>Email</code>, and demonstrates form submission handling.
            </Example.Description>
            <Example.Body>
                <Form action="/api/submit" method="POST" onSubmit={handleSubmit} noValidate>
                    <Form.Header>
                    </Form.Header>
                    <Form.Body>
                    </Form.Body>
                    <Form.Footer>
                    </Form.Footer>
                </Form>
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
