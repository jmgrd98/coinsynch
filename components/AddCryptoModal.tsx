'use client'

import {useState} from 'react';

export default function AddCryptoModal({onClose}: { onClose: () => void }) {

    function handleOverlayClick(e) {
        if (e.target.classList.contains('modal-overlay')) {
            onClose();
        }
    }

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center modal-overlay"
                onClick={handleOverlayClick}
            ></div>

            <form className='fixed z-20 flex flex-col p-5 items-center rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h2 className='text-2xl font-bold'>Add Crypto</h2>
                <select className='bg-gray-100 p-2 rounded mt-5'>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="ADA">ADA</option>
                    <option value="BNB">BNB</option>
                    <option value="USDT">USDT</option>
                </select>
            </form>
        </>
    );
}
