'use client';
import { useEffect, useState } from 'react';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import List from '@/app/components/ui/list/List';

const generateBasicExample = () => {
    return {
        JS: `
import List from '@/app/components/ui/list/List';

const data = [
    { name: 'Jane Doe', age: 30, job: 'Software Engineer' },
    { name: 'Sarah Smith', age: 25, job: 'Product Manager' },
    { name: 'Kate Johnson', age: 35, job: 'Designer' }
];

export default function ExamplePage() {
    return (
        <List oddEven={true} activeItems={[1]}>
            {data.map((row, index) => (
                <List.Row key={index}>
                    <List.Row.Item>{row.name}</List.Row.Item>
                    <List.Row.Item>{row.age}</List.Row.Item>
                    <List.Row.Item>{row.job}</List.Row.Item>
                </List.Row>
            ))}
        </List>
    );
}
        `,
    };
};

const SampleExample = () => {
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/table')
            .then(response => response.json())
            .then(result => {
                setTableData(result.data);
                if (result.data.length > 0) {
                    setColumns(Object.keys(result.data[0]));
                }
            })
            .catch(error => console.error('Error fetching table data:', error))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Example>
            <Example.Title>Sample Usage</Example.Title>
            <Example.Description>
                This is a basic example of the List component with all features enabled.
            </Example.Description>
            <Example.Body>
                {isLoading ? (
                    <p className="text-gray-500">Loading data...</p>
                ) : (
                    <div className='mb-4'>
                        <List oddEven={true} activeItems={[2]}>
                            {tableData.map((row, rowIndex) => (
                                <List.Row key={rowIndex}>
                                    {columns.map((column, colIndex) => (
                                        <List.Row.Item key={colIndex}>{row[column]}</List.Row.Item>
                                    ))}
                                </List.Row>
                            ))}
                        </List>
                    </div>
                )}
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
