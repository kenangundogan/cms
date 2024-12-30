'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const SortingExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    sort={true}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Sorting (boolean)</Example.Title>
                <Example.Description>
                    Activate sorting functionality using the <code>sort</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">sort</code></td>
                                    <td>Enables sorting functionality for table columns.</td>
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

export default SortingExample;
