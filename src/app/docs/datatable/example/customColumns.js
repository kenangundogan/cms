'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';

const generateBasicExample = () => {
    return {
        JS: `
<DataTable
    name="Custom Columns (array)"
    endpoint="/api/table"
    responseMapping={{
        data: "data",
    }}
    customColumns={[
        {
            field: "avatar",
            render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
        }
    ]}
/>
        `,
    };
};

const CustomColumnsExample = () => {
    return (
        <div>
            <Example>
                <Example.Title>Custom Columns (array)</Example.Title>
                <Example.Description>
                    Use the <code>customColumns</code> prop to customize or add columns to the table.
                </Example.Description>
                <Example.Body>
                    <DataTable
                        name="Custom Columns (array)"
                        endpoint="/api/table"
                        responseMapping={{
                            data: "data",
                        }}
                        customColumns={[
                            {
                                field: "avatar",
                                render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
                            }
                        ]}
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default CustomColumnsExample;
