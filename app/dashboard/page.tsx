'use client'

import Image from 'next/image'
import image from '../public/assets/images/image.png'
import {useState} from "react";
import SignupModal from "@/components/SignupModal";
import TopCryptos from "@/components/TopCryptos";
import Newsletter from "@/components/Newsletter";
import Sidebar from "@/components/Sidebar";
import balanceIcon from '../../public/assets/icons/balance-icon.svg'
import walletIcon from '../../public/assets/icons/wallet-icon.svg'

export default function Dashboard() {

    const [balance, setBalance] = useState(423432);


    return (
        <section className='flex'>
            <Sidebar className='w-1/4 '/>

            <main className='bg-gray-100 w-full p-10 '>

                <section className='flex gap-10'>
                    <section className='bg-white w-1/2 rounded shadow flex justify-between'>
                        <div className='p-5 flex gap-3'>
                            <Image src={balanceIcon} alt='Balance icon' width={65} height={65}
                                   className='bg-yellow-100 rounded-3xl p-3'/>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-gray-500 text-xl'>Balance in US$</h3>
                                <p className='text-gray-300'>(approximately)</p>
                            </div>
                        </div>

                        <div className='bg-yellow-100 font-bold text-gray-700 text-xl p-3 w-1/3 flex items-center justify-center'>
                            $ {balance}
                        </div>
                    </section>

                    <section className='bg-white w-1/4 p-5 rounded shadow'>
                        <p className='text-gray-500'>Daily variation</p>

                    </section>
                    <section className='bg-white w-1/4 p-5 rounded shadow'>
                        <div className='flex flex-col gap-2'>
                        <p className='text-gray-500 font-bold'>NFT's NEWS</p>
                            <p className='text-gray-300'>New ElephantX NFT to be launched!</p>
                            <p className='text-yellow-400'>Read more +</p>
                        </div>
                    </section>
                </section>


                <section className='flex p-5 bg-white mt-10 rounded-2xl'>
                    <div className='flex gap-3 items-center'>
                    <Image src={walletIcon} alt='Wallet icon' width={50} height={50} />
                    <h2 className='text-2xl font-bold text-gray-500'>My Wallet</h2>
                    </div>
                </section>
            </main>

        </section>
    )
}
