import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllApps = () => {
    const allAppsData = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mt-6">Our All Applications</h1>
            <p className="text-center mt-4">Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex justify-between">

                <div>
                    <h2 className="font-bold">(132) Apps Found</h2>
                </div>
                <div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {allAppsData.map(app => (
                    <Link to={`/appsData/${app.id}`} key={app.id}>
                        <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
                            <img src={app.image} alt={app.title} className="rounded-lg mb-3 w-full h-48 object-cover" />
                            <h3 className="font-medium text-center">{app.title}</h3>
                            <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
                                <span>{app.downloads.toLocaleString()}+ downloads</span>
                                <span className="text-yellow-500 font-semibold">{app.ratingAvg}★</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllApps;


