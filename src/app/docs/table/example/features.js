'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Table</code> component, showcasing its supported features and usage examples.
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
                                    <code>Table</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The root container for the table. Wraps all other elements.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table>...</Table>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Table.Header</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the table header section (<code>&lt;thead&gt;</code>).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table.Header>...</Table.Header>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Table.Body</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the table body section (<code>&lt;tbody&gt;</code>).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table.Body>...</Table.Body>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Table.Footer</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the table footer section (<code>&lt;tfoot&gt;</code>).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table.Footer>...</Table.Footer>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Table.Row</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines a row within the table.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table.Row>...</Table.Row>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Table.Cell</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines a cell within a row. Automatically determines whether to render a <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> based on context.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Table.Cell>...</Table.Cell>`}</code>
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
