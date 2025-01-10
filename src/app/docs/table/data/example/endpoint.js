'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Endpoint (string)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
/>
        `,
    };
};

const EndpointExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Endpoint (string)</Example.Title>
                <Example.Description>
                    Specifies the API endpoint from which the data is fetched. The table dynamically builds itself based on the data from this endpoint.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Endpoint (string)"
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

export default EndpointExample;
