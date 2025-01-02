'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Breadcrumb</code> component, showcasing its supported features and usage examples.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">className</code></td>
                                    <td>Custom classes for the root <code>Breadcrumb</code> container.</td>
                                    <td><code>string</code></td>
                                    <td><code>{`''`}</code></td>
                                    <td>
                                        <code>{`<Breadcrumb className="custom-class">...</Breadcrumb>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">children</code></td>
                                    <td>The breadcrumb items.</td>
                                    <td><code>ReactNode</code></td>
                                    <td><code>{`null`}</code></td>
                                    <td>
                                        <code>{`<Breadcrumb><Breadcrumb.Item>Home</Breadcrumb.Item></Breadcrumb>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">href</code></td>
                                    <td>URL for the breadcrumb item. If set, the item becomes a link.</td>
                                    <td><code>string</code></td>
                                    <td><code>{`null`}</code></td>
                                    <td>
                                        <code>{`<Breadcrumb.Item href="/home">Home</Breadcrumb.Item>`}</code>
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
