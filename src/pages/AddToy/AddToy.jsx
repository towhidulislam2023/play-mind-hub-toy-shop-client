import React, { useContext, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthProviderContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
    useTitle("Add Toy");
    const { user } = useContext(AuthProviderContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const pictureURL = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = parseFloat(form.price.value);
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const newtoy = {
            pictureURL,
            name,
            sellerName,
            sellerEmail,
            price,
            rating,
            availableQuantity,
            subcategory,
            description,
        }
        console.log(newtoy);
        fetch("https://play-minds-server.vercel.app/newPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newtoy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You Added the Toys!',
                        'success'
                    )
                    
                }
                console.log(data)
            })
    };

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold'>
                Now <span className='text-warning'>Add A Toy</span>
            </h1>
            <div className="divider"></div>
            <div className='bg-slate-300 py-10 px-10'>
                <form onSubmit={handleAddToy}>
                    <div className=''>
                        <h1 className='text-xl font-semibold my-3'>Name:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='name'
                            placeholder='Name'
                        />

                        <h1 className='text-xl font-semibold my-3'>Picture URL:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='pictureUrl'
                            placeholder='Picture URL of the toy'
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Seller Email:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='sellerEmail'
                            defaultValue={user ? user.email : ""}
                            placeholder='Seller Email'
                        />

                        <h1 className='text-xl font-semibold my-3'>Seller Name:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='sellerName'
                            defaultValue={user ? user.displayName : ""}
                            placeholder='Seller name'
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Sub Category:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='subcategory'
                            placeholder='Sub Category'
                        />

                        <h1 className='text-xl font-semibold my-3'>Price:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='price'
                            placeholder='Price'
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Rating:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='rating'
                            placeholder='Rating'
                        />

                        <h1 className='text-xl font-semibold my-3'>Available quantity:</h1>
                        <input
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='availableQuantity'
                            placeholder='Available quantity'
                        />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold my-3'>Detail description:</h1>
                        <textarea
                            className='border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black'
                            type="text"
                            required
                            name='description'
                            placeholder='Detail description'
                        />
                    </div>
                    <button className='my-10 btn btn-block btn-warning'>Add Toy</button>
                </form>
            </div>
        </div>
    );
};

export default AddToy;
