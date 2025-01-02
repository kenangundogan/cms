import React, { useEffect, useState } from 'react';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import TreeView from '@/app/components/ui/treeview/Treeview';

const generateBasicExample = () => {
    return {
        JS: `
<TreeView defaultExpanded={false}>
    <TreeView.Item label="Label 1">
        <TreeView.Item label="Sub Label 1">
            <TreeView.Item label="Nested Sub Label 1">
                <TreeView.Item label="Nested Sub Label 2" />
                <TreeView.Item label="Nested Sub Label 3" />
            </TreeView.Item>
        </TreeView.Item>
        <TreeView.Item label="Disabled Sub Label" disabled={false}>
            <TreeView.Item label="Nested Sub Label 1" />
            <TreeView.Item label="Nested Sub Label 2" />
            <TreeView.Item label="Nested Sub Label 3" />
        </TreeView.Item>
    </TreeView.Item>
    <TreeView.Item label="Label 2">
        <TreeView.Item label="Sub Label 1">
            <TreeView.Item label="Nested Sub Label 1" />
        </TreeView.Item>
    </TreeView.Item>
</TreeView>
`,
    };
};

const renderTreeItems = (nodes) => {
    if (!nodes || nodes.length === 0) return null;

    return nodes.map((node) => (
        <TreeView.Item
            key={node.id}
            label={node.label}
            disabled={node.disabled || false}
        >
            {renderTreeItems(node.children)}
        </TreeView.Item>
    ));
};

const SampleExample = () => {

    const [treeData, setTreeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTreeData = async () => {
            try {
                const response = await fetch('/api/treeview');
                const data = await response.json();
                setTreeData(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tree data:', error);
                setLoading(false);
            }
        };

        fetchTreeData();
    }, []);

    return (
        <Example>
            <Example.Title>Sample Usage</Example.Title>
            <Example.Description>
                This is a basic example of the TreeView component. The TreeView component is a hierarchical list of items that can be expanded or collapsed to show or hide the child items.
            </Example.Description>
            <Example.Body>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <TreeView defaultExpanded={false}>
                        {renderTreeItems(treeData)}
                    </TreeView>
                )}
                <CodeCard codeSnippets={generateBasicExample()} />
            </Example.Body>
        </Example>
    );
};

export default SampleExample;
