'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const AllFeaturesExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    endpoint="https://example.com/api/users"
    pagination={{
        active: true,
        options: {
            currentPage: "meta.current_page",
            lastPage: "meta.last_page",
            perPage: "meta.per_page",
            total: "meta.total",
            path: "meta.path",
            from: "meta.from",
            to: "meta.to",
            links: "links",
        },
    }}
    filter={true}
    showControls={{
        active: true,
        options: [10, 20, 40, 60, 100],
    }}
    sort={true}
    customColumns={[
        { field: "id", label: "ID" },
        { field: "name", label: "Name", render: (value) => <strong>{value}</strong> },
    ]}
    addColumns={[
        {
            field: "actions",
            label: "Actions",
            render: (row) => (
                <button onClick={() => alert(\`Editing \${row.id}\`)}>Edit</button>
            ),
        },
    ]}
    responseMapping={{
        data: "data",
    }}
    visibleColumns={["id", "name", "email"]}
    hiddenColumns={["password", "token"]}
    columnVisibilityToggle={true}
/>
`
    };

    return (
        <div>
            <Example>
                <Example.Title>All Features (Comprehensive)</Example.Title>
                <Example.Description>
                    Below is a comprehensive example showcasing all supported features of the <code>TableContainer</code> component.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Property</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">endpoint</code></td>
                                    <td>The API endpoint for data retrieval.</td>
                                    <td><code>string</code></td>
                                    <td><code>null</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">pagination</code></td>
                                    <td>Controls pagination settings.</td>
                                    <td><code>object</code></td>
                                    <td><code>{`{ active: false, options: {} }`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">filter</code></td>
                                    <td>Enables table filtering.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`{false}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">showControls</code></td>
                                    <td>Manages table controls (e.g., records per page).</td>
                                    <td><code>object</code></td>
                                    <td><code>{`{ active: false, options: [10, 20, 40] }`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">sort</code></td>
                                    <td>Enables column sorting.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`{false}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">customColumns</code></td>
                                    <td>Customizes table columns.</td>
                                    <td><code>array</code></td>
                                    <td><code>{`{[]}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">addColumns</code></td>
                                    <td>Adds new columns to the table.</td>
                                    <td><code>array</code></td>
                                    <td><code>{`{[]}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">responseMapping</code></td>
                                    <td>Maps API responses to the table structure.</td>
                                    <td><code>object</code></td>
                                    <td><code>{`{ data: "items" }`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">visibleColumns</code></td>
                                    <td>Specifies which columns to display.</td>
                                    <td><code>array</code></td>
                                    <td><code>{`{[]}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">hiddenColumns</code></td>
                                    <td>Specifies which columns to hide.</td>
                                    <td><code>array</code></td>
                                    <td><code>{`{[]}`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">columnVisibilityToggle</code></td>
                                    <td>Allows users to toggle column visibility.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`{false}`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default AllFeaturesExample;
