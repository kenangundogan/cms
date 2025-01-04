'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Switch</code> component, showcasing its supported features and usage examples.
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
                                    <code>label</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the text label displayed next to the switch.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`label="Enable Notifications"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>labelPosition</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Determines the position of the label relative to the switch. Options include <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`labelPosition="top"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>variant</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the color theme of the switch. Options include <code>primary</code>, <code>secondary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>black</code>, and <code>white</code>.
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
                                    Determines the switch's style type. Can be <code>default</code> or <code>outline</code>.
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
                                    Specifies the size of the switch. Options are <code>sm</code>, <code>md</code>, and <code>lg</code>.
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
                                    Defines the shape of the switch. Options include <code>default</code>, <code>rounded</code>, and <code>pill</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`shape="pill"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>checked</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls the checked state of the switch. Use with <code>onChange</code> for controlled components.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`checked={true}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultChecked</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets the initial checked state of the switch for uncontrolled components.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`defaultChecked={true}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the switch, making it unclickable and reducing opacity.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`disabled={true}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>onChange</code>
                                </Table.Cell>
                                <Table.Cell>
                                    A function that gets called whenever the switch state changes.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`onChange={(isChecked) => console.log(isChecked)}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom CSS classes to the switch.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`className="my-custom-class"`}</code>
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
