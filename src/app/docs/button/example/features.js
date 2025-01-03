'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Button</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Property</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Example</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>type</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the button type. Can be <code>button</code>, <code>submit</code>, or <code>reset</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`type="submit"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>variant</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the color theme of the button. Options include <code>primary</code>, <code>secondary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>black</code>, and <code>white</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`variant="primary"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>variantType</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Determines the button's style type. Can be <code>default</code>, <code>outline</code>, or <code>text</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`variantType="outline"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the size of the button. Options are <code>sm</code>, <code>md</code>, and <code>lg</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`size="lg"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>shape</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the button shape. Options are <code>default</code>, <code>rounded</code>, <code>pill</code>, and <code>circle</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`shape="circle"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the button, making it unclickable.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`disabled={true}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>onClick</code>
                                </Table.Cell>
                                <Table.Cell>
                                    A function that gets called when the button is clicked.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`onClick={() => alert("Button clicked!")}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom CSS classes to the button.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`className="my-custom-class"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>icon</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds an icon element to the button, usually placed before the text.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`icon={<FaCheck />}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>children</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the content inside the button, usually text or other elements.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Button>Click Me</Button>`}</code>
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
