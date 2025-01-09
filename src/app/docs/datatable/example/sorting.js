'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Sorting (boolean)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    sort={true}
/>
        `,
    };
};

const SortingExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Sorting (boolean)</Example.Title>
                <Example.Description>
                    Activate sorting functionality using the <code>sort</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Sorting (boolean)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        sort={true}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SortingExample;
