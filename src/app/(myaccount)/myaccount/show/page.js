'use client';

import Breadcrumb from '@/app/components/ui/breadcrumb/Breadcrumb';
import PageInfo from '@/app/components/ui/PageInfo';
import BoxWrapper from '@/app/components/ui/box/BoxWrapper';
import Box from '@/app/components/ui/box/Box';
import Image from 'next/image';

const DashboardPage = () => {
    const data = [
        {
            key: 'Name',
            value: 'Kenan'
        },
        {
            key: 'Surname',
            value: 'Gündoğan'
        },
        {
            key: 'Email',
            value: 'kgundogan@cyh.com.tr'
        },
        {
            key: 'Phone',
            value: '+90 987 654 32 10'
        },
        {
            key: 'Gender',
            value: 'Mr.'
        },
        {
            key: 'Date of Birth',
            value: '01.01.1988'
        }
    ]
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item>My Account</Breadcrumb.Item>
            </Breadcrumb>

            <PageInfo>
                <PageInfo.Title>My Account</PageInfo.Title>
                <PageInfo.Description>My Account description goes here.</PageInfo.Description>
            </PageInfo>

            <BoxWrapper>
                <Box className={'w-full md:max-w-72'}>
                    <Box.Head>My Account</Box.Head>
                    <Box.Body>
                        <div className='relative z-10 overflow-hidden rounded-full mb-2 w-32 h-32 m-auto'>
                            <Image src="/assets/images/avatar/2.png" alt="User" width={255} height={255} />
                        </div>
                        <ul className='divide-y text-sm *:flex *:justify-between *:py-3'>
                            {data.map((item, index) => (
                                <li key={index}>
                                    <span className='font-bold'>{item.key}</span>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Box.Body>
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default DashboardPage;
