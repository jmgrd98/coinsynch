'use client'

import Image from 'next/image'
import Header from "@/components/Header";

export default function Home() {
  return (
    <section className='p-10 flex flex-col gap-5 w-1/2'>
        <h1 className='font-bold text-yellow-500 text-5xl'>Lorem ipsum dolor sit amet, consectetur</h1>
        <p className='text-gray-600 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

      <button className='bg-yellow-500 p-4 text-white font-bold rounded-3xl w-1/2'>SIGN UP NOW -></button>

        <div className='flex gap-5'>

          <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>Cryptos</span>
          <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>NFTs</span>
          <span className='bg-opacity-20 rounded bg-yellow-500 text-yellow-500 p-3'>Games</span>

        </div>
    </section>
  )
}
