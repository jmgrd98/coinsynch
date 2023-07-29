'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import '../styles/global.css'
import logo from '../public/assets/images/logo.png'
import axios from "axios";

export default function Footer() {

    return (
        <footer
            className="flex items-center justify-between w-full h-16 px-4 bg-white">

            <p className='text-gray-500 justify-self-start'>Copyright 2023 - All right reserved.</p>

            <div className="flex items-center justify-between justify-self-end">
                <div className="flex items-center">
                    <a href="/" className="flex items-center justify-between">
                        <h1 className="ml-2 text-xl font-bold text-yellow-500">Coin<span
                            className='text-gray-500'>Synch</span></h1>
                        <Image src={logo} alt="CoinSynch" width={21} height={21}/>
                    </a>
                </div>
            </div>
        </footer>

    )
}