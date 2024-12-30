'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const FilteringExample = () => {
    const basicExample = {
        JS: `
<DataTable
    filter={true}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Filtering (boolean)</Example.Title>
                <Example.Description>
                    Activate the filtering feature by using the <code>filter</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">filter</code></td>
                                    <td>Enables the filtering feature for the table.</td>
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

export default FilteringExample;
