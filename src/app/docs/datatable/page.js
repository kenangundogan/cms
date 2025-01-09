// src/app/docs/datatable/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Features from '@/app/docs/datatable/example/features';
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
import Sample from '@/app/docs/datatable/example/_sample';

const DataTablePage = () => {

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Data Table</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Data Table</PageInfo.Title>
                <PageInfo.Description>
                    The Data Table component is used to display structured data in a tabular format. It supports advanced features like pagination, filtering, sorting, and customizable columns for a comprehensive data management experience.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>Managing user lists in admin dashboards</PageInfo.Item>
                    <PageInfo.Item>Displaying reports or logs</PageInfo.Item>
                    <PageInfo.Item>E-commerce product management</PageInfo.Item>
                    <PageInfo.Item>Any scenario requiring dynamic data representation</PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
            <Endpoint />
            <ResponseMapping />
            <Filter />
            <Sorting />
            <ShowControls />
            <HiddenColumns />
            <VisibleColumns />
            <Pagination />
            <CustomColumns />
            <AddColumns />
            <ColumnVisibilityToggle />

        </div>
    );
};

export default DataTablePage;
