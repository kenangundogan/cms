'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    The table below provides an overview of all the properties supported by the <code>Autocomplete</code> component, along with a short description for each property. This allows you to quickly see what each property does and how to integrate it into your project using <code>Autocomplete</code>.
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
                            {/* endpoint */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>endpoint</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    The API endpoint URL where the component fetches data.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete endpoint="/api/crypto" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* name */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>name</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    The label for the input field.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete name="Search" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* responseMapping */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>responseMapping</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies how to map the response data to results. Should contain a <code>data</code> key.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete responseMapping={{ data: "results" }} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* searchKey */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>searchKey</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    The key used to filter data on the server-side.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete searchKey="name" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* minChars */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>minChars</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Minimum number of characters before the search is triggered. Default is <code>1</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete minChars={3} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* displayFields */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>displayFields</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies which fields to display in the dropdown results. Can include multiple fields.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete displayFields={["name", "shortname"]} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* itemKeyField */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>itemKeyField</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    The unique key field for each result item in the dropdown. Defaults to the index if not provided.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete itemKeyField="id" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* selectedValueField */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>selectedValueField</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    The field whose value is set in the input field when an item is selected.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete selectedValueField="name" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the input size. Can be <code>"sm"</code>, <code>"md"</code>, or <code>"lg"</code>. Default is <code>"md"</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete size="lg" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* maxLength */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>maxLength</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Maximum number of characters allowed in the input field.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<Autocomplete maxLength={50} />'}</code>
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
