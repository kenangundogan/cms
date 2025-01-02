'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Drawer</code> component, showcasing its supported features and usage examples.
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
                                    <code>Drawer</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The main container for the Drawer component. It manages its open/close state and position.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Drawer open={true} position="left">...</Drawer>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>position</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies where the Drawer slides in from. Options include <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Drawer position="right">...</Drawer>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>onClose</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback triggered when the Drawer is closed (e.g., clicking outside or pressing "Escape").
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Drawer onClose={() => setOpen(false)}>...</Drawer>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>children</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The content displayed inside the Drawer.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Drawer><p>Content here</p></Drawer>`}</code>
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

