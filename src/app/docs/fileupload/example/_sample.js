'use client';

import Example from "@/app/docs/components/Example";
import FileUpload from "@/app/components/ui/fileupload/FileUpload";

const SampleExample = () => {
    const handleFileChange = (files, error) => {
        if (error) {
            console.error("Error:", error);
            return;
        }
        console.log("Selected files:", files);
    };

    return (
        <div className="space-y-6">
            {/* Basic Usage */}
            <Example>
                <Example.Title>Basic Usage</Example.Title>
                <Example.Description>
                    This example demonstrates basic usage of the <code>FileUpload</code> component with multiple file selection enabled and a placeholder text.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-basic"
                        name="basic-files"
                        multiple={true}
                        placeholder="Click to select files..."
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>

            {/* Restrict File Types */}
            <Example>
                <Example.Title>Restrict File Types</Example.Title>
                <Example.Description>
                    Use the <code>accept</code> property to restrict the file types that can be selected. In this example, only image files are allowed.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-images"
                        name="image-files"
                        multiple={false}
                        accept="image/*"
                        placeholder="Select an image file..."
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>

            {/* Limit File Size */}
            <Example>
                <Example.Title>Limit File Size</Example.Title>
                <Example.Description>
                    You can use the <code>maxFileSize</code> property to restrict the maximum size of files that can be selected. Files larger than the specified size will be rejected.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-size"
                        name="size-files"
                        maxFileSize={1 * 1024 * 1024} // 1 MB
                        placeholder="Select files under 1 MB..."
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>

            {/* Single File Upload */}
            <Example>
                <Example.Title>Single File Upload</Example.Title>
                <Example.Description>
                    In this example, <code>multiple</code> is set to <code>false</code>, allowing only one file to be selected.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-single"
                        name="single-file"
                        multiple={false}
                        placeholder="Select a single file..."
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>

            {/* Disabled File Upload */}
            <Example>
                <Example.Title>Disabled File Upload</Example.Title>
                <Example.Description>
                    Use the <code>disabled</code> property to disable the file upload field.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-disabled"
                        name="disabled-file"
                        disabled={true}
                        placeholder="This file upload is disabled"
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>

            {/* Custom Styling */}
            <Example>
                <Example.Title>Custom Styling</Example.Title>
                <Example.Description>
                    You can customize the appearance of the <code>FileUpload</code> component using the <code>className</code> property.
                </Example.Description>
                <Example.Body>
                    <FileUpload
                        id="file-upload-styled"
                        name="styled-files"
                        className="bg-blue-50 border-blue-300 text-blue-600 hover:bg-blue-100"
                        placeholder="Styled file upload..."
                        onChange={handleFileChange}
                    />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
