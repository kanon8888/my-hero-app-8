import React, { useEffect, useState } from 'react';
import { data } from 'react-router';

const AppsData = () => {
    const [allAppsData, setAllAppsData] = useState([]);

        useEffect(() => {
            fetch("appsData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
    
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
    );
};

export default AppsData;