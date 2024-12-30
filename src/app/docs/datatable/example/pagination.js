'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const PaginationExample = () => {
    const basicExample = {
        JS: `
<DataTable
    pagination={{
        active: true,
        options: {
            currentPage: "meta.current_page",
            lastPage: "meta.last_page",
            perPage: "meta.per_page",
            total: "meta.total",
            path: "meta.path",
            from: "meta.from",
            to: "meta.to",
            links: "links",
        }
    }}
/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Pagination (object)</Example.Title>
                <Example.Description>
                    Use the <code>pagination</code> prop to activate the pagination feature.
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
                                    <td>Enables pagination for the table.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">false</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">options</code></td>
                                    <td>Maps meta information for pagination.</td>
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">{'{}'}</code></td>
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

export default PaginationExample;
