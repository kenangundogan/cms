'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Table from '@/app/components/ui/table/Table';
import Example from "@/app/docs/components/Example";

import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({}); // API'den gelen pagination bilgileri
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async (page) => {
        setLoading(true);
        const response = await fetch(`/api/table?page=${page}`);
        const result = await response.json();

        setData(result.items); // Tabloda gösterilecek veriler
        setMeta(result.meta); // Pagination bilgileri
        setLoading(false);
    };

    useEffect(() => {
        fetchData(currentPage); // Sayfa değiştiğinde veriyi yeniden çek
    }, [currentPage]);

    if (loading) {
        return <p>Yükleniyor...</p>;
    }

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Table</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Table</PageInfo.Title>
                <PageInfo.Description>
                    The Table component is used to display data in a tabular format. It is a simple and flexible component that can be used in various ways.
                </PageInfo.Description>
            </PageInfo>

            {/* Basic Example */}
            <Example>
                <Example.Title>Basic Example</Example.Title>
                <Example.Description>
                    A simple table with sortable and filterable columns.
                </Example.Description>
                <Example.Body>

                    <Table data={data}>
                        <Table.Head>
                            <Table.Row>
                                <Table.HeadCell field="id">
                                    ID
                                </Table.HeadCell>
                                <Table.HeadCell sortable filter field="member">
                                    Üye
                                </Table.HeadCell>
                                <Table.HeadCell field="location">
                                    Konum
                                </Table.HeadCell>
                                <Table.HeadCell field="status">
                                    Durum
                                </Table.HeadCell>
                            </Table.Row>
                        </Table.Head>
                        <Table.Body>
                            {(sortedData) => (
                                sortedData.map((item) => (
                                    <Table.Row key={item.id}>
                                        <Table.BodyCell>{item.id}</Table.BodyCell>
                                        <Table.BodyCell>{item.member}</Table.BodyCell>
                                        <Table.BodyCell>{item.location}</Table.BodyCell>
                                        <Table.BodyCell>{item.status}</Table.BodyCell>
                                    </Table.Row>
                                ))
                            )}
                        </Table.Body>

                    </Table>
                    <Table.Pagination
                        totalItems={meta.total} // API'den gelen toplam öğe sayısı
                        itemsPerPage={meta.per_page} // API'den gelen sayfa başına öğe sayısı
                        currentPage={meta.current_page} // API'den gelen geçerli sayfa
                        onPageChange={(page) => setCurrentPage(page)}
                    />

                </Example.Body>
            </Example>

        </div >
    );
};

export default DashboardPage;
