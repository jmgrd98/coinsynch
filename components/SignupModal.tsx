'use client'

import {useState} from "react";
import '../styles/global.css'

export default function SignupModal({onClose}: {onClose: () => void}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setName(e.target.value)
    }


    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center"
                onClick={onClose}
            ></div>
        <form className='fixed z-20 flex flex-col p-5 items-center border border-1 border-gray-500 rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-2xl text-gray-400'>Sign up to <span className='text-yellow-500'>Coin</span><span className='font-bold'>Synch</span></h1>

            <input type='text' placeholder='Name' className='w-full p-2 mt-5 border-1 border-gray-500 rounded' onClick={handleChange}/>
            <input type='text' placeholder='Email' className='w-full p-2 mt-5 border-1 border-gray-500 rounded'/>
            <input type='password' placeholder='Password' className='w-full p-2 mt-5 border-1 border-gray-500 rounded'/>
            <input type='password' placeholder='Confirm password' className='w-full p-2 mt-5 border-1 border-gray-500 rounded'/>

            <div className='flex gap-1'>
            <input type='checkbox' />
            <p>I have read and accept the <span>Privacy Policy</span> and <span>Terms of User Signup.</span></p>
            </div>

            <button className='bg-yellow-500 p-4 text-white font-bold rounded-3xl w-full mt-5'>Sign up</button>

            <div className='flex gap-1'>
                <p className='text-gray-500'>Already have an account?</p>
                <span className='text-gray-500 font-bold'>Sign in</span>
                <p className='text-gray-500'>to <span className='font-bold text-yellow-500'>Coin</span><span className='font-bold'>Synch</span></p>
            </div>
        </form>
        </>
    )
}