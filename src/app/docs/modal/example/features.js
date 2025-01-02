'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Modal</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Property</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Sample Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">isOpen</code></td>
                                    <td>Determines if the modal is visible.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<Modal isOpen={true}>...</Modal>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">onClose</code></td>
                                    <td>Callback triggered when the modal is closed (e.g., Escape key or outside click).</td>
                                    <td><code>function</code></td>
                                    <td><code>{`undefined`}</code></td>
                                    <td>
                                        <code>{`<Modal isOpen={true} onClose={() => setOpen(false)}>...</Modal>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Modal.Head</code></td>
                                    <td>
                                        Defines the header section of the modal. Typically includes a title and close button.
                                    </td>
                                    <td><code>ReactNode</code></td>
                                    <td><code>{`null`}</code></td>
                                    <td>
                                        <code>{`<Modal.Head>Title</Modal.Head>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Modal.Body</code></td>
                                    <td>
                                        Defines the body section of the modal, where the main content is displayed.
                                    </td>
                                    <td><code>ReactNode</code></td>
                                    <td><code>{`null`}</code></td>
                                    <td>
                                        <code>{`<Modal.Body>Content</Modal.Body>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Modal.Foot</code></td>
                                    <td>
                                        Defines the footer section of the modal, typically for action buttons.
                                    </td>
                                    <td><code>ReactNode</code></td>
                                    <td><code>{`null`}</code></td>
                                    <td>
                                        <code>{`<Modal.Foot>Actions</Modal.Foot>`}</code>
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
