'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Box</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Element</th>
                                    <th>Description</th>
                                    <th>Sample Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Box</code></td>
                                    <td>
                                        The main container for the Box component. It manages its child components and full-screen behavior.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Box>...</Box>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Box.Head</code></td>
                                    <td>
                                        The header section of the Box. It includes the title or other elements and can toggle full-screen mode.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Box.Head>Header Content</Box.Head>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Box.Body</code></td>
                                    <td>
                                        The body section of the Box. It holds the main content.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Box.Body>Body Content</Box.Body>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Box.Foot</code></td>
                                    <td>
                                        The footer section of the Box. It typically holds action buttons or secondary information.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Box.Foot>Footer Content</Box.Foot>`}
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Example.Body>
            </Example>
        </div>
    );
};

export default Features;
