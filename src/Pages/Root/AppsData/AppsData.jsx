import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AppsData = () => {
    const [allAppsData, setAllAppsData] = useState([]);

    useEffect(() => {
        fetch("/appsData.json")
            .then(res => res.json())
            .then(data => setAllAppsData(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-6">Trending Apps</h1>
            <p className="text-gray-400 text-center mt-4">
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4 gap-6">
                {allAppsData.map(app => (
                    <Link to={`/appsData/${app.id}`} key={app.id}>
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="rounded-lg mb-3 w-full h-48 object-cover"
                            />
                            <h3 className="font-medium text-center">{app.title}</h3>
                            <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
                                <span>{app.downloads.toLocaleString()}+ downloads</span>
                                <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-[145px] h-[48px] font-medium rounded-xl">
                    Show All
                </button>
            </div>
        </div>
    );
};

export default AppsData;




// const AppsData = () => {
//     const [allAppsData, setAllAppsData] = useState([]);

//     useEffect(() => {
//         fetch("/appsData.json") // ফাইলটা public ফোল্ডারে রাখো
//             .then(res => res.json())
//             .then(data => setAllAppsData(data));
//     }, []);

//     return (
//         <div>
//             {/* Section title */}
//             <h1 className="text-3xl font-bold text-center mt-6">
//                 Trending Apps
//             </h1>
//             <p className="text-gray-400 text-center mt-4">
//                 Explore All Trending Apps on the Market developed by us
//             </p>

//             {/* Grid layout */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4 gap-6">
//                 {allAppsData.map(app => (
//                     <div key={app.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
//                         <img
//                             src={app.image}
//                             alt={app.title}
//                             className="rounded-lg mb-3 w-full h-48 object-cover"
//                         />
//                         <h3 className="font-medium text-center">{app.title}</h3>
//                         <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
//                             <span>{app.downloads.toLocaleString()}+ downloads</span>
//                             <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-center mt-6">
//                 <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-[145px] h-[48px] font-medium rounded-xl">
//                     Show All
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AppsData;








// import React, { useEffect, useState } from 'react';
// import { data } from 'react-router';

// const AppsData = () => {
//     const [allAppsData, setAllAppsData] = useState([]);

//     useEffect(() => {
//         fetch("appsData.json")
//             .then(res => res.json())
//             .then(data => {
//                 setAllAppsData(data)
//             })
//     })

//     return (
//         <div>
//             {/* Section title */}
//             <h1 className="text-3xl font-bold text-center mt-6">
//                 Trending Apps
//             </h1>
//             <p className='text-gray-400 text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>

//             {/* Grid layout */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-4  gap-6">
//                 {data.map(data => (
//                     <div key={data.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
//                         {/* App image */}
//                         <img
//                             src={data.image}
//                             alt={data.title}
//                             className="rounded-lg mb-3 w-full h-48 object-cover"
//                         />
//                         {/* App title */}
//                         <h3 className="font-medium  text-center">{data.title}</h3>
//                         {/* Downloads and rating */}
//                         <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
//                             <span>{data.downloads.toLocaleString()}+ downloads</span>
//                             <span className="text-yellow-500 font-semibold">{data.ratingAvg}★</span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className='flex justify-center mt-6'>
//                 <button className='bg-gradient-to-r from-[#632EE3]   to-[#9F62F2] text-white w-[145px] h-[48px] font-medium rounded-xl '>Show All</button>
//             </div>
//         </div>

//     );
// };

// export default AppsData;