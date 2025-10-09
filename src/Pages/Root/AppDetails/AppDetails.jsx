import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewChart from "./ReviewChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
    const app = useLoaderData();
    const [installed, setInstalled] = useState(false);

    // Check if app is already installed
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
        if (app && installedApps.some(a => a.id === app.id)) {
            setInstalled(true);
        }
    }, [app]);

    // Handle install
    const handleInstall = () => {
        if (!app) return;

        // Read existing apps from localStorage
        const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");

        // Check if already installed
        const alreadyInstalled = installedApps.some(a => a.id === app.id);
        if (alreadyInstalled) {
            toast.info(`${app.title} is already installed.`, { position: "top-center" });
            return;
        }

        // Add app to installed apps
        installedApps.push(app);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));

        setInstalled(true);
        toast.success(`${app.title} installed successfully!`, { position: "top-center" });
    };

    if (!app) return <p className="text-center mt-10">App not found!</p>;

    const ratings = [
        { name: "5★", count: Math.floor(app.reviews * 0.5) },
        { name: "4★", count: Math.floor(app.reviews * 0.3) },
        { name: "3★", count: Math.floor(app.reviews * 0.1) },
        { name: "2★", count: Math.floor(app.reviews * 0.06) },
        { name: "1★", count: Math.floor(app.reviews * 0.04) },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-[300px] rounded-lg object-cover"
                    />
                </div>

                <div className="md:w-1/2 flex flex-col justify-start">
                    <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
                    <p className="text-gray-700 mb-2">{app.description}</p>
                    <p><strong>Company:</strong> {app.companyName}</p>
                    <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
                    <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>

                    {/* Install Button */}
                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${
                            installed
                                ? "bg-green-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:brightness-105"
                        }`}
                    >
                        {installed ? "Installed" : "Install"}
                    </button>
                </div>
            </div>

            {/* Ratings Chart */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
                <ReviewChart reviews={ratings} />
            </div>

            {/* Description */}
            <div className="mt-10 p-6 rounded-lg bg-gray-50">
                <h1 className="text-2xl font-bold mb-4">Description</h1>
                <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                <br />
                <br />
                <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                <br />
                <br />
                <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
            </div>

            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default AppDetails;




// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import ReviewChart from "./ReviewChart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const [installed, setInstalled] = useState(false);

    
//     useEffect(() => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");
//         if (app && installedApps.some(a => a.id === app.id)) {
//             setInstalled(true);
//         }
//     }, [app]);

    
//     const handleInstall = () => {
//         if (!app) return;

        
//         const installedApps = JSON.parse(localStorage.getItem("installedApps") || "[]");

        
//         const alreadyInstalled = installedApps.some(a => a.id === app.id);
//         if (alreadyInstalled) {
//             toast.info(`${app.title} is already installed.`, { position: "top-center" });
//             return;
//         }

        
//         installedApps.push(app);
//         localStorage.setItem("installedApps", JSON.stringify(installedApps));

//         setInstalled(true);
//         toast.success(`${app.title} installed successfully!`, { position: "top-center" });
//     };

//     if (!app) return <p className="text-center mt-10">App not found!</p>;

//     const ratings = [
//         { name: "5★", count: Math.floor(app.reviews * 0.5) },
//         { name: "4★", count: Math.floor(app.reviews * 0.3) },
//         { name: "3★", count: Math.floor(app.reviews * 0.1) },
//         { name: "2★", count: Math.floor(app.reviews * 0.06) },
//         { name: "1★", count: Math.floor(app.reviews * 0.04) },
//     ];

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             <div className="flex flex-col md:flex-row gap-6">
//                 <div className="md:w-1/2">
//                     <img
//                         src={app.image}
//                         alt={app.title}
//                         className="w-full h-[300px] rounded-lg object-cover"
//                     />
//                 </div>

//                 <div className="md:w-1/2 flex flex-col justify-start">
//                     <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
//                     <p className="text-gray-700 mb-2">{app.description}</p>
//                     <p><strong>Company:</strong> {app.companyName}</p>
//                     <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
//                     <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>

                    
//                     <button
//                         onClick={handleInstall}
//                         disabled={installed}
//                         className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${
//                             installed
//                                 ? "bg-gray-400 cursor-not-allowed"
//                                 : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:brightness-105"
//                         }`}
//                     >
//                         {installed ? "Installed" : "Install"}
//                     </button>
//                 </div>
//             </div>

            
//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
//                 <ReviewChart reviews={ratings} />
//             </div>

            
//             <div className="mt-10 p-6 rounded-lg bg-gray-50">
//                 <h1 className="text-2xl font-bold mb-4">Description</h1>
//                 <p>{app.description}</p>
//             </div>

//             <ToastContainer position="top-center" autoClose={2000} />
//         </div>
//     );
// };

// export default AppDetails;




// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import ReviewChart from "./ReviewChart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const [installed, setInstalled] = useState(false);

//     // Check if app is already installed
//     useEffect(() => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && installedApps.some(a => a.id === app.id)) {
//             setInstalled(true);
//         }
//     }, [app]);

//     // Handle install
//     const handleInstall = () => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && !installedApps.some(a => a.id === app.id)) {
//             installedApps.push(app);
//             localStorage.setItem("installedApps", JSON.stringify(installedApps));
//             setInstalled(true);
//             toast.success(`${app.title} installed successfully!`, { position: "top-center" });
//         }
//     };

//     if (!app) return <p className="text-center mt-10">App not found!</p>;

//     // Ratings array for chart
//     const ratings = [
//         { name: "5★", count: Math.floor(app.reviews * 0.5) },
//         { name: "4★", count: Math.floor(app.reviews * 0.3) },
//         { name: "3★", count: Math.floor(app.reviews * 0.1) },
//         { name: "2★", count: Math.floor(app.reviews * 0.06) },
//         { name: "1★", count: Math.floor(app.reviews * 0.04) },
//     ];

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             {/* App Info */}
//             <div className="flex flex-col md:flex-row gap-6">
//                 <div className="md:w-1/2">
//                     <img
//                         src={app.image}
//                         alt={app.title}
//                         className="w-full h-[300px] rounded-lg object-cover"
//                     />
//                 </div>

//                 <div className="md:w-1/2 flex flex-col justify-start">
//                     <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
//                     <p className="text-gray-700 mb-2">{app.description}</p>
//                     <p><strong>Company:</strong> {app.companyName}</p>
//                     <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
//                     <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>

//                     {/* Install Button */}
//                     <button
//                         onClick={handleInstall}
//                         disabled={installed}
//                         className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${installed
//                                 ? "bg-gray-400 cursor-not-allowed"
//                                 : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:brightness-105"
//                             }`}
//                     >
//                         {installed ? "Installed" : "Install"}
//                     </button>
//                 </div>
//             </div>

//             {/* Ratings Chart */}
//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
//                 <ReviewChart reviews={ratings} />
//             </div>

//             {/* Full Description */}
//             <div className="mt-10 p-6 rounded-lg bg-gray-50">
//                 <h1 className="text-2xl font-bold mb-4">Description</h1>
//                 <p>{app.description}</p>
//             </div>

//             <ToastContainer position="top-center" autoClose={2000} />
//         </div>
//     );
// };

// export default AppDetails;






// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import ReviewChart from "./ReviewChart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const [installed, setInstalled] = useState(false);

//     // Check if app is already installed
//     useEffect(() => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && installedApps.some(a => a.id === app.id)) {
//             setInstalled(true);
//         }
//     }, [app]);

//     // Handle install
//     const handleInstall = () => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && !installedApps.some(a => a.id === app.id)) {
//             installedApps.push(app);
//             localStorage.setItem("installedApps", JSON.stringify(installedApps));
//             setInstalled(true);
//             toast.success(`${app.title} installed successfully!`, { position: "top-center" });
//         }
//     };

//     if (!app) return <p className="text-center mt-10">App not found!</p>;

//     // Ratings array for chart
//     const ratings = [
//         { name: "5★", count: Math.floor(app.reviews * 0.5) },
//         { name: "4★", count: Math.floor(app.reviews * 0.3) },
//         { name: "3★", count: Math.floor(app.reviews * 0.1) },
//         { name: "2★", count: Math.floor(app.reviews * 0.06) },
//         { name: "1★", count: Math.floor(app.reviews * 0.04) },
//     ];

//     return (
//         <div className="max-w-6xl mx-auto p-6">
//             {/* App Info */}
//             <div className="flex flex-col md:flex-row gap-6">
//                 <div className="md:w-1/2">
//                     <img
//                         src={app.image}
//                         alt={app.title}
//                         className="w-full h-[300px] rounded-lg object-cover"
//                     />
//                 </div>

//                 <div className="md:w-1/2 flex flex-col justify-start">
//                     <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
//                     <p className="text-gray-700 mb-2">{app.description}</p>
//                     <p><strong>Company:</strong> {app.companyName}</p>
//                     <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
//                     <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>

//                     {/* Install Button */}
//                     <button
//                         onClick={handleInstall}
//                         disabled={installed}
//                         className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${installed
//                                 ? "bg-gradient-to-r from-[#54CF68] to-[#00827A] cursor-not-allowed"
//                                 : "bg-gradient-to-r from-[#54CF68] to-[#00827A] hover:brightness-105"
//                             }`}
//                     >
//                         {installed ? "Installed" : "Install"}
//                     </button>
//                 </div>
//             </div>

//             {/* Ratings Chart */}
//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
//                 <ReviewChart reviews={ratings} ratingAvg={app.ratingAvg} />
//             </div>

//             {/* Full Description */}
//             <div className="mt-10 p-6 rounded-lg bg-gray-50">
//                 <h1 className="text-2xl font-bold mb-4">Description</h1>
//                 <p>{app.description}</p>
//             </div>

//             <ToastContainer position="top-center" autoClose={2000} />
//         </div>
//     );
// };

// export default AppDetails;




// import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import ReviewChart from "./ReviewChart";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const [installed, setInstalled] = useState(false);


//     useEffect(() => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && installedApps.some(a => a.id === app.id)) {
//             setInstalled(true);
//         }
//     }, [app]);

//     const handleInstall = () => {
//         const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
//         if (app && !installedApps.some(a => a.id === app.id)) {
//             installedApps.push(app);
//             localStorage.setItem("installedApps", JSON.stringify(installedApps));
//             setInstalled(true);
//             toast.success(`${app.title} installed successfully!`, { position: "top-center" });
//         }
//     };

//     if (!app) return <p className="text-center mt-10">App not found!</p>;


//     const ratings = [
//         { name: "5★", count: Math.floor(app.reviews * 0.5) },
//         { name: "4★", count: Math.floor(app.reviews * 0.3) },
//         { name: "3★", count: Math.floor(app.reviews * 0.1) },
//         { name: "2★", count: Math.floor(app.reviews * 0.06) },
//         { name: "1★", count: Math.floor(app.reviews * 0.04) },
//     ];

//     return (
//         <div className="max-w-6xl mx-auto p-6">

//             <div className="flex flex-col md:flex-row gap-6">
//                 <div className="md:w-1/2">
//                     <img
//                         src={app.image}
//                         alt={app.title}
//                         className="w-full h-[300px] rounded-lg object-cover"
//                     />
//                 </div>

//                 <div className="md:w-1/2 flex flex-col justify-start">
//                     <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
//                     <p className="text-gray-700 mb-2">{app.description}</p>
//                     <p><strong>Company:</strong> {app.companyName}</p>
//                     <p><strong>Downloads:</strong> {app.downloads.toLocaleString()}</p>
//                     <p><strong>Rating:</strong> {app.ratingAvg}★ ({app.reviews.toLocaleString()} reviews)</p>


//                     <button
//                         onClick={handleInstall}
//                         disabled={installed}
//                         className={`mt-4 px-6 py-2 w-[250px] rounded-md text-white font-semibold ${installed
//                                 ? " bg-gradient-to-r from-[#54CF68] to-[#00827A] cursor-not-allowed"
//                                 : "bg-green-500 hover:bg-green-600"
//                             }`}
//                     >
//                         {installed ? "Installed" : "Install"}
//                     </button>


//                 </div>
//             </div>


//             <div className="mt-8">
//                 <h2 className="text-xl font-semibold mb-2">Ratings Breakdown</h2>
//                 <ReviewChart reviews={ratings.map(r => r.count)} ratingAvg={app.ratingAvg} />
//             </div>


//             <div className="mt-10 p-6 rounded-lg bg-gray-50">
//                 <h1 className="text-2xl font-bold mb-4">Description</h1>
//                 <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
//                 <br />
//                 <br />
//                 <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
//                 <br />
//                 <br />
//                 <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
//             </div>

//             <ToastContainer position="top-center" autoClose={2000} />
//         </div>
//     );
// };

// export default AppDetails;




// import React from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import ReviewChart from "./ReviewChart";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const navigate = useNavigate();

//     if (!app) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
//             {/* Header: Icon + Title + Developer */}
//             <div className="flex items-center mb-6 space-x-4">
//                 <img
//                     src={app.image}
//                     alt={app.title}
//                     className="w-24 h-24 rounded-2xl object-cover shadow-md"
//                 />
//                 <div>
//                     <h1 className="text-3xl font-bold">{app.title}</h1>
//                     <p className="text-gray-500">Developed by {app.developer}</p>
//                 </div>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-6 mb-6">
//                 <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-inner w-32">
//                     <span className="text-green-500 text-2xl">⬇</span>
//                     <span className="font-semibold mt-1">{app.downloads.toLocaleString()}</span>
//                     <span className="text-gray-500 text-sm">Downloads</span>
//                 </div>
//                 <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-inner w-32">
//                     <span className="text-yellow-500 text-2xl">★</span>
//                     <span className="font-semibold mt-1">{app.ratingAvg}</span>
//                     <span className="text-gray-500 text-sm">Average Ratings</span>
//                 </div>
//                 <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl shadow-inner w-32">
//                     <span className="text-purple-500 text-2xl">📝</span>
//                     <span className="font-semibold mt-1">{app.totalReviews}</span>
//                     <span className="text-gray-500 text-sm">Total Reviews</span>
//                 </div>
//             </div>

//             {/* Install Button */}
//             <div className="mb-6">
//                 <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition">
//                     Install Now ({app.size} MB)
//                 </button>
//             </div>

//             {/* Rating Chart */}
//             <ReviewChart reviews={app.reviews} ratingAvg={app.ratingAvg} />

//             {/* Description */}
//             <div className="mt-8">
//                 <h2 className="text-2xl font-bold mb-3">Description</h2>
//                 <p className="text-gray-600 whitespace-pre-line">{app.description}</p>
//             </div>

//             {/* Go Back Button */}
//             <div className="mt-8 text-center">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12 font-semibold rounded-xl hover:opacity-90 transition"
//                 >
//                     Go Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AppDetails;





// import React from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import ReviewChart from "./ReviewChart";

// const AppDetails = () => {
//     const app = useLoaderData();
//     const navigate = useNavigate();

//     if (!app) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
//             {/* Image */}
//             <div className="overflow-hidden rounded-2xl shadow-md mb-6">
//                 <img
//                     src={app.image}
//                     alt={app.title}
//                     className="w-full h-72 object-cover transform hover:scale-105 transition duration-500"
//                 />
//             </div>

//             {/* Title & Description */}
//             <div className="mb-6">
//                 <h2 className="text-4xl font-bold mb-2">{app.title}</h2>
//                 <p className="text-gray-500 text-lg">{app.description}</p>
//             </div>

//             {/* Stats */}
//             <div className="flex justify-between items-center mb-6 text-gray-700">
//                 <span className="text-lg font-medium">{app.downloads.toLocaleString()}+ downloads</span>
//                 <span className="text-yellow-500 font-semibold text-xl">{app.ratingAvg}★</span>
//             </div>

//             {/* Review Chart */}
//             <ReviewChart reviews={app.reviews} ratingAvg={app.ratingAvg} />

//             {/* Go Back Button */}
//             <div className="mt-8 text-center">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12 font-semibold rounded-xl hover:opacity-90 transition"
//                 >
//                     Go Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AppDetails;


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
