'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Accordion</code> component, showcasing its supported features and usage examples.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">isAllOpen</code></td>
                                    <td>Sets all items to open by default.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<Accordion isAllOpen={true}>...</Accordion>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">closeOthers</code></td>
                                    <td>Closes other items when one is opened.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<Accordion closeOthers={true}>...</Accordion>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">defaultOpen</code></td>
                                    <td>Sets a specific item to open by default.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<Accordion.Item defaultOpen={true}>...</Accordion.Item>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">disable</code></td>
                                    <td>Disables interaction for a specific item.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<Accordion.Item disable={true}>...</Accordion.Item>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">className</code></td>
                                    <td>Adds custom class names to the root Accordion container.</td>
                                    <td><code>string</code></td>
                                    <td><code>{`''`}</code></td>
                                    <td>
                                        <code>{`<Accordion className="custom-class">...</Accordion>`}</code>
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
