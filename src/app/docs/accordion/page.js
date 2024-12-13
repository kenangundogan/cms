'use client';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import Accordion from '@/app/components/ui/accordion/Accordion';

const DashboardPage = () => {
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
                <Breadcrumb.Item>Accordion</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>Accordion</PageInfo.Title>
                <PageInfo.Description>Accordion is a container component that can be used to wrap other components.</PageInfo.Description>
            </PageInfo>

            <Accordion isAllOpen={true} trigger="click">
                <Accordion.Item defaultOpen={false}>
                    <Accordion.Head title="Başlık 1" />
                    <Accordion.Body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item defaultOpen={true}>
                    <Accordion.Head title="Başlık 2" />
                    <Accordion.Body>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 3" />
                    <Accordion.Body>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion isAllOpen={true} trigger="click" direction="horizontal">
                <Accordion.Item defaultOpen={false}>
                    <Accordion.Head title="Başlık 1" />
                    <Accordion.Body>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item defaultOpen={true}>
                    <Accordion.Head title="Başlık 2" />
                    <Accordion.Body>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 3" />
                    <Accordion.Body>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion isAllOpen={false} trigger="hover">
                <Accordion.Item>
                    <Accordion.Head title="Başlık 1" />
                    <Accordion.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 2" />
                    <Accordion.Body>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item>
                    <Accordion.Head title="Başlık 3" />
                    <Accordion.Body>
                        Suspendisse fermentum, odio ut aliquam maximus, felis sapien vehicula arcu, non dictum diam eros nec mauris. Donec dapibus eget lacus id semper. Curabitur posuere sagittis eros eu scelerisque. Ut quis eros mauris. Vestibulum at placerat est. Nam vitae semper odio, sed aliquet velit. Vestibulum consectetur faucibus metus, ut dapibus orci euismod id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies malesuada nisl. Pellentesque vel turpis tincidunt eros vulputate ullamcorper. Vestibulum at ligula mauris. Phasellus non dui rutrum, auctor diam a, pellentesque lectus. Suspendisse sollicitudin sollicitudin volutpat. In hac habitasse platea dictumst. Ut maximus sodales diam vel tincidunt.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default DashboardPage;
