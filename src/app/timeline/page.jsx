'use client';
// import React from 'react';
// import { useParams, useSearchParams } from "next/navigation";

// const TimelinePage = () => {
//     const { id } = useParams();
//     const searchParams = useSearchParams();
//     const type = searchParams.get("type");

//     return (
//         // <h2>Timeline</h2>
//         // <div className="mt-6">
//         //     <h3 className="text-sm font-semibold mb-3">Timeline</h3>

//         //     {timeline.length === 0 ? (
//         //         <p className="text-xs text-gray-400">No interactions yet</p>
//         //     ) : (
//         //         <div className="space-y-2">
//         //             {timeline.map((item) => (
//         //                 <div
//         //                     key={item.id}
//         //                     className="bg-gray-100 p-3 rounded flex justify-between"
//         //                 >
//         //                     <span className="text-sm">{item.type}</span>
//         //                     <span className="text-xs text-gray-500">{item.date}</span>
//         //                 </div>
//         //             ))}
//         //         </div>
//         //     )}
//         // </div>

//          <div className="p-6 text-center">
//         <h2 className="text-xl font-bold">Timeline</h2>

//         <p className="mt-4">Friend ID: {id}</p>

//         <p className="mt-2 text-lg">
//             Action: <span className="font-semibold">{type}</span>
//         </p>

//         <p className="mt-4 text-gray-500">
//             You clicked {type} button 🎉
//         </p>
//         </div>
//     );
// };

// export default TimelinePage;


// import { TimelineContext } from "@/components/context/TimeContext";
// import { useContext, useState } from "react";


// const TimelinePage = () => {
//   const { timeline } = useContext(TimelineContext);
//   const [filter, setFilter] = useState("all");

//   const filteredTimeline =
//     filter === "all"
//       ? timeline
//       : timeline.filter(item => item.type === filter);

//   return (
//     <div className="p-5">
//       <h2 className="text-xl font-bold mb-4">Timeline</h2>
//       <div className="flex gap-3 mb-5">
//         <button onClick={() => setFilter("all")} className="btn">All</button>
//         <button onClick={() => setFilter("call")} className="btn">Call</button>
//         <button onClick={() => setFilter("text")} className="btn">Text</button>
//         <button onClick={() => setFilter("video")} className="btn">Video</button>
//       </div>

//       <div>
//         {filteredTimeline.map((item, index) => (
//           <div key={index} className="p-3 bg-white mb-3 rounded shadow">
//             <p>Type: {item.type}</p>
//             <p>Time: {item.time}</p>
//           </div>
//         ))}
//       </div>

//       {timeline.length === 0 ? (
//         <p>No activity yet</p>
//       ) : (
//         <div className="space-y-3">
//           {timeline.map((item, index) => (
//             <div
//               key={index}
//               className="p-3 border rounded-lg shadow-sm"
//             >
//               <p>Type: {item.type}</p>
//               <p>Name: {item.name}</p>
//               <p>Time: {item.time}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TimelinePage;

import { TimelineContext } from "@/components/context/TimeContext";
import { useContext, useState } from "react";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Timeline</h2>


      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className=" md:w-64 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
        >
          <option value="all">All timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>



      {filteredTimeline.length === 0 ? (
        <p>No activity found</p>
      ) : (
        <div className="space-y-3">
          {filteredTimeline.map((item, index) => (
            <div
              key={index}
              className="p-3 border rounded-lg shadow-sm"
            >
              <p>Type: {item.type}</p>
              <p>Name: {item.name}</p>
              <p>Time: {item.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;