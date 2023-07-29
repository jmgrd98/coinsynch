'use client'

import {useState} from 'react';

export default function AddCryptoModal({onClose}: { onClose: () => void }) {

    const [selectedCrypto, setSelectedCrypto] = useState('');
    const [quantity, setQuantity] = useState(0);

    function handleOverlayClick(e) {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    }

    function handleSelect(e) {
        setSelectedCrypto(e.target.value);
    }

    function handleChange(e) {
        setQuantity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (selectedCrypto === '') {
            console.log('Please select a crypto');
            return;
        }

        console.log('Crypto added successfully');
        console.log(selectedCrypto, quantity);
        onClose();
    }

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center modal-overlay"
                onClick={handleOverlayClick}
            ></div>

            <form className='fixed z-20 flex flex-col p-5 items-center justify-evenly rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/2'>
                <h2 className='text-2xl font-bold text-gray-500'>Add Crypto</h2>
                <select className='bg-gray-100 p-2 rounded mt-5 w-full' onChange={handleSelect}>
                    <option value="Select" className='text-gray-500'>Choose Crypto</option>
                    <option value="BTC" className='text-gray-500'>BTC</option>
                    <option value="ETH" className='text-gray-500'>ETH</option>
                    <option value="ADA" className='text-gray-500'>ADA</option>
                    <option value="BNB" className='text-gray-500'>BNB</option>
                    <option value="USDT" className='text-gray-500'>USDT</option>
                </select>

                <input type={'number'} placeholder={'0.0'} className='bg-gray-100 p-2 rounded mt-5 w-full' onChange={handleChange} />

                <button className='bg-yellow-500 text-white p-2 rounded-3xl mt-5 w-full' onClick={handleSubmit}>Add Crypto</button>
            </form>
        </>
    );
}
