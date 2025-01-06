'use client';

import Example from "@/app/docs/components/Example";
import Table from "@/app/components/ui/table/Table";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    The table below provides an overview of all the properties supported by the <code>TextField</code> component, along with a short description for each property. This allows you to quickly see what each property does and how to integrate it into your project using <code>TextField</code>
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
                            {/* label */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>label</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Defines the text displayed as a label for the input or textarea.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField label='Full Name' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* id */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>id</code> (Required)
                                </Table.Cell>
                                <Table.Cell>
                                    A unique DOM identifier associated with the component.
                                    This is especially important in <strong>form</strong> validation
                                    or testing scenarios.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField id='fullname' />"}</code>
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
                                    <code>{"<TextField name='fullname' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* type */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>type</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets the input type. Defaults to <code>"text"</code>.
                                    <br />
                                    <em>Valid values include:</em>{' '}
                                    <code>'text'</code>, <code>'email'</code>, <code>'password'</code>,{' '}
                                    <code>'number'</code>, <code>'tel'</code>, <code>'textarea'</code>, etc.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField type='email' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* placeholder */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>placeholder</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Shows placeholder text inside the input or textarea
                                    to give the user a hint.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField placeholder='Enter your name' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* value */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>value</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Used in a controlled component approach to manage the
                                    input value externally.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField value={someState} onChange={handleChange} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* defaultValue */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>defaultValue</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Used in an uncontrolled component approach to set the initial
                                    value of the input.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField defaultValue='John Doe' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onChange */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onChange</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function triggered whenever the input value updates.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField onChange={(e) => setValue(e.target.value)} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onBlur */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onBlur</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function triggered when the input loses focus.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField onBlur={() => console.log('blur')} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* onFocus */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>onFocus</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Callback function triggered when the input gains focus.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField onFocus={() => console.log('focus')} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* error */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>error</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows you to pass an external error message to the input.
                                    <br />
                                    When set, the component displays a red outline and an error message.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField error='Invalid username' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* helperText */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>helperText</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Helper text displayed beneath the input.
                                    It only appears if there is no error.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField helperText='Please enter at least 3 chars' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* tooltip */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>tooltip</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Shows an info icon next to the label, displaying extra information on hover.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField tooltip='This field is required' />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* iconLeft */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>iconLeft</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Inserts an icon on the left side of the input.
                                    Expects a <em>React node</em>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField iconLeft={<LockClosedIcon />} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* iconRight */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>iconRight</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Inserts an icon on the right side of the input.
                                    Expects a <em>React node</em>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField iconRight={<DocumentDuplicateIcon />} />"}</code>
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
                                    <code>{"<TextField disabled />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* required */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>required</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Applies the HTML5 "required" attribute for form validation.
                                    Displays an asterisk (*) next to the label.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField required />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* minLength */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>minLength</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the minimum number of characters allowed.
                                    <br />
                                    Can be integrated with the <em>validators</em> array using the <code>minLength</code> function.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField minLength={3} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* maxLength */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>maxLength</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Specifies the maximum number of characters allowed.
                                    <br />
                                    Can be integrated with the <em>validators</em> array using the <code>maxLength</code> function.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField maxLength={50} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* rows */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>rows</code>
                                </Table.Cell>
                                <Table.Cell>
                                    When <code>type="textarea"</code> is used, this sets the number of rows for the textarea.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField type='textarea' rows={5} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* showCharacterCount */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>showCharacterCount</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Displays the number of characters typed underneath the input.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField showCharacterCount={true} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* blockInvalidInput */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>blockInvalidInput</code>
                                </Table.Cell>
                                <Table.Cell>
                                    If set to <strong>true</strong>, characters that violate
                                    <em>validators</em> like <code>lettersOnly</code> or <code>numbersOnly</code>
                                    will be immediately blocked from being entered into the input.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField blockInvalidInput={true} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* validators */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>validators</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Accepts an array of validation functions.
                                    <br />
                                    Example functions: <code>required, email, phone, numbersOnly</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField validators={[required, numbersOnly]} />"}</code>
                                </Table.Cell>
                            </Table.Row>

                            {/* size */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>size</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Sets the size of the input. Defaults to <code>"md"</code>.
                                    <br />
                                    <em>Valid values include:</em> <code>'sm'</code>, <code>'md'</code>, <code>'lg'</code>.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{`<TextField size="lg" />`}</code>
                                </Table.Cell>
                            </Table.Row>
                            {/* className */}
                            <Table.Row>
                                <Table.Cell>
                                    <code>className</code>
                                </Table.Cell>
                                <Table.Cell>
                                    Allows you to add custom CSS classes.
                                </Table.Cell>
                                <Table.Cell>
                                    <code>{"<TextField className='mt-2' />"}</code>
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
