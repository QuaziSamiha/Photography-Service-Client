import { faAddressCard, faListAlt, faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='bg-green-900 text-white h-screen w-2/3 md:w-2/4 lg:w-1/4 py-20 my-20'>
            <div className='text-sm md:text-base mx-5 lg:mx-20 my-3 p-3'>
                <FontAwesomeIcon icon={faUserPlus} />
                <Link to='/addAdmin' className='ml-3 hover:text-green-100 hover:underline'>Add Admin</Link>
            </div>
            <div className='text-sm md:text-base mx-5 lg:mx-20 my-3 p-3'>
                <FontAwesomeIcon icon={faAddressCard} />
                <Link to='/customerDetail' className='ml-3 hover:text-green-100 hover:underline'>Customer Details</Link>
            </div>
            <div className='text-sm md:text-base mx-5 lg:mx-20 my-3 p-3'>
                <FontAwesomeIcon icon={faPlusSquare} />
                <Link to='/addService' className='ml-3 hover:text-green-100 hover:underline'>Add Service</Link>
            </div>
            <div className='text-sm md:text-base mx-5 lg:mx-20 my-3 p-3'>
                <FontAwesomeIcon icon={faListAlt} />
                <Link to='/allServices' className='ml-3 hover:text-green-100 hover:underline'>All Services</Link>
            </div>
        </div>
    );
};

export default AdminSidebar;