import React, { useContext, useEffect, useState } from 'react';
import { AuthProviderContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {

    useTitle("My-toys")
    const { user } = useContext(AuthProviderContext)
    const [mytoys, setMytoys] = useState([])
    const [sortValue, setSortValue] = useState("ascending")

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`https://play-minds-server.vercel.app/myAddedtoys?email=${user?.email}&sort=${sortValue}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [user, sortValue])
    const handelOnChange = (event) => {
        setSortValue(event.target.value);

    }
    const handelDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://play-minds-server.vercel.app/dellettoy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingdata = mytoys && mytoys.filter(toy => toy._id !== id)
                            setMytoys(remainingdata)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                    })




            }
        })


    }
    return (
        <div className='my-10'>
            <h1 className="text-2xl font-extrabold ">My Added Toys</h1>
            <div className="divider"></div>


            <div className="form-control w-full  max-w-xs mx-auto ">
                <label className="label">
                    <span className="label-text text-xl">Sory Product By Price</span>
                </label>
                <select onChange={handelOnChange} className="select select-bordered ">
                    <option defaultValue={"ascending"}>Lower Price To Upper Price</option>
                    <option value={"descending"}>Upper Price to Lower Price</option>
                </select>
            </div>


            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full my-10 table-normal">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox " />
                                </label>

                            </th>
                            <th className='w-[50%]'>Toy Name and Info <br />Sub-category</th>
                            <th>Seller Information</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th className='text-center'>Available Quantity</th>
                            <th>Description</th>
                            <th>Acton</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            mytoys && mytoys.map(data => <tr key={data._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                        <button onClick={() => handelDelete(data._id)} className="btn ml-6 btn-circle btn-outline btn-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data.pictureURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className="font-bold w-[50%]">{data.name}</div>
                                            <div className="text-sm opacity-50">{data.subcategory}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='text-xl'>{data.sellerName}</h2>
                                    <div>{data.sellerEmail}</div>
                                </td>
                                <td className='text-center'>{data.price}</td>
                                <td className='text-center'>{data.rating}</td>
                                <td className='text-center'>{data.availableQuantity}</td>
                                <td>{data.description?.slice(0, 10)}...</td>
                                <th>
                                    <Link to={`/updatetoys/${data._id}`}> <button className="btn btn-warning">Update</button></Link>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;