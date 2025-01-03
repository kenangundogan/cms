'use client';

import { useState } from "react";
import { DocumentDuplicateIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Example from "@/app/docs/components/Example";

import TextField from "@/app/components/ui/textfield/TextField";
import {
    required,
    email,
    phone,
    numbersOnly,
    lettersOnly,
    minLength,
    maxLength
} from '@/app/components/ui/textfield/validators';

const SampleExample = () => {
    // State'ler:
    const [textValue, setTextValue] = useState("");
    const [age, setAge] = useState("");
    const [comment, setComment] = useState("");
    const [customError, setCustomError] = useState("");

    // Örnek bir onBlur fonksiyonu
    const handleBlur = () => {
        console.log('Input blurred');
    };

    // Örnek bir onFocus fonksiyonu
    const handleFocus = () => {
        console.log('Input focused');
    };

    // Manuel hata ayarı yapan fonksiyon (örnek)
    const triggerError = () => {
        setCustomError("Manually triggered error message!");
    };

    return (
        <div className="space-y-6">
            <Example>
                <Example.Title>Basic Usage</Example.Title>
                <Example.Description>
                    In this example, we showcase how to use <code>label</code>, <code>id</code>, <code>name</code>,
                    <code>placeholder</code>, <code>required</code>, and <code>tooltip</code>.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Full Name"
                        id="fullname"
                        name="fullname"
                        placeholder="Enter your full name"
                        required
                        tooltip="This field is required for registration"
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Controlled Component with Events</Example.Title>
                <Example.Description>
                    Demonstrates how to manage a controlled input using <code>value</code>,
                    <code>onChange</code>, as well as <code>onBlur</code> and <code>onFocus</code> events.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Username"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Uncontrolled Component</Example.Title>
                <Example.Description>
                    Example of an uncontrolled input using <code>defaultValue</code>. The user-entered value is not tracked with internal state in this example.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Nickname (Uncontrolled)"
                        id="nickname"
                        name="nickname"
                        defaultValue="Kenan Bey"
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Customizing Appearance & Icons</Example.Title>
                <Example.Description>
                    Showcasing <code>type</code>, <code>disabled</code>, <code>iconLeft</code>, <code>iconRight</code>, and a custom <code>className</code>.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        iconLeft={<LockClosedIcon className="h-5 w-5 text-gray-500" />}
                        iconRight={<DocumentDuplicateIcon className="h-5 w-5 text-gray-500" />}
                        className="bg-white"
                    />
                    <br />
                    <TextField
                        label="Disabled Field"
                        id="disabled"
                        name="disabled"
                        placeholder="This field is disabled"
                        disabled
                        iconLeft={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Manual Error & Helper Text</Example.Title>
                <Example.Description>
                    Demonstrates how <code>error</code> and <code>helperText</code> can be used.
                    Click the button to trigger an error message.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Enter Something"
                        id="customerror"
                        name="customerror"
                        placeholder="Try clicking the button below"
                        error={customError}
                        helperText="If there's no error, this text is displayed!"
                    />
                    <button
                        onClick={triggerError}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Trigger Error
                    </button>
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Validation & Blocking Invalid Input</Example.Title>
                <Example.Description>
                    Using <code>validators</code> for letters-only or numbers-only validations.
                    With <code>blockInvalidInput</code> set to true, invalid characters won't even appear.
                </Example.Description>
                <Example.Body>
                    {/* Letters Only */}
                    <TextField
                        label="First Name (Letters Only)"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter letters only"
                        validators={[lettersOnly]}
                        blockInvalidInput={true}
                    />
                    <br />
                    {/* Numbers Only */}
                    <TextField
                        label="Age (Numbers Only)"
                        id="age"
                        name="age"
                        placeholder="Enter numbers only"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        validators={[numbersOnly]}
                        blockInvalidInput={true}
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Min/Max Length & Character Count</Example.Title>
                <Example.Description>
                    Demonstrates <code>minLength</code>, <code>maxLength</code>, and <code>showCharacterCount</code>.
                    We also integrate <code>minLength</code> and <code>maxLength</code> into our validators array.
                </Example.Description>
                <Example.Body>
                    <TextField
                        label="Comment"
                        id="comment"
                        name="comment"
                        type="textarea"
                        placeholder="Enter your comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={5}
                        minLength={10}
                        maxLength={100}
                        validators={[required, minLength, maxLength]}
                        showCharacterCount={true}
                    />
                </Example.Body>
            </Example>

            <Example>
                <Example.Title>Email & Phone Validation</Example.Title>
                <Example.Description>
                    Here we show how <code>validators</code> can handle <code>email</code> and <code>phone</code> formats.
                </Example.Description>
                <Example.Body>
                    {/* Email Validation */}
                    <TextField
                        label="Email Address"
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        placeholder="Enter your email"
                        validators={[required, email]}
                    />
                    <br />
                    {/* Phone Validation */}
                    <TextField
                        label="Phone Number"
                        id="phonenumber"
                        name="phonenumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        validators={[required, phone]}
                        iconLeft={<PhoneIcon className="h-5 w-5 text-gray-500" />}
                    />
                </Example.Body>
            </Example>

        </div>
    );
};

export default SampleExample;
