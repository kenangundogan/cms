// src/app/docs/datatable/page.js

'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import TableContainer from '@/app/components/ui/datatable/Container';
import { TrashIcon, PencilIcon, ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import AllFeatures from '@/app/docs/datatable/example/allFeatures';
import Endpoint from '@/app/docs/datatable/example/endpoint';
import Pagination from "@/app/docs/datatable/example/pagination";
import Sorting from '@/app/docs/datatable/example/sorting';
import Filter from '@/app/docs/datatable/example/filter';
import CustomColumns from '@/app/docs/datatable/example/customColumns';
import AddColumns from '@/app/docs/datatable/example/addColumns';
import HiddenColumns from '@/app/docs/datatable/example/hiddenColumns';
import VisibleColumns from '@/app/docs/datatable/example/visibleColumns';
import ColumnVisibilityToggle from '@/app/docs/datatable/example/columnVisibilityToggle';
import ShowControls from '@/app/docs/datatable/example/showControls';
import ResponseMapping from '@/app/docs/datatable/example/responseMapping';

const DataTablePage = () => {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Data Table</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Data Table Component Documentation</PageInfo.Title>
                <PageInfo.Description>
                    The <strong>DataTable</strong> component is a flexible and reusable table for displaying data in a structured format.
                </PageInfo.Description>
            </PageInfo>

            <TableContainer
                columnVisibilityToggle={true} // Kolon gizleme/gösterme aktif mi?
                endpoint="/api/table" // Verilerin çekileceği endpoint
                hiddenColumns={["status"]} // Gizlenecek kolonlar
                // visibleColumns={["status"]} // Gizlenecek kolonlar
                showControls={{
                    active: true, // Kontrollerin gösterilip gösterilmeyeceği
                    options: [10, 20, 40, 60, 100, 121],
                }}
                responseMapping={{
                    data: "data", // Verilerin bulunduğu key
                }}
                pagination={{
                    active: true, // Sayfalama aktif mi?
                    options: {
                        currentPage: "meta.current_page", // Sayfa numarası
                        lastPage: "meta.last_page", // Son sayfa numarası
                        perPage: "meta.per_page", // Sayfa başına kayıt sayısı
                        total: "meta.total", // Toplam kayıt sayısı
                        path: "meta.path", // Endpoint path
                        from: "meta.from", // Kayıtların başlangıç indexi
                        to: "meta.to", // Kayıtların bitiş indexi
                        links: "links", // Sayfa linkleri için key
                    },
                }}
                filter={true} // Filtreleme aktif mi?
                sort={true} // Sıralama aktif mi?
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

            <AllFeatures />
            <Endpoint />
            <Pagination />
            <Sorting />
            <Filter />
            <CustomColumns />
            <AddColumns />
            <HiddenColumns />
            <VisibleColumns />
            <ColumnVisibilityToggle />
            <ShowControls />
            <ResponseMapping />

        </div>
    );
};

export default DataTablePage;
