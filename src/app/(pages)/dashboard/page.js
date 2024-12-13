'use client';

import Breadcrumb from '@/app/components/ui/box/Breadcrumb';
import PageInfo from '@/app/components/ui/box/PageInfo';
import Box from '@/app/components/ui/box/Box';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Dashboard</PageInfo.Title>
                <PageInfo.Description>Dashboard description goes here.</PageInfo.Description>
            </PageInfo>

            <Box>
                <Box.Title>Dashboard Title</Box.Title>
                <Box.Body>
                    <h2>Box Component</h2>
                    <p>Box component is a simple container component.</p>
                </Box.Body>
                <Box.Footer>
                    <p>Footer Content Here</p>
                </Box.Footer>
            </Box>

            <Box>
                <Box.Body>
                    <h2>Box Component without Title</h2>
                    <p>This box does not have a title or footer.</p>
                </Box.Body>
                <Box.Footer>
                    Footer
                </Box.Footer>
            </Box>
        </div>
    );
};

export default DashboardPage;
