'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

export default function Header() {
    return (
        <header className="flex items-center justify-between w-full h-16 px-8 bg-white border-b border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
            <div className="flex items-center justify-between w-full max-w-5xl">
                <div className="flex items-center justify-between w-full">
                    <a href="/" className="flex items-center justify-between">
                        <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">Coin<span className='text-gray-500'>Synch</span></h1>
                        <img src="/logo.png" alt="logo" className="w-8 h-8" />
                    </a>
                    <nav className="hidden ml-8 space-x-8 lg:block">
                        <a href="/create" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">Create</a>
                        <a href="/explore" className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300">Explore</a>
                    </nav>
                </div>
                <div className="flex items-center justify-between">
                    <a href="/login" className="hidden text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 lg:block">Login</a>
                    <a href="/signup" className="hidden ml-4 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 lg:block">Sign Up</a>
                    <button className="flex items-center justify-center ml-4 text-gray-900 dark:text-gray-100 lg:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>

    )
}