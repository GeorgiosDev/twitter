import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import cover from "../assets/images/signup.jpg";

const Signup = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState(null);
const { user, signUp } = UserAuth();
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    if (!email || !password) {
        setError('Please provide both email and password.');
    } else {
        await signUp(email, password);
        navigate('/account');
    }
    } catch (error) {
    setError('An error occurred while signing up. Please try again.');
    }
};

return (
    <>
    <div className='w-full h-screen bg-gradient-to-br from-blue-500 to-purple-500 text-white'>
        <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src={cover}
        alt='/'
        />
        <div className='fixed top-0 left-0 w-full h-screen bg-black opacity-40'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-gray-800 bg-opacity-70 text-white rounded-lg shadow-lg p-8'>
            <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-white mb-6'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col'>
                <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded text-white'
                type='email'
                placeholder='Email'
                autoComplete='email'
                />
                <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded text-white'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
                />
                <button className='bg-blue-500 hover-bg-blue-600 py-3 my-6 rounded font-bold text-white'>
                Sign Up
                </button>
                {error && <p className='text-red-500'>{error}</p>}
                <div className='flex justify-between items-center text-sm text-gray-600'>
                <label className="flex items-center cursor-pointer">
                    <input type='checkbox' className="mr-2 text-gray-400"/>
                    Remember me
                </label>
                <p className="text-blue-400">Need Help?</p>
                </div>
                <p className='py-8'>
                <span className='text-gray-400'>
                    Already subscribed?
                </span>{' '}
                <Link to='/login' className="text-blue-400">Sign In</Link>
                </p>
            </form>
            </div>
        </div>
        </div>
    </div>
    </>
);
};

export default Signup;
