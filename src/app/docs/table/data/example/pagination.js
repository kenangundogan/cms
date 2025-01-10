'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
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
        `,
    };
};

const PaginationExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Pagination (object)</Example.Title>
                <Example.Description>
                    Use the <code>pagination</code> prop to activate the pagination feature.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Pagination (object)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
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
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default PaginationExample;
