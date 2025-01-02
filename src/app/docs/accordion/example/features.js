'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Accordion</code> component, showcasing its supported features and usage examples.
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
                                    <code>isAllOpen</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets all items to open by default.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Accordion isAllOpen={true}>...</Accordion>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>closeOthers</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Closes other items when one is opened.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Accordion closeOthers={true}>...</Accordion>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultOpen</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets a specific item to open by default.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Accordion.Item defaultOpen={true}>...</Accordion.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>disable</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables interaction for a specific item.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Accordion.Item disable={true}>...</Accordion.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom class names to the root Accordion container.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`''`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Accordion className="custom-class">...</Accordion>`}</code>
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
