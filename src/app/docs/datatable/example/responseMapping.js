'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Response Mapping (object)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
/>
        `,
    };
};

const ResponseMappingExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Response Mapping (object)</Example.Title>
                <Example.Description>
                    Maps API responses to the table structure.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Response Mapping (object)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default ResponseMappingExample;
