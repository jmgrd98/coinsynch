'use client'

import {useEffect, useState} from 'react';
import axios from "axios";

export default function AddCryptoModal({onClose}: { onClose: () => void }) {

    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [quantity, setQuantity] = useState(0);
    // const [selectedCryptoAndQuantity, setSelectCryptoAndQuantity] = useState({
    //     name: selectedCrypto,
    //     qty: quantity
    // });

    const apiKey: string = '41fed9cd-5510-4753-a716-272f97c1bac3';
    const baseUrl: string = 'https://api.coincap.io/v2';

    const [cryptos, setCryptos] = useState([]);

    function handleOverlayClick(e) {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    }

    function handleSelect(e) {
        setSelectedCrypto(e.target.value);
    }

    function handleChange(e: any) {
        setQuantity(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault();

        if (selectedCrypto === '') {
            console.log('Please select a crypto');
            return;
        }

        addCrypto(selectedCrypto, quantity);
        onClose();
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

    function addCrypto(name: string, quantity: number) {


        const cryptoList = JSON.parse(localStorage.getItem('cryptos')) || [];

        const newCrypto = {
            name: name,
            qty: quantity,
        };

        cryptoList.push(newCrypto);

        localStorage.setItem('cryptos', JSON.stringify(cryptoList));
        console.log(cryptoList);
    }
    

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center modal-overlay"
                onClick={handleOverlayClick}
            ></div>

            <form
                className='fixed z-20 flex flex-col p-5 items-center justify-evenly rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/2'>
                <h2 className='text-2xl font-bold text-gray-500'>Add Crypto</h2>
                <select className='bg-gray-100 p-2 rounded mt-5 w-full' onChange={handleSelect}>
                    <option value={''}>Select a crypto</option>
                    {cryptos.map((crypto, index) => (
                        <option key={index} value={crypto.symbol}>{crypto.name} ({crypto.symbol})</option>
                    ))}
                </select>

                <input type={'number'} placeholder={'0.0'} className='bg-gray-100 p-2 rounded mt-5 w-full'
                       onChange={handleChange} min={0}/>

                <button className='bg-yellow-500 text-white p-2 rounded-3xl mt-5 w-full' onClick={handleSubmit}>Add
                    Crypto
                </button>
            </form>
        </>
    );
}
