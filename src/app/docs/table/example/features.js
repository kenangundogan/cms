'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Table</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Element</th>
                                    <th>Description</th>
                                    <th>Sample Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table</code></td>
                                    <td>
                                        The root container for the table. Wraps all other elements.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table>...</Table>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table.Header</code></td>
                                    <td>
                                        Defines the table header section (<code>&lt;thead&gt;</code>).
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table.Header>...</Table.Header>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table.Body</code></td>
                                    <td>
                                        Defines the table body section (<code>&lt;tbody&gt;</code>).
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table.Body>...</Table.Body>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table.Footer</code></td>
                                    <td>
                                        Defines the table footer section (<code>&lt;tfoot&gt;</code>).
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table.Footer>...</Table.Footer>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table.Row</code></td>
                                    <td>
                                        Defines a row within the table.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table.Row>...</Table.Row>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Table.Cell</code></td>
                                    <td>
                                        Defines a cell within a row. Automatically determines whether to render a <code>&lt;th&gt;</code> or <code>&lt;td&gt;</code> based on context.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Table.Cell>...</Table.Cell>`}
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Example.Body>
            </Example>
        </div>
    );
};

export default Features;
