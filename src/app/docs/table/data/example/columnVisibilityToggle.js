'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Column Visibility Toggle (boolean)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    columnVisibilityToggle={true}
/>
        `,
    };
};

const ColumnVisibilityToggleExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Column Visibility Toggle (boolean)</Example.Title>
                <Example.Description>
                    Enable users to toggle column visibility using the <code>columnVisibilityToggle</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Column Visibility Toggle (boolean)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        columnVisibilityToggle={true}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default ColumnVisibilityToggleExample;
