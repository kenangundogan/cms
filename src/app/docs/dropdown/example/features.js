'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const DropdownFeatures = () => {
    return (
        <div>
            <Example>
                <Example.Title>Dropdown Features</Example.Title>
                <Example.Description>
                    The table below provides an overview of all the properties supported by the <code>Dropdown</code> component, along with a short description for each property. This allows you to quickly see what each property does and how to integrate it into your project using <code>Dropdown</code>
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
                            {/* buttonText */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>buttonText</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets the text displayed on the dropdown button.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<Dropdown buttonText='Options' />"}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* direction */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>direction</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the direction in which the dropdown opens. Possible values are <code>top</code>, <code>bottom</code>, <code>left</code>, and <code>right</code>. Default is <code>bottom</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<Dropdown direction='right' />"}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* disable */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>disable</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the dropdown, preventing user interaction. Accepts <code>true</code> or <code>false</code>. Default is <code>false</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<Dropdown disable={true} />"}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the size of the dropdown button. Possible values are <code>sm</code>, <code>md</code>, and <code>lg</code>. Default is <code>md</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<Dropdown size='lg' />"}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* children */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>children</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the content of the dropdown menu. It can include <code>Dropdown.Head</code>, <code>Dropdown.Body</code>, <code>Dropdown.Item</code>, and <code>Dropdown.Foot</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Dropdown><Dropdown.Body><Dropdown.Item /></Dropdown.Body></Dropdown>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* custom styling */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>style</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows custom inline styles to be passed to the dropdown menu.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<Dropdown style={{ backgroundColor: 'lightgray' }} />"}</code>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Example.Body>
            </Example>
        </div>
    );
};

export default DropdownFeatures;
