'use client'

import Image from 'next/image'
import image from '../public/assets/images/image.png'
import {useState} from "react";
import SignupModal from "@/components/SignupModal";
import TopCryptos from "@/components/TopCryptos";
import Newsletter from "@/components/Newsletter";
import Sidebar from "@/components/Sidebar";
import balanceIcon from '../../public/assets/icons/balance-icon.svg'

export default function Dashboard() {

    const [balance, setBalance] = useState(423432);


    return (
        <section className='flex'>
            <Sidebar className='w-1/4'/>

            <main className='bg-gray-100 w-full p-10'>

                <section className='flex gap-10'>
                    <section className='bg-white w-1/3 rounded shadow flex gap-3'>
                        <div className='p-5'>
                            <Image src={balanceIcon} alt='Balance icon' width={65} height={65}
                                   className='bg-yellow-100 rounded-3xl p-3'/>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-gray-500 text-2xl'>Balance in US$</h3>
                                <p className='text-gray-300'>(approximately)</p>
                            </div>
                        </div>

                        <div className='bg-yellow-100'>
                            <h3 className='text-gray-700 text-2xl'>US$ {balance}</h3>
                        </div>
                    </section>
                    
                    <section className='bg-white w-1/3 p-5 rounded shadow'></section>
                    <section className='bg-white w-1/3 p-5 rounded shadow'></section>
                </section>
            </main>

        </section>
    )
}
