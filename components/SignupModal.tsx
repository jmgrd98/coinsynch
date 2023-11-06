'use client'

import {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import User from "@/models/User";

interface SignUpModalProps {
    onClose: Function,
    onSignup?: Function
}

export default function SignupModal({onClose, onSignup}: SignUpModalProps) {


    const [newUser, setNewUser] = useState<any>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [checked, setChecked] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [isSignInForm, setIsSignInForm] = useState(false);

    function handleChange(e: any) {
        const {name, value} = e.target;

        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleCheck(e: any) {
        setChecked((prevChecked) => !prevChecked);
        setFormValid((prevFormValid) => !prevFormValid);
    }

    function handleSubmit(e: any, name: string, value: string) {
        e.preventDefault();


        if (newUser.name === '' || newUser.email === '' || newUser.password === '' || newUser.confirmPassword === '') {
            toast.warn('Please fill in all fields!');
            return;
        }

        if (!newUser.email.includes('@', '.gmail', '.com', '.net', '.org', '.edu', '.gov', '.mil', '.hotmail', '.yahoo', '.aol', '.msn', '.live', '.outlook', '.icloud', '.me')) {
            toast.warn('Please enter a valid email address!');
            return;
        }

        if (newUser.password !== newUser.confirmPassword) {
            toast.warn('Passwords do not match!');
            return;
        }

        if (!formValid) {
            toast.warn('Form is invalid!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const newUserList = [...users, newUser];
        localStorage.setItem('users', JSON.stringify(newUserList));

        console.log('User created successfully');
        console.log(newUserList);
        onClose();
    }

    async function login(e: any) {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find((user: any) => user.email === newUser.email && user.password === newUser.password);

        if (!user) {
            toast.warn('Invalid email or password!');
            return;
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        onClose();


        window.location.href = '/dashboard';

        toast.success('Logged in successfully!');
    }

    function handleOverlayClick(e: any) {
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

            <form
                className="fixed z-20 flex flex-col p-5 items-center rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <label className="text-3xl text-gray-500">
                    {isSignInForm ? 'Sign in to' : 'Sign up to'}{' '}
                    <span className="text-yellow-500 font-bold">Coin</span>
                    <span className="text-gray-500 font-bold">Synch</span>
                </label>

                {!isSignInForm && (
                    <>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className='w-full p-2 mt-5 border-2 rounded border-gray-300'
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className='w-full p-2 mt-5 border-2 rounded border-gray-300'
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='w-full p-2 mt-5 border-2 rounded border-gray-300'
                    onChange={handleChange}
                    required
                />

                {!isSignInForm && (
                    <>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className='w-full p-2 mt-5 border-2 rounded border-gray-300'
                            onChange={handleChange}
                            required
                        />
                    </>
                )}

                <div className='flex items-center gap-1 mt-2'>
                    <input
                        type="checkbox"
                        id="termsCheckbox"
                        className="checked:bg-yellow-500"
                        checked={checked}
                        onChange={handleCheck}
                        required
                    />
                    <label htmlFor="termsCheckbox" className="text-gray-500 cursor-pointer">
                        I have read and accept the
                        <span className="font-bold cursor-pointer">Privacy Policy</span> and the
                        <span className="font-bold cursor-pointer">Terms of User Signup.</span>
                    </label>
                </div>

                <button
                    className={`${
                        formValid ? 'bg-yellow-500 cursor-pointer' : 'bg-gray-500'
                    } p-4 text-white font-bold rounded-3xl w-full mt-5`}
                    disabled={!formValid}
                    onClick={isSignInForm ? login : handleSubmit}
                >
                    {isSignInForm ? 'Sign in' : 'Sign up'}
                </button>

                <div className="flex gap-1">
                    <p className="text-gray-500">
                        {isSignInForm ? "Don't have an account?" : 'Already have an account?'}
                    </p>
                    <span
                        className="text-gray-500 font-bold cursor-pointer"
                        onClick={() => setIsSignInForm((prev) => !prev)}
                    >
            {isSignInForm ? 'Sign up' : 'Sign in'}
          </span>
                    <p className="text-gray-500">
                        to <span className="font-bold text-yellow-500">Coin</span>
                        <span className="font-bold">Synch</span>
                    </p>
                </div>
            </form>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
