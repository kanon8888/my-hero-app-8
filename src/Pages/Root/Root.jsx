import React from 'react';
import Navbar from '../../Components/Headar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Headar/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;