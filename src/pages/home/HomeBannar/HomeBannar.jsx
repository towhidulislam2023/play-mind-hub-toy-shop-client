import React, { useEffect } from 'react';
import child from '../../../assets/bannar/child.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeBannar = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='setbginbannar md:rounded-lg relative'>
            <div data-aos="fade-up" data-aos-offset="300" className='flex justify-center items-center flex-col h-full'>
                <h1 className="text-4xl text-center font-extrabold  md:w-[50%] text-white">"Unlock Limitless Learning Adventures with <span className='text-5xl text-warning'>Playminds Hub!</span> </h1>
                <button className='btn btn-warning my-10'>Order Now</button>
            </div>
            <img className='absolute w-64 md:w-96 -bottom-3  md:top-3/2 md:left-7' src={child} alt="" />
        </div>
    );
};

export default HomeBannar;