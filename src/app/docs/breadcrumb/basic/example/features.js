'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Breadcrumb</code> component, showcasing its supported features and usage examples.
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
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Custom classes for the root <code>Breadcrumb</code> container.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`''`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Breadcrumb className="custom-class">...</Breadcrumb>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>children</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The breadcrumb items.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>ReactNode</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`null`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Breadcrumb><Breadcrumb.Item>Home</Breadcrumb.Item></Breadcrumb>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>href</code>
                                </Table.Cell>
                                <Table.Cell>
                                    URL for the breadcrumb item. If set, the item becomes a link.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`null`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Breadcrumb.Item href="/home">Home</Breadcrumb.Item>`}</code>
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
