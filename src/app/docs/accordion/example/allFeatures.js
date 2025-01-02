'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";

const AllFeaturesExample = () => {
    const basicExample = {
        JS: `
<TreeView defaultExpanded={true}>
    <TreeView.Item label="Root">
        <TreeView.Item label="Folder 1">
            <TreeView.Item label="Subfolder 1">
                <TreeView.Item label="Subfile 1" />
            </TreeView.Item>
            <TreeView.Item label="Subfolder 2" />
        </TreeView.Item>
        <TreeView.Item label="Folder 2" />
    </TreeView.Item>
</TreeView>
`
    };

    return (
        <div>
            <Example>
                <Example.Title>All Features (Comprehensive)</Example.Title>
                <Example.Description>
                    Below is a comprehensive example showcasing all supported features of the <code>TreeView</code> component.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Property</th>
                                    <th>Description</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">defaultExpanded</code></td>
                                    <td>Determines if all items are expanded by default.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">icons</code></td>
                                    <td>Custom icons for expanded, collapsed, and leaf nodes.</td>
                                    <td><code>object</code></td>
                                    <td><code>{`{ expanded: '↓', collapsed: '→', leaf: '•' }`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">label</code></td>
                                    <td>The text displayed for a tree node.</td>
                                    <td><code>string</code></td>
                                    <td><code>''</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">disabled</code></td>
                                    <td>Disables the interaction for a node.</td>
                                    <td><code>boolean</code></td>
                                    <td><code>{`false`}</code></td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">type</code></td>
                                    <td>Specifies whether the node is a folder or a file.</td>
                                    <td><code>string ('folder' | 'file')</code></td>
                                    <td><code>{`'folder'`}</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default AllFeaturesExample;
