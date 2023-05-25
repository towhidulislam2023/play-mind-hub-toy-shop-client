import React from 'react';
import Header from '../Sheared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div>
        <div className='md:w-[85%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Layout;