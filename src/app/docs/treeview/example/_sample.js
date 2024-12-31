import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import TreeView from '@/app/components/ui/treeview/Treeview';
const sampleData = [
    {
        id: 1,
        name: "Root 1",
        children: [
            { id: 2, name: "Child 1-1" },
            {
                id: 3,
                name: "Child 1-2",
                children: [
                    { id: 4, name: "Child 1-2-1" },
                    { id: 5, name: "Child 1-2-2" },
                ],
            },
        ],
    },
    {
        id: 6,
        name: "Root 2",
        children: [
            { id: 7, name: "Child 2-1" },
            { id: 8, name: "Child 2-2" },
        ],
    },
];


const SampleExample = () => {
    const basicExample = {
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
`
    };

    return (
        <div>
            <Example>
                <Example.Title>Sample Usage</Example.Title>
                <Example.Description>
                    This is a basic example of the TreeView component. The TreeView component is a hierarchical list of items that can be expanded or collapsed to show or hide the child items.
                </Example.Description>
                <Example.Body>
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
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
