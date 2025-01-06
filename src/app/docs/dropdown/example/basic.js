'use client';

import Example from "@/app/docs/components/Example";
import CodeCard from "@/app/components/ui/CodeCard";
import Dropdown from '@/app/components/ui/dropdown/Dropdown';

const generateBasicExample = () => {
    return {
        JS: `
<Dropdown buttonText="Options">
    <Dropdown.Body>
        <Dropdown.Item onClick={() => console.log('Profile clicked')}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('Settings clicked')}>Settings</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('Logout clicked')}>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
        `,
    };
};

const generateDirectionExample = () => {
    return {
        JS: `
<Dropdown buttonText="Top" direction="top">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
<Dropdown buttonText="Right" direction="right">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
<Dropdown buttonText="Bottom" direction="bottom">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
<Dropdown buttonText="Left" direction="left">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
        `,
    };
};

const generateDisabledExample = () => {
    return {
        JS: `
<Dropdown buttonText="Disabled Dropdown" disable={true}>
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
        `,
    };
};

const generateSizeExample = () => {
    return {
        JS: `
<Dropdown buttonText="Small" size="sm">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
<Dropdown buttonText="Medium" size="md">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
<Dropdown buttonText="Large" size="lg">
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
</Dropdown>
        `,
    };
};

const generateHeadAndFootExample = () => {
    return {
        JS: `
<Dropdown buttonText="With Head and Foot">
    <Dropdown.Head>
        <strong>User Menu</strong>
    </Dropdown.Head>
    <Dropdown.Body>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown.Body>
    <Dropdown.Foot>
        <button className="text-blue-500 hover:underline">More Options</button>
    </Dropdown.Foot>
</Dropdown>
        `,
    };
};

const DropdownExamples = () => {
    return (
        <div>
            {/* Basic Example */}
            <Example>
                <Example.Title>Basic Dropdown</Example.Title>
                <Example.Description>
                    This is a basic dropdown example with simple items.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Dropdown buttonText="Options">
                            <Dropdown.Body>
                                <Dropdown.Item onClick={() => console.log('Profile clicked')}>Profile</Dropdown.Item>
                                <Dropdown.Item onClick={() => console.log('Settings clicked')}>Settings</Dropdown.Item>
                                <Dropdown.Item onClick={() => console.log('Logout clicked')}>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                    </div>
                    <CodeCard codeSnippets={generateBasicExample()} />
                </Example.Body>
            </Example>

            {/* Direction Examples */}
            <Example>
                <Example.Title>Dropdown with Directions</Example.Title>
                <Example.Description>
                    The dropdown can open in different directions such as <code>top</code>, <code>right</code>, <code>bottom</code>, and <code>left</code>.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 min-h-80">
                        <Dropdown buttonText="Bottom" direction="bottom">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        <Dropdown buttonText="Left" direction="left">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        <Dropdown buttonText="Right" direction="right">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        <Dropdown buttonText="Top" direction="top">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                    </div>
                    <CodeCard codeSnippets={generateDirectionExample()} />
                </Example.Body>
            </Example>

            {/* Size Examples */}
            <Example>
                <Example.Title>Dropdown with Sizes</Example.Title>
                <Example.Description>
                    The dropdown button and menu can have different sizes: <code>small</code>, <code>medium</code>, and <code>large</code>.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Dropdown buttonText="Small" size="sm">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        <Dropdown buttonText="Medium" size="md">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                        <Dropdown buttonText="Large" size="lg">
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                    </div>
                    <CodeCard codeSnippets={generateSizeExample()} />
                </Example.Body>
            </Example>

            {/* Head and Foot Examples */}
            <Example>
                <Example.Title>Dropdown with Head and Foot</Example.Title>
                <Example.Description>
                    The dropdown can have a <code>Head</code> and <code>Foot</code> section to provide additional context or actions.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Dropdown buttonText="With Head and Foot">
                            <Dropdown.Head>
                                <strong>User Menu</strong>
                            </Dropdown.Head>
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                            <Dropdown.Foot>
                                <button className="text-blue-500 hover:underline">More Options</button>
                            </Dropdown.Foot>
                        </Dropdown>
                    </div>
                    <CodeCard codeSnippets={generateHeadAndFootExample()} />
                </Example.Body>
            </Example>

            {/* Disabled Example */}
            <Example>
                <Example.Title>Disabled Dropdown</Example.Title>
                <Example.Description>
                    A disabled dropdown cannot be interacted with.
                </Example.Description>
                <Example.Body>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Dropdown buttonText="Disabled Dropdown" disable={true}>
                            <Dropdown.Body>
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Logout</Dropdown.Item>
                            </Dropdown.Body>
                        </Dropdown>
                    </div>
                    <CodeCard codeSnippets={generateDisabledExample()} />
                </Example.Body>
            </Example>
        </div>
    );
};

export default DropdownExamples;
