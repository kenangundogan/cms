'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>DataBreadcrumb</code> component, showcasing its supported features and usage examples.
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
                            {/* source.type */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>source.type</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the source type for the breadcrumb data. It can be <code>'fetch'</code> (API request) or <code>'data'</code> (static data).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`source={{ type: 'fetch', endpoint: '/api/breadcrumb' }}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* source.endpoint */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>source.endpoint</code> (Required for fetch)
                                </Table.Cell>
                                <Table.Cell>
                                    The API endpoint to fetch breadcrumb data. Used when <code>source.type</code> is <code>'fetch'</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`source={{ type: 'fetch', endpoint: '/api/breadcrumb' }}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* source.mapping.data */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>source.mapping.data</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    The key in the response (for fetch) or the array of objects (for data) containing the breadcrumb items.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`source={{ mapping: { data: 'breadcrumb' } }}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* source.mapping.fields.label */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>source.mapping.fields.label</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the field name for the breadcrumb label. Defaults to <code>'label'</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`source={{ mapping: { fields: { label: 'name' } } }}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* source.mapping.fields.href */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>source.mapping.fields.href</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the field name for the breadcrumb link. Defaults to <code>'href'</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`source={{ mapping: { fields: { href: 'url' } } }}`}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* icon */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>icon</code> (Optional)
                                </Table.Cell>
                                <Table.Cell>
                                    Custom icon displayed between breadcrumb items. Defaults to a right-chevron icon.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`icon={<ChevronRightIcon className="size-2 text-gray-500" />}`}</code>
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
