import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Service Title' type='text' {...register('title', { required: true })} /> <br />
                {errors.title && <span>This field is required</span>}

                <textarea placeholder='Service Description' cols="30" rows="5" {...register("description", { required: true })} /> <br />
                {errors.description && <span>This field is required</span>}

                <input placeholder='Service Price' type='text' {...register('price', { required: true })} /> <br />
                {errors.price && <span>This field is required</span>}

                <input type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;