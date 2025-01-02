'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Modal</code> component, showcasing its supported features and usage examples.
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
                                    <code>isOpen</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Determines if the modal is visible.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`false`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Modal isOpen={true}>...</Modal>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>onClose</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback triggered when the modal is closed (e.g., Escape key or outside click).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>function</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`undefined`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Modal isOpen={true} onClose={() => setOpen(false)}>...</Modal>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Modal.Head</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the header section of the modal. Typically includes a title and close button.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>ReactNode</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`null`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Modal.Head>Title</Modal.Head>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Modal.Body</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the body section of the modal, where the main content is displayed.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>ReactNode</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`null`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Modal.Body>Content</Modal.Body>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Modal.Foot</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the footer section of the modal, typically for action buttons.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>ReactNode</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`null`}</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Modal.Foot>Actions</Modal.Foot>`}</code>
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
