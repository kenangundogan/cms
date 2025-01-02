import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Box from '@/app/components/ui/box/Box';

const generateBasicExample = () => {
    return {
        JS: `
<Box>
    <Box.Head>Box Title</Box.Head>
    <Box.Body>
        <p>This is the body of the box. You can add any content here, such as text, images, or other components.</p>
    </Box.Body>
    <Box.Foot>
        <p>This is the footer of the box.</p>
    </Box.Foot>
</Box>
`,
    };
};

const SampleExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Sample Usage</Example.Title>
                <Example.Description>
                    This is a basic example of the Box component. The Box component is a flexible and reusable container for organizing UI content. It provides a structured layout with optional Header, Body, and Footer subcomponents, making it ideal for creating consistent and clean interfaces.
                </Example.Description>
                <Example.Body>
                    <Box>
                        <Box.Head>Box Title</Box.Head>
                        <Box.Body>
                            <p>This is the body of the box. You can add any content here, such as text, images, or other components.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </Box.Body>
                        <Box.Foot>
                            <p>This is the footer of the box.</p>
                        </Box.Foot>
                    </Box>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
