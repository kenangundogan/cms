'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Filtering (boolean)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    filter={true}
/>
        `,
    };
};

const FilteringExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Filtering (boolean)</Example.Title>
                <Example.Description>
                    Activate the filtering feature by using the <code>filter</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Filtering (boolean)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        filter={true}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default FilteringExample;
