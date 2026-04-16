"use client";

import { useContext, useMemo } from "react";
import { TimelineContext } from "@/components/context/TimeContext";
import { PieChart, Pie, Tooltip, Cell, } from "recharts";

const COLORS = ["#3b82f6", "#22c55e", "#f97316"];

const StatsPage = () => {
  const { timeline } = useContext(TimelineContext);



  const data = useMemo(() => {
    const counts = { call: 0, text: 0, video: 0 };

    timeline.forEach((item) => {
      if (counts[item.type] !== undefined) {
        counts[item.type]++;
      }
    });

    return [
      { name: "Call", value: counts.call },
      { name: "Text", value: counts.text },
      { name: "Video", value: counts.video },
    ];
  }, [timeline]);

  return (
    // <div className="flex flex-col items-center p-5">
    //   <h2 className="text-xl font-bold mb-4">Friendship Analytics</h2>

    //   <PieChart width={350} height={350}>
    //     <Pie
    //       data={data}
    //       dataKey="value"
    //       nameKey="name"
    //       cx="50%"
    //       cy="50%"
    //       outerRadius={120}
    //       label
    //     >
    //       {data.map((_, index) => (
    //         <Cell key={index} fill={COLORS[index]} />
    //       ))}
    //     </Pie>

    //     <Tooltip />
    //   </PieChart>
    // </div>
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Friendship Analytics
      </h2>

      <p className="text-gray-500 mb-4">
        By Interaction Type
      </p>

      <div className="flex flex-col items-center">
        <PieChart width={250} height={250}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>


        <div className="flex gap-4 mt-4 text-sm">
          {data.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-1 text-sm"
              style={{ color: COLORS[index] }}
            >
              ● {item.name}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default StatsPage;