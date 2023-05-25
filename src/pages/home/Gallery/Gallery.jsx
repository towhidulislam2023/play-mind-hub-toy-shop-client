import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        fetch("https://play-minds-server.vercel.app/gallery")
            .then(res => res.json())
            .then(data => setImageData(data))
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    // console.log(imageData);
    return (
        <div className='my-12 px-5 md:px-0'>
            <h3 className="font-bold text-4xl">Our Gallery </h3>
            <div className="divider"></div>
            <div
                data-aos="slide-up"
                data-aos-delay="400" //Here you can use any of the AOS animations
            >
                <div className='grid md:grid-cols-4  justify-between  gap-3  '>
                    {
                        imageData && imageData.map(img => <div className='rounded-lg h-full relative' key={img._id}>
                            <img className='h-96 w-96 rounded-lg' src={img.image} alt="" />
                            <span className='absolute top-2 left-2 bg-warning px-3 py-1 rounded-md'>{img.name}</span>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;