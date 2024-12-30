'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const CustomColumnsExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    customColumns={[
        { field: "id", label: "ID" },
        { field: "name", label: "Name", render: (value) => <strong>{value}</strong> },
    ]}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Custom Columns (array)</Example.Title>
                <Example.Description>
                    Use the <code>customColumns</code> prop to customize or add columns to the table.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">customColumns</code></td>
                                    <td>Allows customizing or adding new columns to the table.</td>
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

export default CustomColumnsExample;
