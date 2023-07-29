'use client'

import Image from 'next/image'
import image from '../public/assets/images/image.png'
import {useState} from "react";
import SignupModal from "@/components/SignupModal";
import TopCryptos from "@/components/TopCryptos";
import Newsletter from "@/components/Newsletter";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {


    return (
        <section className='flex'>
            <Sidebar className='w-1/4'/>

            <main className='bg-gray-200 w-full p-10'>
                <h1>Dashboard</h1>
            </main>

        </section>
    )
}
