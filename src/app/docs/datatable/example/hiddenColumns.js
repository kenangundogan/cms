'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Hidden Columns (array)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    hiddenColumns={["id", "status"]}
/>
        `,
    };
};

const HiddenColumnsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Hidden Columns (array)</Example.Title>
                <Example.Description>
                    Hides the specified columns in the table using the <code>hiddenColumns</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Hidden Columns (array)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        hiddenColumns={["id", "status"]}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default HiddenColumnsExample;
