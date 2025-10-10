
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import errorimg from '../../../assets/App-Error.png'

const SearchError = () => {
    const navigate = useNavigate();
    const location = useLocation();

    
    const message = location.state?.message || "No apps found";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <img className="w-[400px] h-[400px]" src={errorimg} alt="" />
            <h2 className="text-3xl font-bold mb-4">Oops! App Not Found</h2>
            <p className="text-gray-500 mb-6 text-center">{message}</p>
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Go Back
            </button>
        </div>
    );
};

export default SearchError;





