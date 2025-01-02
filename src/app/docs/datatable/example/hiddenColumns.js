'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    hiddenColumns={["status"]}
/>
        `,
    };
};

const HiddenColumnsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Hidden Columns (array)</Example.Title>
                <Example.Description>
                    Hides the specified columns in the table using the <code>hiddenColumns</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">hiddenColumns</code></td>
                                    <td>Defines which columns to hide in the table.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">[]</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default HiddenColumnsExample;
