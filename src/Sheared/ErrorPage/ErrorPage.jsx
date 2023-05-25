import React from 'react';
import error from '../../assets/bannar/error.png';
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate()
    const handalGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='text-center'>
            <h1 className="text-warning text-center text-4xl my-10 font-extrabold">PlayMinds Hub </h1>
            <button onClick={handalGoBack} className='link'>Go BAck</button>
            <img className='mx-auto' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;