import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);

        const serviceDetail = {
            serviceTitle: data.title,
            serviceDescription: data.description,
            servicePrice: data.price
        }

        console.log('service detail : ', serviceDetail);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceDetail)
        })
            .then(res => {
                console.log(res);
                console.log('data store successfully');
            })
    };

    return (
        <section className='m-5 md:m-20'>
            <h1 className='my-20 text-center text-green-900 font-extrabold text-lg md:text-4xl'>New Service Detail</h1>
            <div className='border border-4 border-green-700 rounded shadow-2xl m-2 md:m-20'>
                <form className='p-8' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-green-700'><small>Add New Service Image</small></label>
                    <input className='w-full p-2 my-2 shadow-lg outline-none text-green-700' type="file" name="photo" /> <br />

                    <input className='w-full p-2 my-2 shadow-lg outline-none text-green-700' placeholder='Service Title' type='text' {...register('title', { required: true })} /> <br />
                    {errors.title && <span>This field is required</span>}

                    <textarea className='w-full p-2 my-2 shadow-lg outline-none text-green-700' placeholder='Service Description...' cols="30" rows="5" {...register("description", { required: true })} /> <br />
                    {errors.description && <span>This field is required</span>}

                    <input className='w-full p-2 my-2 shadow-lg outline-none text-green-700' placeholder='Service Price' type='text' {...register('price', { required: true })} /> <br />
                    {errors.price && <span>This field is required</span>}

                    <input className='w-full p-2 my-2 shadow-lg outline-none text-white font-semibold bg-green-900 rounded' type="submit" value='Add Service' />
                </form>
                <Link to='/dashboard'>
                    <button className='bg-white text-green-700 border shadow-lg outline-none text-green-700 m-3 ml-8 px-6 py-2 rounded'>Back</button>
                </Link>
            </div>
        </section>
    );
};

export default AddService;