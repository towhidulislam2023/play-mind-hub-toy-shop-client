import React from 'react';
import childimg from '../../assets/bannar/childimage.png';

const About = () => {
    return (
        <div className='my-10 px-6 md:px-0'>
            <h3 className="font-bold text-4xl">About Us </h3>
            <div className="divider"></div>
           <div className='flex gap-24 items-center flex-col md:flex-row'>
                
                <div className='md:w-[50%] rounded-lg'>
                    <img className='w-[100%] rounded-lg' src={childimg} alt="" />
                </div>
                <div className='md:w-[50%]'>
                    <h1 className="text-3xl font-bold">Educational Toys: Inspiring Learning, Igniting Curiosity</h1>
                    <p className='my-10'>At <span className='text-warning font-bold text-3xl'>Playminds Hub </span> , we are passionate about educational toys that spark curiosity and inspire learning. We handpick the finest selection of toys designed to engage young minds and make learning a fun and interactive experience.</p>

                    <p>Our carefully curated collection includes a variety of educational toys for children of all ages. From STEM toys that encourage problem-solving and critical thinking to language and creativity-enhancing games, we have something for every child's learning journey.</p>


                    <p>Our carefully curated collection includes a variety of educational toys for children of all ages. From STEM toys that encourage problem-solving and critical thinking to language and creativity-enhancing games, we have something for every child's learning journey.</p>

                    <button className='btn btn-block btn-warning my-10'>Join Now</button>

                </div>
           </div>
        </div>
    );
};

export default About;