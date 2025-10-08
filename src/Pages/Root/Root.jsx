import React from 'react';
import Navbar from '../../Components/Headar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Headar/Footer/Footer';
import Bannar from '../../Bannar/Bannar';

const Root = () => {
    return (
        <div>
            <div>
                 <Navbar></Navbar>
            </div>
            <Bannar></Bannar>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;