import React from 'react';

const Contact = () => {
    return (
        <>
            <h3 className='font-medium md:font-bold text-lg md:text-2xl pb-3'>Contact</h3>
            <div className='py-1'>
                <h6 className='font-semibold text-sm md:text-lg'>Email</h6>
                <p className='font-light text-xs sm:text-sm'>photography@gmail.com</p>
            </div>
            <div className='py-1'>
                <h6 className='font-semibold text-sm md:text-lg'>Telephone</h6>
                <p className='font-light text-xs sm:text-sm'>
                    <a href="tel:+8801717013107" target="_blank" rel="noreferrer">
                        +8801717013107
                    </a>
                </p>
            </div>
            <div className='py-1'>
                <h6 className='font-semibold text-sm md:text-lg'>Address</h6>
                <p className='font-light text-xs sm:text-sm'>108/3 Upashahar <br /> Rajshahi, Bangladesh</p>
            </div>
            <div className='py-1'>
                <h6 className='font-semibold text-sm md:text-lg'>Hours</h6>
                <p className='font-light text-xs sm:text-sm'>M - F 8:00am - 8:00pm PST</p>
            </div>
        </>
    );
};

export default Contact;