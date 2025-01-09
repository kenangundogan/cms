'use client';

import { useState } from 'react';
import Form from '@/app/components/ui/form/Form';
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
import Button from "@/app/components/ui/button/Button";
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
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
                    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            validators={[required, email]}
                        />
                        <TextField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            minLength={6}
                            maxLength={8}
                            validators={[required, minLength, maxLength]}
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
