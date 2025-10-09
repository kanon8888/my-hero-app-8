import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ReviewChart = ({ reviews }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={reviews} layout="vertical">
                {/* Horizontal XAxis = count */}
                <XAxis type="number" />
                {/* Vertical YAxis = name */}
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#54CF68" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ReviewChart;




// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const ReviewChart = ({ reviews }) => {
//     return (
//         <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={reviews}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="count" fill="#54CF68" />
//             </BarChart>
//         </ResponsiveContainer>
//     );
// };

// export default ReviewChart;








// import React from 'react';
// import {
//     ResponsiveContainer,
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     LabelList
// } from 'recharts';

// const ReviewChart = ({ ratings = [] }) => {
//     return (
//         <div className="w-full h-64 mt-6">
//             <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                     data={ratings}
//                     layout="vertical"
//                     margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis type="number" />
//                     <YAxis dataKey="name" type="category" />
//                     <Tooltip />
//                     <Bar dataKey="count" fill="#FF8811">
//                         <LabelList dataKey="count" position="right" />
//                     </Bar>
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default ReviewChart;





// import React from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer
// } from "recharts";

// const ReviewChart = ({ reviews, ratingAvg }) => {
//     const data = [
//         { name: "1★", count: reviews[0] || 0 },
//         { name: "2★", count: reviews[1] || 0 },
//         { name: "3★", count: reviews[2] || 0 },
//         { name: "4★", count: reviews[3] || 0 },
//         { name: "5★", count: reviews[4] || 0 },
//     ];

//     return (
//         <div className="bg-gray-50 p-5 rounded-2xl shadow-inner mb-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Rating Distribution</h3>
//             <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis allowDecimals={false} />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="count" fill="#632EE3" radius={[5, 5, 0, 0]} />
//                 </BarChart>
//             </ResponsiveContainer>
//             <p className="mt-4 text-center text-gray-700 text-lg font-medium">
//                 Average Rating: <span className="text-yellow-500">{ratingAvg}★</span>
//             </p>
//         </div>
//     );
// };

// export default ReviewChart;




// import React from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer
// } from "recharts";

// const ReviewChart = ({ reviews, ratingAvg }) => {
//     const data = [
//         { name: "1★", count: reviews[0] || 0 },
//         { name: "2★", count: reviews[1] || 0 },
//         { name: "3★", count: reviews[2] || 0 },
//         { name: "4★", count: reviews[3] || 0 },
//         { name: "5★", count: reviews[4] || 0 },
//     ];

//     return (
//         <div className="bg-gray-50 p-5 rounded-2xl shadow-inner">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Rating Distribution</h3>
//             <ResponsiveContainer width="100%" height={250}>
//                 <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis allowDecimals={false} />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="count" fill="#632EE3" radius={[5, 5, 0, 0]} />
//                 </BarChart>
//             </ResponsiveContainer>
//             <p className="mt-4 text-center text-gray-700 text-lg font-medium">
//                 Average Rating: <span className="text-yellow-500">{ratingAvg}★</span>
//             </p>
//         </div>
//     );
// };

// export default ReviewChart;
