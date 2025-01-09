'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Visible Columns (array)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    visibleColumns={["member","id"]}
/>
        `,
    };
};

const VisibleColumnsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Visible Columns (array)</Example.Title>
                <Example.Description>
                    Specify the columns to display in the table using the <code>visibleColumns</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Visible Columns (array)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        visibleColumns={["member","id"]}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default VisibleColumnsExample;
