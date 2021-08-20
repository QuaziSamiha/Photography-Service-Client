import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const MessageForm = () => {

    const [state, handleSubmit] = useForm("xbjqpzyn");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <>
            {/* <form action="https://formspree.io/f/xbjqpzyn"> */}
            <form onSubmit={handleSubmit}>
                <h3 className='font-medium md:font-bold text-lg md:text-2xl pb-3'>Drop a Message</h3>
                <input className='w-40 md:w-60 outline-none	bg-green-200 text-green-900 p-2 my-1 md:my-2 text-sm md:text-lg rounded' type="text" placeholder='Your Name' /> 
                <input className='w-40 md:w-60 outline-none	bg-green-200 text-green-900 p-2 my-1 md:my-2 text-sm md:text-lg rounded' type="email" id='email' name='email' placeholder='Your Email' />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /> 
                <textarea className='w-40 md:w-60 outline-none bg-green-200 text-green-900 p-2 my-1 md:my-2 text-sm md:text-lg rounded' name="message" id="message" cols="30" rows="8" placeholder='write message...'></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <div className='w-40 md:w-60 ml-5 bg-green-200 font-semibold text-green-900 p-1 my-1 md:my-2 text-sm md:text-lg rounded hover:bg-green-100'>
                    <button className=' font-bold' type="submit" disabled={state.submitting}>
                        Send
                    </button>
                </div>
            </form>
        </>
    );
};

export default MessageForm;