'use client';

import { useState } from 'react';
import Form from '@/app/components/ui/form/Form';
import Input from '@/app/components/ui/form/Input';
import Button from '@/app/components/ui/form/Button';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { email, password });
    };
    return (
        <div className='w-full min-h-screen p-4 sm:p-10 flex flex-wrap'>
            <div className='w-full md:w-6/12 lg:w-8/12 p-8 bg-blue-700'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Image
                        src='/assets/images/symbol/symbol.svg'
                        alt='Login Image'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className='w-full md:w-6/12 lg:w-4/12 p-8 border flex justify-center items-center bg-grasy-50'>
                <div className="w-full max-w-xs">
                    <div className='mb-4'>
                        <h1 className="text-2xl font-bold mb-2">Sign In</h1>
                        <p className='text-sm'>Sign in to your account to continue</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="flex flex-col">
                        <Input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className={"w-40"}>
                            Giriş Yap
                        </Button>
                    </Form>
                    <p className="mt-4 text-xs">
                        Hesabınız yok mu?{' '}
                        <Link href="/register" className="text-blue-700 hover:underline">
                            Kayıt Ol
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
