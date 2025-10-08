import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReviewChart from "./ReviewChart";

const AppDetails = () => {
    const app = useLoaderData();
    const navigate = useNavigate();

    if (!app) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-md mb-6">
                <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-72 object-cover transform hover:scale-105 transition duration-500"
                />
            </div>

            {/* Title & Description */}
            <div className="mb-6">
                <h2 className="text-4xl font-bold mb-2">{app.title}</h2>
                <p className="text-gray-500 text-lg">{app.description}</p>
            </div>

            {/* Stats */}
            <div className="flex justify-between items-center mb-6 text-gray-700">
                <span className="text-lg font-medium">{app.downloads.toLocaleString()}+ downloads</span>
                <span className="text-yellow-500 font-semibold text-xl">{app.ratingAvg}★</span>
            </div>

            {/* Review Chart */}
            <ReviewChart reviews={app.reviews} ratingAvg={app.ratingAvg} />

            {/* Go Back Button */}
            <div className="mt-8 text-center">
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12 font-semibold rounded-xl hover:opacity-90 transition"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default AppDetails;


// import React from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import ReviewChart from "./ReviewChart";


// const AppDetails = () => {
//     const app = useLoaderData();
//     const navigate = useNavigate();

//     return (
//         <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
//             <img src={app.image} alt={app.title} className="w-full h-64 object-cover rounded-xl mb-4" />
//             <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
//             <p className="text-gray-500 mb-4">{app.description}</p>
//             <div className="flex justify-between text-gray-600 mb-4">
//                 <span>{app.downloads.toLocaleString()}+ downloads</span>
//                 <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
//             </div>
//             <button
//                 onClick={() => navigate(-1)}
//                 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-[145px] h-[48px] font-medium rounded-xl"
//             >
//                 Go Back
//             </button>
//         </div>
//     );
// };

// export default AppDetails;
