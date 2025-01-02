'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>TreeView</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Property</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Type</Table.Cell>
                                <Table.Cell as="th">Default</Table.Cell>
                                <Table.Cell as="th">Sample Use</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>icons</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Custom icons for expanded, collapsed, and leaf nodes.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>object</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`{ expanded: '↓', collapsed: '→', leaf: '•' }`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TreeView icons={{ expanded: '-', collapsed: '+', leaf: '*' }}>...</TreeView>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultExpanded</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Determines if all items are expanded by default.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TreeView defaultExpanded={true}>...</TreeView>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>label</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The text displayed for a tree node.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`''`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TreeView.Item label="Node Label">...</TreeView.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables interaction for a specific tree node.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TreeView.Item disabled={true}>...</TreeView.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>type</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the node type (e.g., folder or file).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string ('folder' | 'file')</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`'folder'`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TreeView.Item type="folder">...</TreeView.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>

                </Example.Body>
            </Example>
        </div>
    );
};

export default Features;
