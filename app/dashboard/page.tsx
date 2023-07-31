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
import Crypto from "@/models/Crypto";
import tradeIcon from '../../public/assets/icons/trade-icon.svg';
import TransferModal from "@/components/TransferModal";

export default function Dashboard() {

    const cryptoIconsApiBaseUrl = 'https://cryptoicons.org/api/icon';
    const [cryptoIcon, setCryptoIcon] = useState('');
    const apiKey: string = '41fed9cd-5510-4753-a716-272f97c1bac3';
    const baseUrl: string = 'https://api.coincap.io/v2';

    const [selectedCrypto, setSelectedCrypto] = useState(null);

    const handleSelectedCryptoChange = (crypto: any) => {
        setSelectedCrypto(crypto);
    };

    const [cryptos, setCryptos] = useState([]);

    const [cryptoList, setCryptoList] = useState([]);

    const handleAddCrypto = (newCryptoList: any) => {
        setCryptoList(newCryptoList);
        console.log(newCryptoList);
    };

    async function fetchCoinData() {
        try {
            const response = await axios.get(`${baseUrl}/assets/`);
            setCryptos(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCoinData();
    }, []);

    const [balance, setBalance] = useState(423432);
    const formattedBalance = (balance / 100).toLocaleString('en-US', {maximumFractionDigits: 2});


    const [isOpen, setIsOpen] = useState(false);
    const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    // async function fetchCryptoIcon() {
    //     try {
    //         const response = await axios.get('https://coinicons-api.vercel.app/api/icon/btc', {
    //             responseType: 'blob',
    //         });
    //
    //         const reader = new FileReader();
    //         reader.readAsDataURL(response.data);
    //
    //         console.log(reader.result)
    //
    //         reader.onloadend = () => {
    //             setCryptoIcon(reader.result);
    //         };
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    //
    // useEffect(() => {
    //     fetchCryptoIcon();
    // }, []);

    function openTransferModal() {
        setIsTransferModalOpen(true);
    }

    function closeTransferModal() {
        setIsTransferModalOpen(false);
    }

    function trade(crypto: Crypto) {
        // handleSelectedCryptoChange(selectedCrypto);
        openTransferModal();
        console.log('Trade');
        return crypto;
    }

    return (
        <section className='flex'>
            <Sidebar />

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
                            $ {formattedBalance}
                        </div>
                    </section>

                    <section className='bg-white w-1/4 p-5 rounded shadow'>
                        <p className='text-gray-500'>Daily variation</p>

                        {cryptoIcon && <Image src={cryptoIcon} alt='Crypto icon' width={50} height={50}/>}

                    </section>

                    <section className='bg-white w-1/4 flex rounded shadow'>
                        <div className='flex p-3 flex-col gap-2'>
                            <p className='text-gray-500 font-bold'>NFT&apos;s  NEWS</p>
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

                            <button className='bg-yellow-500 text-white rounded-3xl p-2' onClick={openModal}>+ Add
                                Crypto
                            </button>
                        </div>
                    </section>

                    {isOpen && <AddCryptoModal onClose={closeModal} onAddCrypto={handleAddCrypto}/>}
                    {isTransferModalOpen &&
                        <TransferModal
                        onClose={closeTransferModal}
                        // selectedCrypto={selectedCrypto}
                        />}

                    {cryptoList.length > 0 && (
                        <section className='flex flex-col gap-5 items-center text-center w-full'>
                            <table className='w-full'>
                                <thead className='font-normal'>
                                <tr className='text-gray-500  font-normal'>
                                    <th className='p-2 font-normal'>#</th>
                                    <th className='p-2 font-normal '>Crypto</th>
                                    <th className='p-2 font-normal '>Holdings</th>
                                    <th className='p-2 font-normal '>Change</th>
                                    <th className='p-2 font-normal '>Trade</th>
                                </tr>
                                </thead>

                                <tbody>
                                {cryptoList.map((crypto, index) => (
                                    <tr key={index} className={index % 2 == 1 ? 'text-gray-500 font-normal' : 'text-gray-500 font-normal bg-gray-100'}>
                                        <td className='p-2 font-normal'>{index + 1}</td>
                                        <td className='p-2 font-normal'>
                                            <div className='flex items-center justify-center gap-2'>
                                            <Image
                                            src={`https://cryptoicons.org/api/icon/${crypto.symbol.toLowerCase()}/30`}
                                            alt='Crypto icon' width={30} height={30} />
                                            <p className='text-gray-900'>{crypto.name}</p>
                                            <p className='text-gray-500'>{crypto.symbol}</p>
                                            </div>
                                        </td>
                                        <td className='p-2 font-normal flex gap-2 w-full'>
                                            
                                        </td>
                                        <td className='p-2 font-normal flex flex-col'>
                                            <p>US${crypto.priceUsd}</p>
                                            <p className={'text-yellow-500'}>{crypto.qty} {crypto.symbol}</p>
                                        </td>
                                        <td className={crypto.changePercent24Hr < 0 ? 'text-red-700 font-semibold p-2' : 'text-green-700 font-semibold p-2'}>{crypto.changePercent24Hr < 0 ? '' : '+'}{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</td>
                                        <td className='p-2 font-normal'>
                                            <button onClick={trade(crypto)}>
                                                <Image src={tradeIcon} alt='Trade Icon' width={20} height={20}/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </section>
                    )}

                    {cryptoList.length === 0 && (
                        <>
                            <section className='flex flex-col gap-5 m-auto p-10 items-center text-center'>
                                <div className='bg-gray-100 w-1/2 p-5 rounded-3xl flex gap-5'>
                                    <Image src={grayWalletIcon} alt='Empty wallet icon' width={100} height={100}/>
                                </div>

                                <h3 className='text-gray-500 font-bold text-2xl'>Nothing here yet...</h3>
                                <p className='text-gray-500'>Add a crypto and start earning.</p>
                            </section>
                        </>
                    )}

                </section>
            </main>

        </section>
    )
}
