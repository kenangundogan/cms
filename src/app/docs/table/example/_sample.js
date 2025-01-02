'use client';
import { useEffect, useState } from 'react';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Table from '@/app/components/ui/table/Table';

const generateBasicExample = () => {
    return {
        JS: `
<Table>
    <Table.Header>
        <Table.Row>
            <Table.Cell>...</Table.Cell>
        </Table.Row>
    </Table.Header>
    <Table.Body>
        <Table.Row>
            <Table.Cell>...</Table.Cell>
        </Table.Row>
    </Table.Body>
    <Table.Footer>
        <Table.Row>
            <Table.Cell>...</Table.Cell>
        </Table.Row>
    </Table.Footer>
</Table>
        `,
    };
};

const SampleExample = () => {
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        fetch('/api/table')
            .then(response => response.json())
            .then(result => {
                setTableData(result.data);
                if (result.data.length > 0) {
                    setColumns(Object.keys(result.data[0]));
                }
            })
            .catch(error => console.error('Error fetching table data:', error));
    }, []);

    return (
        <Example>
            <Example.Title>Sample Usage</Example.Title>
            <Example.Description>
                This is a basic example of the Table component with all features enabled.
            </Example.Description>
            <Example.Body>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            {columns.map((column, index) => (
                                <Table.Cell key={index}>{column.toUpperCase()}</Table.Cell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableData.map((row, rowIndex) => (
                            <Table.Row key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <Table.Cell key={colIndex}>{row[column]}</Table.Cell>
                                ))}
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            {columns.map((column, index) => (
                                <Table.Cell key={index}>{column.toUpperCase()}</Table.Cell>
                            ))}
                        </Table.Row>
                    </Table.Footer>
                </Table>
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
