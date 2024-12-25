// src/app/docs/tabs/page.js

'use client';

import TableContainer from '@/app/components/ui/table/TableContainer';

const DashboardPage = () => {

    return (
        <div>

            {/* <TableContainer
                endpoint="http://127.0.0.1:8001/api/articles"
                dataKey="data"
                metaKeys={{
                    key: null, // Meta bilgileri "meta" altında (varsayılan). Ana endpoint seviyesindeyse null bırakabilirsiniz.
                    currentPage: "current_page",
                    lastPage: "last_page",
                    perPage: "per_page",
                    total: "total",
                    path: "path",
                    from: "from",
                    to: "to",
                }}
                linksKey="asdasd"
            /> */}

            {/* <TableContainer endpoint="/api/table" pagination={true} />

            <TableContainer endpoint="/api/table" filter={true} />

            <TableContainer endpoint="/api/table" showControls={true} />

            <TableContainer endpoint="/api/table" pagination={true} filter={true} />

            <TableContainer endpoint="/api/table" pagination={true} filter={true} showControls={true} /> */}

            {/* <TableContainer
                endpoint="/api/table"
                pagination={true}
                filter={true}
                showControls={true}
                customColumns={[
                    {
                        field: "avatar",
                        render: (value) => <img src={value} alt="Preview" className="w-10 h-10 object-cover" />,
                    },
                    {
                        field: "id",
                        render: (value) => <strong>{value}</strong>,
                    },
                ]}
            /> */}
            <TableContainer
                endpoint="/api/table" // Verilerin çekileceği endpoint
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
            />



            {/* <TableContainer
                endpoint="http://127.0.0.1:8001/api/articles" // Verilerin çekileceği endpoint
                pagination={false} // Sayfalama aktif mi?
                filter={true} // Filtreleme aktif mi?
                dataKeyMatching={
                    {
                        data: "data", // Verilerin bulunduğu key
                        links: "links", // Sayfa linkleri için key
                        currentPage: "current_page", // Sayfa numarası
                        lastPage: "last_page", // Son sayfa numarası
                        perPage: "per_page", // Sayfa başına kayıt sayısı
                        total: "total", // Toplam kayıt sayısı
                        path: "path", // Endpoint path
                        from: "from", // Kayıtların başlangıç indexi
                        to: "to", // Kayıtların bitiş indexi
                    }
                }
            /> */}

        </div>
    );
};

export default DashboardPage;
