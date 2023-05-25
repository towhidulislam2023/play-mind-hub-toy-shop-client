import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AuthProviderContext } from '../../provider/AuthProvider';

const Registar = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.pathname || "/"
    useTitle("Signup")
    const { signupuser, updateUserinfo } = useContext(AuthProviderContext)
    const handelRegistarform = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const passsword = form.password.value
        const url = form.url.value
        const ConfirmPasssword = form.ConfirmPassword.value
        console.log(name, email, passsword, ConfirmPasssword);
        if (passsword !== ConfirmPasssword) {
            setError("Password Cannot Match")
            return
        }
        signupuser(email, passsword)
            .then(resulr => {
                console.log(resulr.user);
                setError("")
                updateUserinfo(name, url)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }
    return (
        <div className='detbginlogin mb-10 rounded-lg'>
            <div className='md:mx-32 md:w-[40%] py-32  px-5'>
                <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                    <h5 className='text-2xl mt-2 font-bold'>Signup</h5>
                    <p className='font-semibold text-error my-3'>{error}</p>
                    <form onSubmit={handelRegistarform} className='my-12'>
                        <input className='border-l-none border-b-2 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="name" required name='name' placeholder='Your Name' />
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" required name='email' placeholder='Username or Email' />
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="url" required name='url' placeholder='PhotoUrl' />
                        <input className='border-l-none border-b-2 rounded-md px-5 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='password' placeholder='Passowrd' />
                        <input className='border-l-none border-b-2 mt-10 rounded-md px-5 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='ConfirmPassword' placeholder='Confirm Passowrd' />
                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                            </div>
                            <div>
                                <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                            </div>

                        </div>
                        <button className='btn w-[100%] mx-auto btn-warning mt-10'>Registar
                        </button>
                        <p className='text-center my-4'>Alrady have an account ? <Link className='underline text-yellow-600 ' to={'/login'}>Please Login</Link> </p>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Registar;