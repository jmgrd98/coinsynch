'use client'

import { useState } from 'react';

export default function SignupModal({ onClose }: { onClose: () => void }) {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [checked, setChecked] = useState(false);

    // Initialize errors state with all fields set to false
    const initialErrors = {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    };
    const [errors, setErrors] = useState(initialErrors);

    function handleChange(e) {
        const { name, value } = e.target;

        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        validateForm(name, value);
    }

    function handleCheck(e) {
        setChecked((prevChecked) => !prevChecked);
        validateForm('checked', !checked);
    }

    function validateForm(fieldName, fieldValue) {
        const formErrors = {
            ...errors,
            checked,
        };

        formErrors[fieldName] = fieldValue.trim() === '';

        if (fieldName === 'confirmPassword') {
            formErrors.confirmPassword = formErrors.password !== fieldValue;
        }

        const isFormValid =
            !formErrors.name &&
            !formErrors.email &&
            !formErrors.password &&
            !formErrors.confirmPassword &&
            formErrors.checked;

        setChecked(isFormValid);
        setErrors(formErrors);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!checked) {
            console.log('Please fill out all fields and ensure passwords match.');
            return;
        }

        console.log('User created successfully');
        onClose();
    }

    return (
        <>
            {/* ... */}
            {/* Rest of your code */}
            {/* ... */}
            <form className="fixed z-20 flex flex-col p-5 items-center border border-1 border-gray-500 rounded bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* ... */}
                {/* Rest of your form code */}
                {/* ... */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`w-full p-2 mt-5 border-2 rounded ${errors.name ? 'border-red-500' : 'border-gray-500'}`}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">This field is required.</p>}

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`w-full p-2 mt-5 border-2 rounded ${errors.email ? 'border-red-500' : 'border-gray-500'}`}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">This field is required.</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full p-2 mt-5 border-2 rounded ${errors.password ? 'border-red-500' : 'border-gray-500'}`}
                    onChange={handleChange}
                />
                {errors.password && <p className="text-red-500">This field is required.</p>}

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={`w-full p-2 mt-5 border-2 rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-500'}`}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p className="text-red-500">Passwords do not match.</p>}

                <div className="flex gap-1 mt-5">
                    <input type="checkbox" onMouseDown={handleCheck} />
                    <p>
                        I have read and accept the <span>Privacy Policy</span> and <span>Terms of User Signup.</span>
                    </p>
                </div>

                <button
                    className={`${
                        checked ? 'bg-yellow-500' : 'bg-gray-500'
                    } p-4 text-white font-bold rounded-3xl w-full mt-5`}
                    disabled={!checked}
                    onClick={handleSubmit}
                >
                    Sign up
                </button>

                <div className="flex gap-1">
                    <p className="text-gray-500">Already have an account?</p>
                    <span className="text-gray-500 font-bold">Sign in</span>
                    <p className="text-gray-500">
                        to <span className="font-bold text-yellow-500">Coin</span>
                        <span className="font-bold">Synch</span>
                    </p>
                </div>
            </form>
        </>
    );
}
