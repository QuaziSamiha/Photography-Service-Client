import { faFacebookSquare, faInstagramSquare, faWhatsappSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Social = () => {
    return (
        <>
            <h3 className='font-medium md:font-bold text-lg md:text-2xl pb-3'>Social</h3>
            <div className='bg-green-200 text-green-900 p-1 my-4 md:my-6 text-lg md:text-2xl rounded hover:bg-green-100'>
                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faFacebookSquare} >
                    <a href="https://www.facebook.com/quazi.samiha.7" target="_blank" rel="noreferrer"> </a>
                </FontAwesomeIcon>
            </div>
            <div className='bg-green-200 text-green-900 p-1 my-4 md:my-6 text-lg md:text-2xl rounded hover:bg-green-100'>
                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faWhatsappSquare} >
                    <a href="https://wa.me/8801728618332" target="_blank" rel="noreferrer"> </a>
                </FontAwesomeIcon>
            </div>
            <div className='bg-green-200 text-green-900 p-1 my-4 md:my-6 text-lg md:text-2xl rounded hover:bg-green-100'>
                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faInstagramSquare} />
            </div>
            <div className='bg-green-200 text-green-900 p-1 my-4 md:my-6 rounded hover:bg-green-100'>
                <FontAwesomeIcon className='text-xl md:text-2xl' icon={faYoutubeSquare} />
            </div>
        </>
    );
};

export default Social;