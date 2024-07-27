'use client'
import React from 'react';
import { Input } from "@nextui-org/react";
import Image from 'next/image';
import Banner from '../../public/banner3.jpeg';
import { MyButton } from '../../components/myButton/index';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export default function LoginPage() {


 const router = useRouter()
  const form = useForm()

  const handleSubmit = form.handleSubmit(async (data, e) => {
    try {
      console.log("dados enviados", data);
      await signIn('email', { email: data.email })
        toast.success('success');
    } catch (error) {
      console.log(err)
    }
  })

  return (
    <div className='relative h-screen w-screen flex items-center justify-center'>
      <Image
        src={Banner}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className='z-0'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 z-10 '></div> {/* Overlay */}

      <form onSubmit={handleSubmit} className='relative z-20 flex flex-col items-center gap-6  '>
        <div className='flex flex-col gap-8 rounded-lg  bg-white bg-opacity-20 backdrop-blur-lg pt-10 pb-10 px-6 w-full h-full m-20'>
          <h1 className="text-4xl font-semi text-white">Login</h1>
          <div className="flex flex-col w-full gap-4">
            <Input type="email" label="Email" className='w-full ' radius='sm'{...form.register('email')} />
            <Input type="password" label="Senha" radius='sm' {...form.register('password')} />
            <MyButton type='submit' color='radani'>LOGIN</MyButton>
            <div className="w-full  h-[4px]   bg-gradient-to-r from-[#ee9c2e] via-[#85adb5] to-transparent "></div>
            <div className="flex flex-col w-full ">
              <MyButton onClick={() => router.push('/')} color='radani2'>Visitante</MyButton>
            </div  >
          </div>
        </div>
      </form>
    </div>
  );
}
