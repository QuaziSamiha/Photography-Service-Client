import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const toggleButton = () => {
        if (toggle === false) {
            setToggle(true);
        }
        else {
            setToggle(false);
        }
    }

    return (
        <nav className='bg-green-900 shadow-lg leading-10 h-12 md:h-auto'>
            <div className='container mx-auto'>
                <div className='md:flex justify-between'>
                    <div className='flex justify-between'>
                        {/* side title */}
                        <h3 className='text-green-100 text-xl sm:text-2xl font-bold p-3 ml-3'>Photography Service</h3>

                        {/* toggle button */}
                        <button onClick={() => toggleButton()} className='sm:invisible text-white shadow-inner px-3 py-1 mx-5 my-2 text-lg hover:bg-green-100 hover:text-green-900 rounded-md'>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* nav links */}
                    {
                        toggle === true ?
                            <ul className='-mt-3 visible md:invisible bg-green-900 text-white sm:self-center sm:text-lg font-bold'>
                                <li className='md:inline-block p-2'>
                                    <Link className='p-2 m-3 hover:bg-green-100 hover:text-green-900 rounded-md' to='/home'>Home</Link>
                                </li>
                                <li className='md:inline-block p-2'>
                                    <Link className='p-2 m-3 hover:bg-green-100 hover:text-green-900 rounded-md' to='/dashboard'>Dashboard</Link>
                                </li>
                                <li className='md:inline-block p-2'>
                                    <Link className='p-2 m-3 bg-green-200 text-green-700 hover:bg-green-100 hover:text-green-900 rounded-md' to='/signIn'>Sign in</Link>
                                </li>
                            </ul>
                            :
                            <span></span>
                    }

                    <ul className='text-white sm:text-lg font-bold invisible sm:visible sm:self-center'>
                        <li className='md:inline-block p-2'>
                            <Link className='p-2 m-3 hover:bg-green-100 hover:text-green-900 rounded-md' to='/home'>Home</Link>
                        </li>
                        <li className='md:inline-block p-2'>
                            <Link className='p-2 m-3 hover:bg-green-100 hover:text-green-900 rounded-md' to='/dashboard'>Dashboard</Link>
                        </li>
                        <li className='md:inline-block p-2'>
                            <Link className='p-2 m-3 bg-green-200 text-green-700 hover:bg-green-100 hover:text-green-900 rounded-md' to='/signIn'>Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;