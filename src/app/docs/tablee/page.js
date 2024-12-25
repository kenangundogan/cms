// src/app/docs/tabs/page.js

'use client';

import TableContainer from '@/app/components/ui/table/TableContainer';

const DashboardPage = () => {

    return (
        <div>

            <TableContainer endpoint="/api/table" />

            <TableContainer endpoint="/api/table" pagination={true} />

            <TableContainer endpoint="/api/table" filter={true} />

            <TableContainer endpoint="/api/table" showControls={true} />

            <TableContainer endpoint="/api/table" pagination={true} filter={true} />

            <TableContainer endpoint="/api/table" pagination={true} filter={true} showControls={true} />

            <TableContainer
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
            />

        </div>
    );
};

export default DashboardPage;
