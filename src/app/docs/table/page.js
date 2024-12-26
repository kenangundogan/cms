// src/app/docs/tabs/page.js

'use client';

import TableContainer from '@/app/components/ui/table/TableContainer';

const DashboardPage = () => {

    return (
        <div>

            <TableContainer endpoint="/api/table" responseMapping={{ data: "data"}}/>

            <TableContainer
                endpoint="/api/table" // Verilerin çekileceği endpoint
                // hiddenColumns={["status"]} // Gizlenecek kolonlar
                visibleColumnsColumns={["status"]} // Gizlenecek kolonlar
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
                sort={false} // Sıralama aktif mi?
                customColumns={[
                    {
                        field: "avatar",
                        render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
                    },
                    {
                        field: "id",
                        render: (value) => <strong>{value}</strong>,
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
                                    className="bg-blue-400 text-white py-2 px-4 rounded-sm"
                                >
                                    Düzenle
                                </button>
                                <button
                                    onClick={() => console.log(`Sil: ${rowData.id}`)}
                                    className="bg-red-400 text-white py-2 px-4 rounded-sm"
                                >
                                    Sil
                                </button>
                            </div>
                        ),
                        filterable: false, // Filtreleme bu kolon için geçerli değil
                    },
                ]}
            />



            <TableContainer
                endpoint="http://127.0.0.1:8001/api/articles" // Verilerin çekileceği endpoint
                showControls={{
                    active: true, // Kontrollerin gösterilip gösterilmeyeceği
                    options: [10, 20, 40, 60, 100, 120],
                }}
                responseMapping={{
                    data: "data", // Verilerin bulunduğu key
                }}
                pagination={{
                    active: true, // Sayfalama aktif mi?
                    options: {
                        currentPage: "current_page", // Sayfa numarası
                        lastPage: "last_page", // Son sayfa numarası
                        perPage: "per_page", // Sayfa başına kayıt sayısı
                        total: "total", // Toplam kayıt sayısı
                        path: "path", // Endpoint path
                        from: "from", // Kayıtların başlangıç indexi
                        to: "to", // Kayıtların bitiş indexi
                        links: "links", // Sayfa linkleri için key
                    },
                }}
                filter={true} // Filtreleme aktif mi?
                sort={true} // Sıralama aktif mi?
            />

        </div>
    );
};

export default DashboardPage;
