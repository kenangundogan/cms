// src/app/docs/fileupload/page.js

'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Sample from '@/app/docs/fileupload/example/_sample';
import Features from '@/app/docs/fileupload/example/features';

const FileUploadPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>File Upload</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>File Upload</PageInfo.Title>
                <PageInfo.Description>
                    The <code>FileUpload</code> component is a versatile and user-friendly React component that allows you to handle file uploads efficiently. It supports single and multiple file selections, custom file size restrictions, and advanced styling options to fit your project needs.
                </PageInfo.Description>
                <PageInfo.Subtitle>Use Cases</PageInfo.Subtitle>
                <PageInfo.List>
                    <PageInfo.Item>
                        Use for uploading user avatars, profile pictures, or other single files.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Handle bulk uploads, such as importing datasets or uploading multiple images.
                    </PageInfo.Item>
                    <PageInfo.Item>
                        Integrate file uploads with APIs to save files to a server or cloud storage.
                    </PageInfo.Item>
                </PageInfo.List>
            </PageInfo>

            <Features />
            <Sample />
        </div>
    );
};

export default FileUploadPage;
