// src/app/docs/datatable/page.js

'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
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
import Base from '@/app/docs/datatable/example/_sample';

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
            <Base />
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
