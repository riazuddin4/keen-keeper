import React from 'react';

const Card = () => {

    const stats = [
    { value: 10, label: "Total Friends" },
    { value: 3, label: "On Track" },
    { value: 6, label: "Need Attention" },
    { value: 12, label: "Interactions This Month" },
  ];

    return (
        <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-6 text-center"
          >
            <h2 className="text-2xl font-bold text-green-700">
              {item.value}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
    );
};

export default Card;