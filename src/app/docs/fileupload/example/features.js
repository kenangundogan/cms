'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    The table below provides an overview of all the properties supported by the <code>FileUpload</code> component, along with a short description for each property. This allows you to quickly see what each property does and how to integrate it into your project using <code>FileUpload</code>.
                </Example.Description>
                <Example.Body>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Cell as="th">Property</Table.Cell>
                                <Table.Cell as="th">Description</Table.Cell>
                                <Table.Cell as="th">Example</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {/* id */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>id</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    A unique DOM identifier associated with the component.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload id="upload" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* name */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>name</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the field name to be used in form submissions.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload name="files" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* multiple */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>multiple</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows multiple file selection. Defaults to <code>false</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload multiple={true} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* accept */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>accept</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the accepted file types. For example, <code>"image/*"</code> for images.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload accept="image/*" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* maxFileSize */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>maxFileSize</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the maximum file size in bytes. Files larger than this will be ignored.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload maxFileSize={2 * 1024 * 1024} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onChange */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onChange</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function triggered whenever a file is selected or updated.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload onChange={(files) => console.log(files)} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* disabled */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>disabled</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables the component, preventing any user interaction.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload disabled={true} />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* placeholder */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>placeholder</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Placeholder text displayed when no files are selected.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload placeholder="Select your files" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the size of the component. Possible values: <code>"sm"</code>, <code>"md"</code>, <code>"lg"</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload size="lg" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* className */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom CSS classes to the root element.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{'<FileUpload className="mt-4" />'}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* fileTooLargeMessage */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>fileTooLargeMessage</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Custom function to generate an error message for oversized files.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<FileUpload fileTooLargeMessage={(name, size) => \`${name} is too large\`} />`}</code>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Example.Body>
            </Example>
        </div>
    );
};

export default Features;
