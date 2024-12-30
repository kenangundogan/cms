'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const VisibleColumnsExample = () => {
    const basicExample = {
        JS: `
<DataTable
    visibleColumns={["status"]}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Visible Columns (array)</Example.Title>
                <Example.Description>
                    Specify the columns to display in the table using the <code>visibleColumns</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">visibleColumns</code></td>
                                    <td>Defines the list of columns to be displayed in the table.</td>
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

export default VisibleColumnsExample;
