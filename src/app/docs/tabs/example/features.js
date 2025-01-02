'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Tabs</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Element</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Sample Use</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Tabs</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The main container for the tabs component. Manages active tab state and renders its child components.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs>...</Tabs>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Tabs.Head</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the tabs' header section, where the clickable tab items are located.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs.Head>...</Tabs.Head>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Tabs.Body</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the tabs' body section, where the content of each tab is displayed.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs.Body>...</Tabs.Body>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>Tabs.Item</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Represents a single tab item, either in the header or the body.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs.Item>...</Tabs.Item>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultActive</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the default active tab index.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs defaultActive={1}>...</Tabs>`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>activeIndex</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls the currently active tab index. Useful for programmatic tab switching.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<Tabs activeIndex={2}>...</Tabs>`}</code>
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
