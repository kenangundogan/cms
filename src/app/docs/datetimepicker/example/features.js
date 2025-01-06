'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    The table below provides an overview of all the properties supported by the <code>DatePicker</code> component, along with a short description for each property. This allows you to quickly see what each property does and how to integrate it into your project using <code>DatePicker</code>.
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
                            {/* id */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>id</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    A unique DOM identifier associated with the component.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker id="date-picker" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* name */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>name</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    The name of the input field, used in form submissions.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker name="date" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* mode */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>mode</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the type of date input. Available options: <code>"date"</code>, <code>"time"</code>, <code>"datetime"</code>, <code>"week"</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker mode="datetime" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* placeholder */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>placeholder</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Placeholder text displayed when no value is selected.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker placeholder="Select a date" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* value */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>value</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The controlled value of the component.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker value="2025-01-01" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* defaultValue */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultValue</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The default value of the component (uncontrolled mode).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker defaultValue="2025-01-01" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onChange */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onChange</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function triggered when the value changes.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker onChange={(value) => console.log(value)} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* disabled */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the input field, preventing user interaction.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker disabled />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* required */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>required</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Marks the field as required for form validation.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker required />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls the size of the input field. Available options: <code>"sm"</code>, <code>"md"</code>, <code>"lg"</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker size="lg" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* tooltip */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>tooltip</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Additional information displayed as a tooltip.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker tooltip="Select a valid date" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* helperText */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>helperText</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Helper text displayed below the input field.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<DatePicker helperText="Required field" />'}</code>
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
