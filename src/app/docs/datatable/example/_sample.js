'use client';
import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import DataTable from '@/app/components/ui/datatable/Container';
import { TrashIcon, PencilIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

const SampleExample = () => {
    const basicExample = {
        JS: `
<DataTable
    columnVisibilityToggle={true}
    endpoint="/api/table"
    hiddenColumns={["status"]}
    showControls={{
        active: true,
        options: [10, 20, 40, 60, 100, 121],
    }}
    responseMapping={{
        data: "data",
    }}
    pagination={{
        active: true,
        options: {
            currentPage: "meta.current_page",
            lastPage: "meta.last_page",
            perPage: "meta.per_page",
            total: "meta.total",
            path: "meta.path",
            from: "meta.from",
            to: "meta.to",
            links: "links",
        },
    }}
    filter={true}
    sort={true}
    customColumns={[
        {
            field: "avatar",
            render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
        }
    ]}
    addColumns={[
        {
            field: "actions",
            label: "Actions",
            render: (value, rowData) => (
                <div className="flex gap-2 text-sm">
                    <button
                        onClick={() => console.log(Düzenle:)}
                        className="border p-3 rounded-sm"
                    >
                        <PencilIcon className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => console.log(Sil:)}
                        className="border p-3 rounded-sm"
                    >
                        <TrashIcon className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => console.log(Detay:)}
                        className="border p-3 rounded-sm"
                    >
                        <ViewfinderCircleIcon className="w-4 h-4" />
                    </button>
                </div>
            ),
            filterable: false,
        },
    ]}

/>
`
    };
    return (
        <div>
            <Example>
                <Example.Title>Sample Usage</Example.Title>
                <Example.Description>
                    This is a basic example of the DataTable component with all features enabled.
                </Example.Description>
                <Example.Body>


                    <DataTable
                        // endpoint="http://127.0.0.1:8000/api/articles"
                        endpoint="http://localhost:3000/api/table"
                        responseMapping={{ data: "data" }}
                        sort={true}
                        filter={true}
                        pagination={{
                            active: true,
                            options: {
                                currentPage: "meta.current_page",
                                lastPage: "meta.last_page",
                                perPage: "meta.per_page",
                                total: "meta.total",
                                path: "meta.path",
                                from: "meta.from",
                                to: "meta.to",
                                links: "links",
                            },
                        }}
                        customColumns={[
                            {
                                field: "avatar",
                                render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
                            }
                        ]}
                        addColumns={[
                            {
                                field: "actions",
                                label: "Actions",
                                render: (value, rowData) => (
                                    <div className="flex gap-2 text-sm">
                                        <button
                                            onClick={() => console.log(`Düzenle: ${rowData.id}`)}
                                            className="border p-3 rounded-sm"
                                        >
                                            <PencilIcon className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => console.log(`Sil: ${rowData.id}`)}
                                            className="border p-3 rounded-sm"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => console.log(`Detay: ${rowData.id}`)}
                                            className="border p-3 rounded-sm"
                                        >
                                            <ViewfinderCircleIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                ),
                                filterable: false, // Filtreleme bu kolon için geçerli değil
                            },
                        ]}
                    />
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
