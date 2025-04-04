import React from "react";
import { Monitor, UserCircle, GraduationCap, BadgeCheck } from "lucide-react";
const StatsSection = () => {
  const stats = [
    {
      icon: <Monitor className="text-yellow-500 w-8 h-8" />,
      value: "10K",
      label: "Online Courses",
    },
    {
      icon: <UserCircle className="text-blue-900 w-8 h-8" />,
      value: "200+",
      label: "Expert Tutors",
    },
    {
      icon: <GraduationCap className="text-purple-600 w-8 h-8" />,
      value: "60K+",
      label: "Online Students",
    },
    {
      icon: <BadgeCheck className="text-cyan-600 w-8 h-8" />,
      value: "6K+",
      label: "Certified Courses",
    },
  ];

  return (
    <div className="bg-orange-50 p-8 rounded-lg flex justify-around items-center w-full shadow-md">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <h2 className="text-orange-500 text-3xl font-bold"> {stat.value}</h2>
          <p className="text-gray-700 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
