'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Checkbox</code> component, showcasing its supported features and usage examples.
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
                                    Defines the text label displayed next to the checkbox.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`label="Accept Terms"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>variant</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the color theme of the checkbox. Options include <code>primary</code>, <code>secondary</code>, <code>info</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>black</code>, and <code>white</code>.
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
                                    Determines the checkbox's style type. Can be <code>default</code> or <code>outline</code>.
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
                                    Specifies the size of the checkbox. Options are <code>sm</code>, <code>md</code>, and <code>lg</code>.
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
                                    Defines the shape of the checkbox. Options include <code>default</code>, <code>rounded</code>, <code>pill</code>, and <code>circle</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`shape="circle"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>checked</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls the checked state of the checkbox. Use with <code>onChange</code> for controlled components.
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
                                    Sets the initial checked state of the checkbox for uncontrolled components.
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
                                    Disables the checkbox, making it unclickable.
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
                                    A function that gets called whenever the checkbox state changes.
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
                                    Adds custom CSS classes to the checkbox.
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
