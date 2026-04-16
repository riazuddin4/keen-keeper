'use client';

import { TimelineContext } from "@/components/context/TimeContext";
import { useContext, useState } from "react";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";

const TimelinePage = () => {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter(item => item.type === filter);

  const typeConfig = {
    call: {
      icon: <IoCall />,
      bg: "bg-gray-200",
      label: "Call",
    },
    text: {
      icon: <IoMdText />,
      bg: "bg-gray-200",
      label: "Text",
    },
    video: {
      icon: <FaVideo />,
      bg: "bg-gray-200",
      label: "Video",
    },
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Timeline</h2>

      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-64 px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      {filteredTimeline.length === 0 ? (
        <p>No activity found</p>
      ) : (
        <div className="space-y-3">
          {filteredTimeline.map((item, index) => {
            const config = typeConfig[item.type] || {};

            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white border rounded-xl shadow-sm"
              >
                
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${config.bg}`}
                >
                  {config.icon}
                </div>

                
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {config.label} with {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.time}
                  </p>
                </div>

                
                <div className="text-gray-400 text-xl cursor-pointer">
                  ⋯
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;