'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Add New Columns (array)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    addColumns={[
        {
            field: "actions",
            label: "Actions",
            render: (row) => (
                <button onClick={() => alert(\`Editing \${row.id}\`)}>Edit</button>
            ),
        },
    ]}
/>
        `,
    };
};

const AddColumnsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Add New Columns (array)</Example.Title>
                <Example.Description>
                    Use the <code>addColumns</code> prop to add new columns to your table.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        endpoint="/api/table"
                        name="Add New Columns (array)"
                        responseMapping={{
                            data: "data",
                        }}
                        addColumns={[
                            {
                                field: "actions",
                                label: "Actions",
                                render: (row) => (
                                    <button onClick={() => alert(`Editing ${row.id}`)}>Edit</button>
                                ),
                            },
                        ]}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default AddColumnsExample;
