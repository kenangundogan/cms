'use client';

import { useState } from 'react';
import Form from '@/app/components/ui/form/Form';
import TextField from "@/app/components/ui/textfield/TextField";
import {
    required,
    email,
    lettersOnly,
    minLength,
    maxLength
} from '@/app/components/ui/textfield/validators';
import Button from "@/app/components/ui/button/Button";
import Link from 'next/link';
import Image from 'next/image';

const RegisterPage = () => {
    const [firstname, setFirstname] = useState('');
    const [emaill, setEmaill] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Submitted:', { firstname, email, password, confirmPassword });
    };

    return (
        <div className='w-full min-h-screen p-4 sm:p-10 flex flex-wrap'>
            <div className='w-full md:w-6/12 lg:w-8/12 p-8 bg-blue-700'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Image
                        src='/assets/images/symbol/symbol.svg'
                        alt='Register Image'
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <div className='w-full md:w-6/12 lg:w-4/12 p-8 border flex justify-center items-center bg-grasy-50'>
                <div className="w-full max-w-sm">
                    <div className='mb-4'>
                        <h1 className="text-2xl font-bold mb-2">Sign Up</h1>
                        <p className='text-sm'>Create an account to continue</p>
                    </div>
                    <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <TextField
                            label="First Name"
                            id="firstname"
                            name="firstname"
                            type="text"
                            placeholder="Enter your first name"
                            validators={[required, lettersOnly]}
                            onChange={(e) => setFirstname(e.target.value)}
                        />

                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            validators={[required, email]}
                            onChange={(e) => setEmaill(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <TextField
                            label="Confirm Password"
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            minLength={6}
                            maxLength={8}
                            validators={[required, minLength, maxLength]}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Button type="submit" variant="primary" className={"w-40"}>
                            Kayıt Ol
                        </Button>
                    </Form>
                    <p className="mt-4 text-xs">
                        Zaten bir hesabınız var mı?{' '}
                        <Link href="/login" className="text-blue-700 hover:underline">
                            Giriş Yap
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
