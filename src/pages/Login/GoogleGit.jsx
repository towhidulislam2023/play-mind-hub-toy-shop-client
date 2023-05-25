import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthProviderContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleGit = () => {
    const { handelGoogleLogin }=useContext(AuthProviderContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    const handelLoginByGoogle = () => {
        handelGoogleLogin()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })

            })
            .catch(error => { console.error(error) })

    }
    return (
        <div>
            <hr className='border mt-5 border-gray-400  mx-auto' />
            <button onClick={handelLoginByGoogle} className='btn flex w-[100%] mx-auto bg-transparent mt-5 text-black hover:bg-transparent'>
                <span className=''><FaGoogle className='text-blue-600 text-2xl '></FaGoogle></span>  <span className='flex-grow'>Continue with Google </span>
            </button>
        </div>
    );
};

export default GoogleGit;