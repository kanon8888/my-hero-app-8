import React from 'react';
import Navbar from '../../Components/Headar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Headar/Footer/Footer';
import Bannar from '../../Bannar/Bannar';

const Root = () => {
    const location = useLocation();
    const showBannar = location.pathname === '/';
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                 <Navbar></Navbar>
            </div>
            { showBannar && <Bannar></Bannar> }
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;