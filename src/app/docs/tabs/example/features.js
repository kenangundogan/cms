'use client';

import Example from "@/app/docs/components/Example";

const Features = () => {
    return (
        <div>
            <Example>
                <Example.Title>Features</Example.Title>
                <Example.Description>
                    Below is a detailed documentation of the <code>Tabs</code> component, showcasing its supported features and usage examples.
                </Example.Description>
                <Example.Body>
                    <div>
                        <table className="w-full text-left bg-white">
                            <thead>
                                <tr className="*:border *:p-4">
                                    <th>Element</th>
                                    <th>Description</th>
                                    <th>Sample Use</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Tabs</code></td>
                                    <td>
                                        The main container for the tabs component. Manages active tab state and renders its child components.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs>...</Tabs>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Tabs.Head</code></td>
                                    <td>
                                        Defines the tabs' header section, where the clickable tab items are located.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs.Head>...</Tabs.Head>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Tabs.Body</code></td>
                                    <td>
                                        Defines the tabs' body section, where the content of each tab is displayed.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs.Body>...</Tabs.Body>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">Tabs.Item</code></td>
                                    <td>
                                        Represents a single tab item, either in the header or the body.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs.Item>...</Tabs.Item>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">defaultActive</code></td>
                                    <td>
                                        Specifies the default active tab index.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs defaultActive={1}>...</Tabs>`}
                                        </code>
                                    </td>
                                </tr>
                                <tr className="*:border *:p-4">
                                    <td><code className="bg-gray-100 rounded-md py-2 px-4">activeIndex</code></td>
                                    <td>
                                        Controls the currently active tab index. Useful for programmatic tab switching.
                                    </td>
                                    <td>
                                        <code>
                                            {`<Tabs activeIndex={2}>...</Tabs>`}
                                        </code>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Example.Body>
            </Example>
        </div>
    );
};

export default Features;
