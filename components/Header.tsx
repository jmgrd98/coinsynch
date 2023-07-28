'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import '../app/globals.css'
import logo from '../public/assets/images/logo.png'

export default function Header() {
    return (
        <header className="flex items-center justify-between w-full h-16 px-4 bg-white border-b border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">

            <div className="flex items-center justify-between w-full max-w-5xl">
                <div className="flex items-center">
                    <a href="/" className="flex items-center justify-between">
                        <h1 className="ml-2 text-xl font-bold text-yellow-500">Coin<span className='text-gray-500'>Synch</span></h1>
                        <Image src={logo} alt="CoinSynch" width={21} height={21}/>
                    </a>
                </div>

                <div className="flex items-center justify-start w-1/5 p-5">
                    <nav className="flex items-center self-start justify-start w-full max-w-5xl">
                        <a href="/" className="w-1/2 hidden text-sm text-gray-400 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">About Us</a>
                        <a href="/" className="w-1/2 hidden text-sm text-gray-400 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">Top Cryptos</a>
                    </nav>
                </div>


                <div className='flex items-center'>

                </div>

                <div className="flex items-center justify-between w-1/3 p-5">
                    <button href="/" className="w-1/2 hidden text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">Sign in</button>
                    <button href="/" className="w-1/2 p-2 hidden text-sm font-medium text-white bg-yellow-500 rounded-2xl lg:block">Sign Up</button>
                </div>

            </div>
        </header>

    )
}