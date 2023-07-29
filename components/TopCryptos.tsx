'use client'

import axios from "axios";
import {useEffect, useState} from "react";

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
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCoinData();
    }, []);


    return (
        <section className='flex flex-col items-center p-10'>
            <h2 className='text-gray-500 font-bold text-3xl text-center'>Top Cryptos</h2>

            <table className='w-full mt-10'>
                <thead className='font-normal'>
                <tr className='text-gray-500 text-left font-normal'>
                    <th className='p-2 font-normal'>#</th>
                    <th className='p-2 font-normal'>Crypto</th>
                    <th className='p-2 font-normal'>Price</th>
                    <th className='p-2 font-normal'>Change</th>
                    <th className='p-2 font-normal'>Trade</th>
                </tr>
                </thead>

                <tbody>
                {cryptos.slice(0, viewMore ? cryptos.length : 5).map((crypto, index) => (
                    <tr className='text-gray-500 text-left' key={index}>
                        <td className='p-2'>{crypto.rank}</td>
                        <td className='p-2'>{crypto.name} {crypto.symbol}</td>
                        <td className='p-2'>R$ {crypto.priceUsd}</td>
                        <td className='p-2'>{crypto.changePercent24Hr}%</td>
                        <td className='p-2'>Buy</td>
                    </tr>
                ))}
                {/*<tr className='text-gray-500 text-left'>*/}
                {/*    <td className='p-2'>1</td>*/}
                {/*    <td className='p-2'>Bitcoin</td>*/}
                {/*    <td className='p-2'>R$ 300.000,00</td>*/}
                {/*    <td className='p-2'>+ 0.00%</td>*/}
                {/*    <td className='p-2'>Buy</td>*/}
                {/*</tr>*/}
                {/*<tr className='text-gray-500 text-left'>*/}
                {/*    <td className='p-2'>2</td>*/}
                {/*    <td className='p-2'>Ethereum</td>*/}
                {/*    <td className='p-2'>R$ 300.000,00</td>*/}
                {/*    <td className='p-2'>+ 0.00%</td>*/}
                {/*    <td className='p-2'>Buy</td>*/}
                {/*</tr>*/}
                {/*<tr className='text-gray-500 text-left'>*/}
                {/*    <td className='p-2'>3</td>*/}
                {/*    <td className='p-2'>Cardano</td>*/}
                {/*    <td className='p-2'>R$ 300.000,00</td>*/}
                {/*    <td className='p-2'>+ 0.00%</td>*/}
                {/*    <td className='p-2'>Buy</td>*/}
                {/*</tr>*/}
                {/*<tr className='text-gray-500 text-left'>*/}
                {/*    <td className='p-2'>4</td>*/}
                {/*    <td className='p-2'>Binance Coin</td>*/}
                {/*    <td className='p-2'>R$ 300.000,00</td>*/}
                {/*    <td className='p-2'>+ 0.00%</td>*/}
                {/*    <td className='p-2'>Buy</td>*/}
                {/*</tr>*/}
                {/*<tr className='text-gray-500 text-left'>*/}
                {/*    <td className='p-2'>5</td>*/}
                {/*    <td className='p-2'>Tether</td>*/}
                {/*    <td className='p-2'>R$ 300.000,00</td>*/}
                {/*    <td className='p-2'>+ 0.00%</td>*/}
                {/*    <td className='p-2'>Buy</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>

            <button className='bg-transparent text-yellow-500 mt-5' onClick={viewMoreCryptos}>{viewMore ? 'View More +' : 'View Less -'}</button>
        </section>
    )
}