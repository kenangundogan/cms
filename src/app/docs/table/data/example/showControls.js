'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Show Controls (object)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    showControls={{
        active: true,
        options: [10, 20, 40, 60, 100, 120, 140],
    }}
/>
        `,
    };
};

const ShowControlsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Show Controls (object)</Example.Title>
                <Example.Description>
                    Manage table control options (e.g., records per page) using the <code>showControls</code> prop.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Show Controls (object)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        showControls={{
                            active: true,
                            options: [10, 20, 40, 60, 100, 120, 140],
                        }}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default ShowControlsExample;
