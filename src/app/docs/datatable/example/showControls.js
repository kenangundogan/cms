'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const ShowControlsExample = () => {
    const basicExample = {
        JS: `
<DataTable
    showControls={{
        active: true,
        options: [10, 20, 40, 60, 100, 121],
    }}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Show Controls (object)</Example.Title>
                <Example.Description>
                    Manage table control options (e.g., records per page) using the <code>showControls</code> prop.
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
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">active</code></td>
                                    <td>Enables table controls.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">false</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">options</code></td>
                                    <td>Defines the options for records per page.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">[10, 20, 40, 60, 100]</code></td>
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

export default ShowControlsExample;
