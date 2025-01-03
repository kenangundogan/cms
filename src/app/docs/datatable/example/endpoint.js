'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    endpoint="https://example.com/api/users"
/>
        `,
    };
};

const EndpointExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Endpoint (string)</Example.Title>
                <Example.Description>
                    Specifies the API endpoint from which the data is fetched. The table dynamically builds itself based on the data from this endpoint.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">endpoint</code></td>
                                    <td>Specifies the API endpoint for data retrieval.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">null</code></td>
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

export default EndpointExample;
