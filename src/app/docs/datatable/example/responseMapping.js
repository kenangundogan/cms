'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const ResponseMappingExample = () => {
    const basicExample = {
        JS: `
<TableContainer
    responseMapping={{
        data: "data"
    }}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Response Mapping (object)</Example.Title>
                <Example.Description>
                    Maps API responses to the table structure.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">data</code></td>
                                    <td>The key in the API response where the table data resides.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">"items"</code></td>
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

export default ResponseMappingExample;
