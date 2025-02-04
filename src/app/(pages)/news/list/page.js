'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';
import DataTable from '@/app/components/ui/datatable/Container';
import { TrashIcon, PencilIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Haber</Breadcrumb.Item>
                <Breadcrumb.Item>Liste</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Haber</PageInfo.Title>
                <PageInfo.Description>Haber listesi burada yer alacak.</PageInfo.Description>
            </PageInfo>

            <div className='p-4'>
                <DataTable
                    endpoint="/api/news"
                    name="."
                    responseMapping={{ data: "data" }}
                    columnVisibilityToggle={true}
                    showControls={{
                        active: true,
                        options: [10, 20, 40, 60, 100, 120],
                    }}
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
                            filterable: false,
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default DashboardPage;
