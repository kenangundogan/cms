'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';
import Accordion from '@/app/components/ui/accordion/Accordion';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Box</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Box</PageInfo.Title>
                <PageInfo.Description>Box is a container component that can be used to wrap other components.</PageInfo.Description>
            </PageInfo>

            <Accordion isAllOpen={false} trigger="click">
                <Accordion.Item defaultOpen={false}>
                    <Accordion.Head title="Başlık 1" />
                    <Accordion.Body>
                        İçerik 1: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item defaultOpen={true}>
                    <Accordion.Head title="Başlık 2" />
                    <Accordion.Body>
                        İçerik 2: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 3" />
                    <Accordion.Body>
                        İçerik 3: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion isAllOpen={false} trigger="hover">
                <Accordion.Item defaultOpen={false}>
                    <Accordion.Head title="Başlık 1" />
                    <Accordion.Body>
                        İçerik 1: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item defaultOpen={true}>
                    <Accordion.Head title="Başlık 2" />
                    <Accordion.Body>
                        İçerik 2: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 3" />
                    <Accordion.Body>
                        İçerik 3: Bu bir accordion body içerik alanıdır.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <BoxWrapper className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}>
                <Box>
                    <Box.Head>Box Title</Box.Head>
                    <Box.Body>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </Box.Body>
                    <Box.Footer>
                        <p>Footer</p>
                    </Box.Footer>
                </Box>

                <Box>
                    <Box.Body>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </Box.Body>
                </Box>

                <Box>
                    <Box.Body>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </Box.Body>
                    <Box.Footer>
                        Footer
                    </Box.Footer>
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default DashboardPage;
