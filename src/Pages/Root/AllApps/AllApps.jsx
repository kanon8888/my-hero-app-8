import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

const AllApps = () => {
    const allAppsData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");

    
    const filteredApps = allAppsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mt-6">Our All Applications</h1>
            <p className="text-center mt-4">Explore All Apps on the Market developed by us. We code for Millions</p>

            
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4">
                <div>
                    <h2 className="font-bold">({filteredApps.length}) Apps Found</h2>
                </div>

                
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search Apps..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-10 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00827A]"
                    />
                    
                    <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                {filteredApps.length > 0 ? (
                    filteredApps.map(app => (
                        <Link to={`/appsData/${app.id}`} key={app.id}>
                            <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:scale-105 transition-transform">
                                <img src={app.image} alt={app.title} className="rounded-lg mb-3 w-full h-48 object-cover" />
                                <h3 className="font-medium text-center">{app.title}</h3>
                                <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
                                    <span>{app.downloads?.toLocaleString() || 0}+ downloads</span>
                                    <span className="text-yellow-500 font-semibold">{app.ratingAvg || 0}★</span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full mt-10">No apps found matching “{searchTerm}”</p>
                )}
            </div>
        </div>
    );
};

export default AllApps;










