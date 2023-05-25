import React, { useEffect } from 'react';
import { FaExchangeAlt, FaGift, FaRibbon, FaShippingFast, FaSyncAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div
            data-aos="slide-right"
            data-aos-delay="400" 
        >
            <div className='my-10'>
                <h3 className="font-bold text-4xl">Our Services <span className='text-warning'>.</span></h3>
                <div className="divider"></div>
                <div className='flex justify-between flex-wrap md:flex-nowrap '>
                    <div className=' p-7'>
                        <FaShippingFast className='text-7xl text-warning '></FaShippingFast>
                        <h2 className="text-2xl font-bold">Free Shipping</h2>
                        <p>"Enjoy free shipping on all orders!"</p>
                    </div>
                    <div className=' p-7'>
                        <FaSyncAlt className='text-7xl text-warning '></FaSyncAlt>
                        <h2 className="text-2xl font-bold">Returns Policy</h2>
                        <p>"30-day return/exchange policy for hassle-free returns!"</p>
                    </div>
                    <div className=' p-7'>
                        <FaGift className='text-7xl text-warning '></FaGift>
                        <h2 className="text-2xl font-bold">Gift Card</h2>
                        <p>"Give the gift of choice with our gift cards!"</p>
                    </div>
                    <div className=' p-7'>
                        <FaRibbon className='text-7xl text-warning '></FaRibbon>
                        <h2 className="text-2xl font-bold">Best Quality</h2>
                        <p>"Give the gift of choice with our gift cards!"</p>
                    </div>

                </div>
                <div className='my-10 md:flex gap-10 space-y-11 md:space-y-0 '>
                    <div className='md:w-[50%] h-72 rounded-lg bg-warning flex items-center justify-around px-4 '>
                        <img className='md:w-60 w-52 my-5 hover:transform-cpu duration-300 ' src="https://i.ibb.co/0CrW8bk/pngwing-com-4.png" alt="pngwing-com-4" border="0"></img>
                        <div className='text-center'>
                            <h1 className="md:text-6xl text-4xl text-white font-extrabold">ON SALE</h1>
                            <div className='bg-slate-200 py-1 px-5 my-2'>
                                <p className='font-bold text-center '> SAVE UPTO 30% OFF</p>
                            </div>
                            <button className='btn btn-accent'>Shop Now</button>
                        </div>

                    </div>
                    <div className='md:w-[50%] h-72 rounded-lg bg-accent flex items-center justify-around px-4'>
                        <img className='md:w-60 w-52 my-5  duration-300 ' src="https://i.ibb.co/4FJsv4v/pngwing-com-5.png" alt="pngwing-com-4" border="0"></img>
                        <div className='text-center'>
                            <h1 className="md:text-6xl text-4xl text-white font-extrabold">ON SALE</h1>
                            <div className='bg-slate-200 py-1 px-5 my-2'>
                                <p className='font-bold text-center '> SAVE UPTO 30% OFF</p>
                            </div>
                            <button className='btn btn-warning'>Shop Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;