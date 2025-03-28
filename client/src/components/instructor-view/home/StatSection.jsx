import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "89K", label: "Total Students" },
    { value: "25K", label: "Total Instructors" },
    { value: "180K", label: "Total Courses" },
    { value: "20+", label: "Languages" },
  ];

  return (
    <div className="bg-orange-50 p-8 rounded-lg flex justify-around items-center w-full shadow-md">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-orange-500 text-3xl font-bold">{stat.value}</h2>
          <p className="text-gray-700 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
