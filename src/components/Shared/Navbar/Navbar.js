import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='bg-indigo-500 shadow-lg'>
            <div className='container mx-auto'>
                <div className='sm:flex justify-around'>
                    {/* side title */}
                    <h3 className='text-white text-3xl font-bold p-3'>Photography Service</h3>
                    {/* nav links */}
                    <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>
                        <li className='sm:inline-block'>
                            <Link className='p-3 hover:text-white' to='/home'>Home</Link>
                        </li>
                        <li className='sm:inline-block'>
                            <Link className='p-3 hover:text-white' to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='sm:inline-block'>
                            <Link className='p-3 hover:text-white' to='/signIn'>Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;