'use client';

import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Autocomplete from "@/app/components/ui/autocomplete/Autocomplete";

const generateBasicExample = () => {
    return {
        JS: `
<Autocomplete
    endpoint="/api/crypto"
    name="Kripto Ara"
    responseMapping={{ data: "data" }}
    searchKey="name"
    minChars={3}
    displayFields={["id", "name", "shortname"]}
    itemKeyField="id"
    selectedValueField="name"
/>
        `,
    };
};

const generateAdvancedExample = () => {
    return {
        JS: `
<Autocomplete
    endpoint="/api/crypto"
    name="Advanced Search"
    responseMapping={{ data: "results" }}
    searchKey="shortname"
    minChars={2}
    displayFields={["shortname", "name"]}
    itemKeyField="id"
    selectedValueField="shortname"
    size="lg"
/>
        `,
    };
};

const generateSmallSizeExample = () => {
    return {
        JS: `
<Autocomplete
    endpoint="/api/crypto"
    name="Compact Search"
    responseMapping={{ data: "data" }}
    searchKey="name"
    minChars={1}
    displayFields={["name"]}
    itemKeyField="id"
    selectedValueField="name"
    size="sm"
/>
        `,
    };
};

const SampleExample = () => {
    return (
        <div>
            {/* Basic Usage */}
            <Example>
                <Example.Title>Basic Usage</Example.Title>
                <Example.Description>
                    This example demonstrates the basic usage of the <code>Autocomplete</code> component for searching cryptocurrencies.
                </Example.Description>
                <Example.Body>
                    <Autocomplete
                        endpoint="/api/crypto"
                        name="Kripto Ara"
                        responseMapping={{ data: "data" }}
                        searchKey="name"
                        minChars={3}
                        displayFields={["id", "name", "shortname"]}
                        itemKeyField="id"
                        selectedValueField="name"
                    />
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>

            {/* Advanced Usage */}
            <Example>
                <Example.Title>Advanced Usage</Example.Title>
                <Example.Description>
                    This example demonstrates advanced usage of the <code>Autocomplete</code> component with different configurations such as searching by <code>shortname</code> and using a larger input size.
                </Example.Description>
                <Example.Body>
                    <Autocomplete
                        endpoint="/api/crypto"
                        name="Advanced Search"
                        responseMapping={{ data: "data" }}
                        searchKey="shortname"
                        minChars={2}
                        displayFields={["shortname", "name"]}
                        itemKeyField="id"
                        selectedValueField="shortname"
                        size="lg"
                    />
                    <CodeCard codeSnippets={generateAdvancedExample()} />
                </Example.Body>
            </Example>

            {/* Small Size Example */}
            <Example>
                <Example.Title>Compact Size Example</Example.Title>
                <Example.Description>
                    This example demonstrates a compact version of the <code>Autocomplete</code> component for limited space or smaller designs.
                </Example.Description>
                <Example.Body>
                    <Autocomplete
                        endpoint="/api/crypto"
                        name="Compact Search"
                        responseMapping={{ data: "data" }}
                        searchKey="name"
                        minChars={1}
                        displayFields={["name"]}
                        itemKeyField="id"
                        selectedValueField="name"
                        size="sm"
                    />
                    <CodeCard codeSnippets={generateSmallSizeExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default SampleExample;
