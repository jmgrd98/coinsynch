'use client'

import Image from 'next/image'
import {useEffect, useState} from "react";
import Sidebar from "@/components/Sidebar";
import balanceIcon from '../../public/assets/icons/balance-icon.svg'
import walletIcon from '../../public/assets/icons/wallet-icon.svg'
import elephantx from '../../public/assets/images/elephantx.svg'
import grayWalletIcon from '../../public/assets/icons/gray-wallet.svg'
import AddCryptoModal from "@/components/AddCryptoModal";
import axios from "axios";

export default function Dashboard() {

    const cryptoIconsApiBaseUrl = 'https://cryptoicons.org/api/icon';
    const [cryptoIcon, setCryptoIcon] = useState('');

    const [balance, setBalance] = useState(423432);

    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function fetchCryptoIcon() {
        try{
            const response = await axios.get(`${cryptoIconsApiBaseUrl}/btc/50`);
            setCryptoIcon(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCryptoIcon();
    }, []);

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

                        <div
                            className='bg-yellow-100 font-bold text-gray-700 text-3xl p-3 w-1/3 flex items-center justify-center'>
                            $ {balance}
                        </div>
                    </section>

                    <section className='bg-white w-1/4 p-5 rounded shadow'>
                        <p className='text-gray-500'>Daily variation</p>

                        {cryptoIcon && <Image src={cryptoIcon} alt='Crypto icon' width={50} height={50}/>}

                    </section>

                    <section className='bg-white w-1/4 flex rounded shadow'>
                        <div className='flex p-3 flex-col gap-2'>
                            <p className='text-gray-500 font-bold'>NFT's NEWS</p>
                            <p className='text-gray-300'>New ElephantX NFT to be launched!</p>
                            <p className='text-yellow-400'>Read more +</p>
                        </div>

                        <div>
                            <Image src={elephantx} alt='ElephantX NFT image' width={200} height={200}/>
                        </div>
                    </section>

                </section>


                <section className='flex gap-10 mt-10 flex-col bg-white'>
                    <section className='flex p-5 rounded-2xl'>
                        <div className='flex gap-3 items-center border-b p-3 border-b-gray-200 justify-between w-full'>
                            <div className='flex gap-3 items-center'>
                                <Image src={walletIcon} alt='Wallet icon' width={50} height={50}/>
                                <h2 className='text-2xl font-bold text-gray-500'>My Wallet</h2>
                            </div>

                            <button className='bg-yellow-500 text-white rounded-3xl p-2' onClick={openModal}>+ Add Crypto</button>
                        </div>
                    </section>

                    {isOpen && <AddCryptoModal onClose={closeModal} />}

                    <section className='flex flex-col gap-5 m-auto p-10 items-center text-center'>
                        <div className='bg-gray-100 w-1/2 p-5 rounded-3xl flex gap-5'>
                            <Image src={grayWalletIcon} alt='Empty wallet icon' width={100} height={100}/>
                        </div>

                        <h3 className='text-gray-500 font-bold text-2xl'>Nothing here yet...</h3>
                        <p className='text-gray-500'>Add a crypto and start earning.</p>
                    </section>

                </section>
            </main>

        </section>
    )
}
