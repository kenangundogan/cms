'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const ColumnVisibilityToggleExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    columnVisibilityToggle={true}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Column Visibility Toggle (boolean)</Example.Title>
                <Example.Description>
                    Enable users to toggle column visibility using the <code>columnVisibilityToggle</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">columnVisibilityToggle</code></td>
                                    <td>Allows users to toggle the visibility of table columns.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">false</code></td>
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

export default ColumnVisibilityToggleExample;
