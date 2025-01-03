'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Form</code> component, showcasing its supported features and usage examples.
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
                            <Table.Row>
                                <Table.Cell>
                                    <code>onSubmit</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the function to handle form submission.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`onSubmit={(e) => handleSubmit(e)}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>action</code>
                                </Table.Cell>
                                <Table.Cell>
                                    The URL where the form data will be sent.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`action="/submit"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>method</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the HTTP method to use (`GET`, `POST`, etc.).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`method="post"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>encType</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies how form data should be encoded (`multipart/form-data`, etc.).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`encType="multipart/form-data"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>target</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Determines where to display the response after submitting the form (`_self`, `_blank`).
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`target="_blank"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>autoComplete</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Controls whether form fields should have autocomplete enabled or not.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`autoComplete="off"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>noValidate</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Disables browser's built-in form validation.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`noValidate`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>aria-labelledby</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Links the form to an accessible label, improving accessibility.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`aria-labelledby="form-title"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>id</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Assigns a unique identifier to the form.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`id="user-form"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>name</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the name of the form for server-side processing.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`name="userData"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Adds custom CSS classes to style the form.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`className="bg-white p-6 rounded-md"`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>style</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Applies inline styles to the form.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`style={{ margin: "20px" }}`}</code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <code>data-*</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows adding custom data attributes for various purposes.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`data-type="login-form"`}</code>
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
