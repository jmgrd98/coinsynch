'use client'

import Image from "next/image";
import wallet from '../public/assets/icons/wallet-icon.svg'
import exchange from '../public/assets/icons/exchange-icon.svg'
import crypto from '../public/assets/icons/crypto-icon.svg'
import chart from '../public/assets/icons/chart-icon.svg'
import '../styles/global.css'

interface TooltipProps {
    text: string,
    children?: any
}

function Tooltip({text, children}: TooltipProps) {
    return (
        <div className='tooltip text-white' data-tooltip={text}>
            {children}
        </div>
    );
}

export default function Sidebar() {

    return (
        <section className='flex flex-col gap-5 border-r-gray-500 p-5'>
            <Tooltip text='Wallet'>
                <Image src={wallet} alt='Wallet icon' width={50} height={50}/>
            </Tooltip>
            <Tooltip text='Exchange'>
                <Image src={exchange} alt='Exchange icon' width={50} height={50}/>
            </Tooltip>
            <Tooltip text='Crypto'>
                <Image src={crypto} alt='Crypto icon' width={50} height={50}/>
            </Tooltip>
            <Tooltip text='Chart'>
                <Image src={chart} alt='Chart icon' width={50} height={50}/>
            </Tooltip>
        </section>
    )
}