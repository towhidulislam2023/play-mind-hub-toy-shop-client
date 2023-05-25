import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ViewProductDetails = () => {
    useTitle("View-details")
    const loaderData = useLoaderData()
    const { pictureURL, name, sellerName, sellerEmail, subcategory, price, rating, availableQuantity, description } = loaderData || {}
console.log(price,typeof price);
    return (
        <div className='my-10'>
            <h1 className="text-5xl  font-bold">{name}</h1>
            <p className='my-2 badge badge-warning mt-5 py-1'>{subcategory}</p>
            <div className="divider"></div>
            <div className='flex gap-32 flex-col md:flex-row'>
                <img className='w-96 mx-auto' src={pictureURL} alt="" />
                <div className="divider lg:divider-horizontal"></div>
                <div className='space-y-6 px-5'>
                    <h1 className='text-xl  '>Name: <span className='font-semibold'>{name}</span></h1>
                    <h1 className='text-xl  '>Price: $<span className='font-semibold'>{price}</span></h1>
                    <h1 className='text-xl  '>Rating: <span className='font-semibold'>{rating}</span></h1>
                    <h1 className='text-xl  '>Available Quantity: <span className='font-semibold'>{availableQuantity}</span></h1>
                    <h1 className='text-xl  '>Seller Name: <span className='font-semibold'>{sellerName}</span></h1>
                    <h1 className='text-xl  '>Seller Email: <span className='font-semibold'>{sellerEmail}</span></h1>
                    <h1 className='text-xl  '>Description: <span className='font-semibold'>{description}</span></h1>
                </div>
            </div>

        </div>
    );
};

export default ViewProductDetails;