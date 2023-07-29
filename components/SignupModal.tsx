import {useState} from 'react';

export default function SignupModal({onClose}: { onClose: () => void }) {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [checked, setChecked] = useState(false);
    const [isSignInForm, setIsSignInForm] = useState(false);
    const [showErrors, setShowErrors] = useState(false);

    const initialErrors = {
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    };
    const [errors, setErrors] = useState(initialErrors);

    function handleChange(e) {
        const {name, value} = e.target;

        setNewUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));

        if (showErrors) {
            validateForm(name, value);
        }

        // validateForm(name, value);
    }

    function handleCheck(e) {
        setChecked((prevChecked) => !prevChecked);
        if (showErrors) {
            validateForm(name, checked);
        }
        // validateForm('checked', !checked);
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

        setShowErrors(true);

        if (!checked) {
            console.log('Please fill out all fields and ensure passwords match.');
            return;
        }

        console.log('User created successfully');
        onClose();
    }

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
            {/* ... */}
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
                        {/* Display these inputs only on sign-up view */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className={`w-full p-2 mt-5 border-2 rounded ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            onChange={handleChange}
                            required
                        />
                        {showErrors && errors.name && <p className="text-red-500">This field is required.</p>}

                    </>
                )}

                {/* Always display these inputs */}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`w-full p-2 mt-5 border-2 rounded ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    onChange={handleChange}
                    required
                />
                {showErrors && errors.email && <p className="text-red-500">This field is required.</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full p-2 mt-5 border-2 rounded ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    onChange={handleChange}
                    required
                />
                {showErrors && errors.password && <p className="text-red-500">This field is required.</p>}

                {!isSignInForm && (
                    <>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className={`w-full p-2 mt-5 border-2 rounded ${
                                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                            onChange={handleChange}
                            required
                        />
                        {showErrors && errors.confirmPassword &&
                            <p className="text-red-500">Passwords do not match.</p>}
                    </>
                )}

                <div class='flex items-center gap-1 mt-2'>
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
                        <span className="font-bold cursor-pointer"> Terms of User Signup.</span>
                    </label>
                </div>
                {showErrors && errors.terms && <p className="text-red-500">Please accept the Terms and Conditions.</p>}

                <button
                    className={`${
                        checked ? 'bg-yellow-500' : 'bg-gray-500'
                    } p-4 text-white font-bold rounded-3xl w-full mt-5`}
                    disabled={!checked}
                    onClick={handleSubmit}
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
        </>
    );
}
