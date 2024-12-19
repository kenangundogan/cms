// src/app/docs/tabs/page.js

'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Tabs from '@/app/components/ui/tabs/Tabs';
import CodeCard from "@/app/components/ui/CodeCard";
import Example from "@/app/docs/components/Example";

const DashboardPage = () => {
    const basicExample = {
        JS: `
<Tabs>
    <Tabs.Head>
        <Tabs.Item>Title 1</Tabs.Item>
        <Tabs.Item>Title 2</Tabs.Item>
    </Tabs.Head>
    <Tabs.Body>
        <Tabs.Item>
            This is the first item's content.
        </Tabs.Item>
        <Tabs.Item>
            This is the second item's content.
        </Tabs.Item>
    </Tabs.Body>
</Tabs>
        `
    };

    return (
        <div>
            {/* Breadcrumb */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Tabs</Breadcrumb.Item>
            </Breadcrumb>

            {/* Page Info */}
            <PageInfo>
                <PageInfo.Title>Tabs</PageInfo.Title>
                <PageInfo.Description>
                    The Tabs component is used to create a tabbed interface. It is a simple way to switch between different sections of content.
                </PageInfo.Description>
            </PageInfo>

            {/* Basic Example */}
            <Example>
                <Example.Title>Basic Example</Example.Title>
                <Example.Description>
                    A simple tabs with two sections that can be expanded or collapsed individually.
                </Example.Description>
                <Example.Body>
                    <Tabs activeIndex={1}>
                        <Tabs.Head>
                            <Tabs.Item>Title 1</Tabs.Item>
                            <Tabs.Item>Title 2</Tabs.Item>
                            <Tabs.Item>Title 3</Tabs.Item>
                            <Tabs.Item>Title 4</Tabs.Item>
                            <Tabs.Item>Title 5</Tabs.Item>
                        </Tabs.Head>
                        <Tabs.Body>
                            <Tabs.Item>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Tabs.Item>
                            <Tabs.Item>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Tabs.Item>
                            <Tabs.Item>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            </Tabs.Item>
                            <Tabs.Item>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Tabs.Item>
                            <Tabs.Item>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </Tabs.Item>
                        </Tabs.Body>
                    </Tabs>
                    <CodeCard codeSnippets={basicExample} />
                </Example.Body>
            </Example>

        </div>
    );
};

export default DashboardPage;
