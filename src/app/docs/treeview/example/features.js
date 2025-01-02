'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>TreeView</code> component, showcasing its supported features and usage examples.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">icons</code></td>
                                    <td>Custom icons for expanded, collapsed, and leaf nodes.</td>
                                    <td><code>object</code></td>
                                    <td>
                                        <code>{`{ expanded: '↓', collapsed: '→', leaf: '•' }`}</code>
                                    </td>
                                    <td>
                                        <code>{`<TreeView icons={{ expanded: '-', collapsed: '+', leaf: '*' }}>...</TreeView>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">defaultExpanded</code></td>
                                    <td>Determines if all items are expanded by default.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<TreeView defaultExpanded={true}>...</TreeView>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">label</code></td>
                                    <td>The text displayed for a tree node.</td>
                                    <td><code>string</code></td>
                                    <td><code>{`''`}</code></td>
                                    <td>
                                        <code>{`<TreeView.Item label="Node Label">...</TreeView.Item>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">disabled</code></td>
                                    <td>Disables interaction for a specific tree node.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                    <td>
                                        <code>{`<TreeView.Item disabled={true}>...</TreeView.Item>`}</code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">type</code></td>
                                    <td>Specifies the node type (e.g., folder or file).</td>
                                    <td><code>string ('folder' | 'file')</code></td>
                                    <td><code>{`'folder'`}</code></td>
                                    <td>
                                        <code>{`<TreeView.Item type="folder">...</TreeView.Item>`}</code>
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
