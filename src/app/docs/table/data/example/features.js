'use client';
import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const AllFeaturesExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a comprehensive example showcasing all supported features of the <code>DataTable</code> component.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Property</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Type</Table.Cell>
                                <Table.Cell as="th">Default</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>endpoint</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The API endpoint for data retrieval.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>string</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>null</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>pagination</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls pagination settings.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>object</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`{ active: false, options: {} }`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>filter</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Enables table filtering.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>false</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>showControls</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Manages table controls (e.g., records per page).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>object</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`{ active: false, options: [10, 20, 40] }`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>sort</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Enables column sorting.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>false</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>customColumns</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Customizes table columns.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>array</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`[]`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>addColumns</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds new columns to the table.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>array</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`[]`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>responseMapping</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Maps API responses to the table structure.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>object</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`{ data: "items" }`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>visibleColumns</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies which columns to display.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>array</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`[]`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>hiddenColumns</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies which columns to hide.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>array</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`[]`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>columnVisibilityToggle</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows users to toggle column visibility.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>boolean</code>
                                </Table.Cell>
                                <Table.Cell>
                                    <code>false</code>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Example.Body>
            </Example>
        </div>
    );
};

export default AllFeaturesExample;
