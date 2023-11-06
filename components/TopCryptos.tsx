'use client'

import axios from "axios";
import {useEffect, useState} from "react";
import Image from "next/image";

export default function TopCryptos() {

    const apiKey: string = '41fed9cd-5510-4753-a716-272f97c1bac3';
    const baseUrl: string = 'https://api.coincap.io/v2';

    const [cryptos, setCryptos] = useState([]);

    const [viewMore, setViewMore] = useState(false);

    function viewMoreCryptos() {
        setViewMore(!viewMore);
    }

    async function fetchCoinData() {
        try {
            const response = await axios.get(`${baseUrl}/assets/`);
            setCryptos(response.data.data);
        } catch (error: any) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCoinData();
    }, []);


    return (
        <section className='flex flex-col items-center p-10'>
            <h2 className='text-gray-500 font-bold text-3xl '>Top Cryptos</h2>

            <table className='w-full mt-10'>
                <thead className='font-normal'>
                <tr className='text-gray-500  font-normal'>
                    <th className='p-2 font-normal '>#</th>
                    <th className='p-2 font-normal '>Crypto</th>
                    <th className='p-2 font-normal '>Price</th>
                    <th className='p-2 font-normal '>Change</th>
                    <th className='p-2 font-normal '>Trade</th>
                </tr>
                </thead>

                <tbody className='text-center'>
                {cryptos.slice(0, viewMore ? cryptos.length : 5).map((crypto: any, index: number) => (
                    <tr className='text-gray-500' key={index}>
                        <td className='p-5 text-center'>{crypto.rank}</td>
                        <td className='flex gap-2 mt-5 justify-center'>
                            <Image src={`https://cryptoicons.org/api/icon/${crypto.symbol.toLowerCase()}/20`} alt='Crypto Icon' width={20} height={20}/>
                            <p>{crypto.name}</p>
                            <p>{crypto.symbol}</p>
                        </td>
                        <td>US$ {crypto.priceUsd}</td>
                        <td className={crypto.changePercent24Hr < 0 ? 'text-red-700 font-semibold p-2' : 'text-green-700 font-semibold p-2'}>{crypto.changePercent24Hr < 0 ? '' : '+'}{parseFloat(crypto.changePercent24Hr).toFixed(2)}%</td>
                        <td>
                            <button className='bg-green-700 text-white text-center rounded-3xl p-3 w-full'>Buy</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button className='bg-transparent text-yellow-500 mt-5' onClick={viewMoreCryptos}>{!viewMore ? 'View More +' : 'View Less -'}</button>
        </section>
    )
}