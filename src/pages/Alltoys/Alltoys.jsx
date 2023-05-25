import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const Alltoys = () => {
    useTitle("All Toys")
    const [toysData, setToysData] = useState([])
    const [sortValue, setSortValue] = useState("ascending")
    const [searchvalue, setSerchValue] = useState("")
    useEffect(() => {
        fetch(`https://play-minds-server.vercel.app/alltoys?limit=20&sort=${sortValue}&title=${searchvalue}`)
            .then(res => res.json())
            .then(data => setToysData(data))
    }, [sortValue, searchvalue])
    console.log(toysData);

    const handelOnChange = (event) => {
        setSortValue(event.target.value);

    }
    const handelInputOnChange = (event) => {
        setSerchValue(event.target.value);
    }
    return (
        <div>
            <div className=' my-10 flex justify-center items-center flex-col md:flex-row gap-10'>
                <div className="form-control w-full  max-w-xs ">
                    <label className="label">
                        <span className="label-text">Sory Product By Price</span>
                    </label>
                    <select onChange={handelOnChange} className="select select-bordered ">
                        <option defaultValue={"ascending"}>Lower Price To Upper Price</option>
                        <option value={"descending"}>Upper Price to Lower Price</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Search Product By Name</span>
                    </label>
                    <input onChange={handelInputOnChange} type="text" placeholder="Search Product " className="input input-bordered input-primary w-full  block max-w-xs" />
                </div>
            </div>

                            {toysData.length === 0 ?"No Product Found":""}
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className='text-center'>Toy Name and Info <br />Sub-category</th>
                            <th className='text-center'>Seller Information</th>
                            <th className='text-center'>Price</th>
                          <th className='text-center'>Available Quantity</th>
     
                            <th className='text-center'>Acton</th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            toysData && toysData.map(data => <tr key={data._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3 ">
                                        <div>
                                            <div className="font-bold">{data.name}</div>
                                            <div className="text-sm opacity-50">{data.subcategory}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className='text-xl'>{data.sellerName}</h2>
                                    <div>{data.sellerEmail}</div>
                                </td>
                                <td className='text-center'>{data.price}</td>
                               
                                <td className='text-center'>{data.availableQuantity}</td>
                                

                                <th className='text-center'>
                                    <Link to={`/viewProductDetails/${data._id}`}> <button className="btn btn-warning">View Details</button></Link>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Alltoys;