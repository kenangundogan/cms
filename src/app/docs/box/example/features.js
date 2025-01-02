'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Box</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Component</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Sample Use</Table.Cell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Box</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The main container for the Box component. It manages its child components and full-screen behavior.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Box>...</Box>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Box.Head</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The header section of the Box. It includes the title or other elements and can toggle full-screen mode.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Box.Head>Header Content</Box.Head>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Box.Body</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The body section of the Box. It holds the main content.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Box.Body>Body Content</Box.Body>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Box.Foot</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The footer section of the Box. It typically holds action buttons or secondary information.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Box.Foot>Footer Content</Box.Foot>`}</code>
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
