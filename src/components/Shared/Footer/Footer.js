import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Contact from './Contact';
import MessageForm from './MessageForm';
import Social from './Social';

const Footer = () => {

    var year = new Date();
    return (
        <section className='bg-green-900 text-white text-center box-border pt-20'>
            <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8'>
                <div className='w-60 sm:w-80 p-5'>
                    <Contact />
                </div>
                <div className='w-60 sm:w-80 p-5'>
                    <Social />
                </div>
                <div className='w-60 text-sm md:text-lg sm:w-80 p-5'>
                    <MessageForm />
                </div>
            </div>
            <footer className='text-white text-center text-xs pb-2 pt-20'>
                <FontAwesomeIcon icon={faCopyright} /> Copyright {year.getFullYear()}, Photography Service. All Rights Reserved.
            </footer>
        </section>
    );
};

export default Footer;