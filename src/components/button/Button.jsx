// import React from 'react';

// const Button = () => {
//     return (
//         <div className="flex mb-5 gap-4">
//             <button onClick={() => router.push(`/timeline/${id}?type=call`)}
//                 className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">

//                 <span className="text-xs mt-1">Call</span>
//             </button>

//             <button
//                 onClick={() => router.push(`/timeline/${id}?type=text`)}
//                 className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">

//                 <span className="text-xs mt-1">Text</span>
//             </button>

//             <button
//                 onClick={() => router.push(`/timeline/${id}?type=video`)}
//                 className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200">

//                 <span className="text-xs mt-1">Video</span>
//             </button>
//         </div>
//     );
// };

// export default Button;


import { useContext } from "react";
// import { useRouter } from "next/navigation";
import { TimelineContext } from "../context/TimeContext";

const Button = ({ id, name }) => {
    // const router = useRouter();
    const { addTimeline } = useContext(TimelineContext);

    const handleClick = (type) => {
        const newEntry = {
            id,
            name, 
            type,
            time: new Date().toLocaleString(),
        };

        addTimeline(newEntry); 
        // router.push(`/timeline/${id}`);
    };

    return (
        <div className="flex mb-5 gap-4">
            <button 
                onClick={() => handleClick("call")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >
                <span className="text-xs mt-1">Call</span>
            </button>

            <button
                onClick={() => handleClick("text")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >
                <span className="text-xs mt-1">Text</span>
            </button>

            <button
                onClick={() => handleClick("video")}
                className="flex-1 bg-gray-100 p-3 rounded-lg flex flex-col items-center hover:bg-gray-200"
            >
                <span className="text-xs mt-1">Video</span>
            </button>
        </div>
    );
};

export default Button;