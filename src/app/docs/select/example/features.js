'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Select</code> component, showcasing its supported features and usage examples.
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
                            {/* value */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>value</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The currently selected value. When <code>multiple</code> is <code>true</code>, it must be an array. Otherwise, it must be a string or number.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`value="1"`}</code> or <code>{`value={["1", "2"]}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onChange */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onChange</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function called when the selected value changes. Returns the selected value(s).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`onChange={(value) => console.log(value)}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls the size of the dropdown. Options are <code>sm</code>, <code>md</code>, and <code>lg</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`size="lg"`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* disabled */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the select dropdown, making it non-interactive.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`disabled={true}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* multiple */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>multiple</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Enables multiple selection. When <code>multiple</code> is true, the <code>value</code> prop must be an array.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`multiple={true}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* children */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>children</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Contains the <code>Option</code> and <code>Optgroup</code> components, which define the options and groups for the dropdown.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Select.Option value="1">Option 1</Select.Option>`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* Option.disabled */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>Option.disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables a specific option in the dropdown.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Select.Option value="2" disabled>Disabled Option</Select.Option>`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* Optgroup */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>Optgroup</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Groups related options under a label for better categorization.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Select.Optgroup label="Group 1">...</Select.Optgroup>`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* defaultValue */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultValue</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets the initial selected value(s) for uncontrolled components.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`defaultValue="1"`}</code> or <code>{`defaultValue={["1", "2"]}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* className */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom CSS classes to the select dropdown for additional styling.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`className="custom-class"`}</code>
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
