'use client'

import Image from 'next/image'
import image from '../public/assets/images/image.png'
import {useState} from "react";
import SignupModal from "@/components/SignupModal";
import TopCryptos from "@/components/TopCryptos";
import Newsletter from "@/components/Newsletter";
import {toast, ToastContainer} from "react-toastify";

export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleSignupFormSubmit(newUser: any) {



        toast.success('User created successfully!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });

        closeModal();
    }

    function handleLogin() {

        window.location.href = '/dashboard';

        toast.success('User logged in successfully!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    }


    return (
        <>
        <section className='p-10 flex gap-5 w-full'>

            <section className='mt-20 flex flex-col gap-5 w-1/2'>
                <h1 className='font-bold text-yellow-500 text-5xl'>Lorem ipsum dolor sit amet, consectetur</h1>
                <p className='text-gray-600 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

                <button className='bg-yellow-500 p-4 text-white font-bold rounded-3xl w-1/2' onClick={openModal}>SIGN UP NOW -&gt;</button>

                {isOpen && <SignupModal onClose={closeModal} onSignup={handleSignupFormSubmit || handleLogin} />}

                <div className='flex gap-5'>

                    <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>Cryptos</span>
                    <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>NFTs</span>
                    <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>Games</span>

                </div>

            </section>

            <section className='w-1/2'>
                <Image src={image} alt='Woman image' width={1000} height={1000}/>
            </section>


        </section>

            <TopCryptos />
            <Newsletter />

            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </>
    )
}
