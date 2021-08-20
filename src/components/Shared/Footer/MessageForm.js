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
                <input type="text" placeholder='Your Name' /> <br />
                <input type="email" id='email' name='email' placeholder='Your Email' />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                /> <br />
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Send
                </button>
            </form>
        </>
    );
};

export default MessageForm;