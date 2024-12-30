'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const AddColumnsExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    addColumns={[
        {
            field: "actions",
            label: "Actions",
            render: (row) => (
                <button onClick={() => alert(\`Editing \${row.id}\`)}>Edit</button>
            ),
        },
    ]}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Add New Columns (array)</Example.Title>
                <Example.Description>
                    Use the <code>addColumns</code> prop to add new columns to your table.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Property</th>
                                    <th>Description</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">addColumns</code></td>
                                    <td>Allows adding new columns to the table.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">[]</code></td>
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

export default AddColumnsExample;
