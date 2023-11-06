'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import '../styles/global.css'
import logo from '../public/assets/images/logo.png'
import axios from "axios";
import SignupModal from "@/components/SignupModal";

export default function Header() {

    const apiKey: string = 'D755543C-00D2-465A-B026-D3D5E576CF90';
    const baseUrl: string = 'https://rest.coinapi.io/v1';

    const [userName, setUserName] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const [solanaPrice, setSolanaPrice] = useState(0);
    const [xlmPrice, setXlmPrice] = useState(0);

    async function fetchCoinData() {
        try {
            const response = await axios.get(`${baseUrl}/exchangerate/SOL/BRL`, {
                headers: {
                    'X-CoinAPI-Key': apiKey
                }
            });

            setSolanaPrice(response.data.rate);
            console.log('SOL price: ', solanaPrice);
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.get(`${baseUrl}/exchangerate/XLM/BRL`, {
                headers: {
                    'X-CoinAPI-Key': apiKey
                }
            });

            setXlmPrice(response.data.rate);
            console.log('XLM price: ', xlmPrice);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCoinData();
    }, []);

    // function fetchUserData() {
    //
    //     if (localStorage.getItem('currentUser') === null) {
    //         setIsUserLoggedIn(false);
    //         return;
    //     }
    //
    //     setIsUserLoggedIn(true);
    //
    //     const currentUserString = localStorage.getItem('currentUser');
    //     const currentUser = JSON.parse(currentUserString);
    //
    //     setUserName(currentUser.name);
    // }

    // useEffect(() => {
    //     fetchUserData();
    // }, []);

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/';
    }


    return (
        <header
            className="flex items-center justify-evenly h-16 px-4 bg-white border-b border-gray-200">

            <div className="flex items-center justify-between w-full max-w-5xl">
                <div className="flex items-center">
                    <a href="/" className="flex items-center justify-between">
                        <h1 className="ml-2 text-xl font-bold text-yellow-500">Coin<span
                            className='text-gray-500'>Synch</span></h1>
                        <Image src={logo} alt="CoinSynch" width={21} height={21}/>
                    </a>
                </div>

                <div className="flex items-center w-1/5 p-5">
                    <nav className="flex items-center self-start justify-start w-full max-w-5xl">
                        <a href="/"
                           className="w-1/2 hidden text-sm text-gray-400 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">About
                            Us</a>
                        <a href="/"
                           className="w-1/2 hidden text-sm text-gray-400 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">Top
                            Cryptos</a>
                    </nav>
                </div>


                <div className='flex items-center w-1/4'>
                    <div className="flex items-center gap-1 w-1/2">
                        <p>SOL</p>
                        <span className='text-gray-400'>R$ {solanaPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-1  w-1/2">
                        <p>XLM</p>
                        <span className='text-gray-400'>R$ {xlmPrice.toFixed(2)}</span>
                    </div>
                </div>


                {!isUserLoggedIn ? (
                    <div className="flex items-center justify-between w-1/5">
                        <button href="/"
                                className="w-1/2 hidden text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block"
                                onClick={openModal}
                        >
                            Sign in
                        </button>
                        <button href="/"
                                className="w-1/2 p-2 hidden text-sm font-medium text-white bg-yellow-500 rounded-2xl lg:block"
                                onClick={openModal}
                        >
                            Sign Up
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center w-1/4 gap-2 ">
                        <button href="/"
                                className="w-1/2 hidden text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">
                            Welcome, {userName}!
                        </button>
                        <button href="/"
                                className="w-1/2 p-2 hidden text-sm font-medium text-white bg-yellow-500 rounded-2xl lg:block"
                                onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                )}

            </div>
            {isOpen && <SignupModal onClose={closeModal} />}
        </header>

    )
}