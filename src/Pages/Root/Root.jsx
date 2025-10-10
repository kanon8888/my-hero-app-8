import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Headar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../../Components/Headar/Footer/Footer';
import Bannar from '../../Bannar/Bannar';

const Root = () => {
    const location = useLocation();
    const showBannar = location.pathname === '/';
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);
        return () => clearTimeout(timer);
    }, [location]);
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
            </div>
            {showBannar && <Bannar></Bannar>}
            <div className='max-w-6xl mx-auto'>
                {loading ? (

                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="w-12 h-12 border-4 border-[#632EE3] border-t-transparent rounded-full animate-spin"></div>
                        <span className="ml-3 text-lg text-gray-600 font-medium">Loading...</span>
                    </div>
                ) : (
                    <div>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Root;