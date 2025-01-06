'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>List</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Element</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Sample Use</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>List</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The root container for the list. Wraps all <code>List.Row</code> elements.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<List>...</List>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>List.Row</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Represents a single row inside the list. Can contain multiple <code>List.Row.Item</code> elements.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<List.Row>...</List.Row>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>List.Row.Item</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Represents an individual item within a row. Typically used for displaying data fields.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<List.Row.Item>...</List.Row.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>oddEven</code>
                                </Table.Cell>
                                <Table.Cell>
                                    A boolean prop for <code>List</code> to enable alternating row colors.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<List oddEven={true}>...</List>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>activeItems</code>
                                </Table.Cell>
                                <Table.Cell>
                                    An array prop for <code>List</code> to mark specific rows as active (highlighted).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<List activeItems={[0, 2]}>...</List>`}</code>
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
