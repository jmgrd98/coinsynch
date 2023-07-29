'use client'

import Image from "next/image";
import wallet from '../public/assets/icons/wallet-icon.svg'
import exchange from '../public/assets/icons/exchange-icon.svg'
import crypto from '../public/assets/icons/crypto-icon.svg'
import chart from '../public/assets/icons/chart-icon.svg'

export default function Sidebar() {
    return (
        <section className='flex flex-col gap-5 border-r-gray-500 p-5'>
            <Image src={wallet} alt='Wallet icon' width={50} height={50} />
            <Image src={exchange} alt='Exchange icon' width={50} height={50} />
            <Image src={crypto} alt='Crypto icon' width={50} height={50} />
            <Image src={chart} alt='Chart icon' width={50} height={50} />
        </section>
    )
}