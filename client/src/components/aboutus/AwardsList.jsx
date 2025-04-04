import React from "react";
import { FaAward } from 'react-icons/fa';

const awards = [
  {
    id: 1,
    title: "Best Educational Institute 2023",
    description: "Recognized for excellence in technical education and career development.",
    image: "/images/award1.png", // Replace with actual image path
    year: "2023",
  },
  {
    id: 2,
    title: "Top Coding Bootcamp 2022",
    description: "Awarded for innovative learning programs and student success rates.",
    image: "/images/award2.png",
    year: "2022",
  },
  {
    id: 3,
    title: "Excellence in EdTech 2021",
    description: "Honored for digital transformation in education and modern teaching techniques.",
    image: "/images/award3.png",
    year: "2021",
  },
];

const AwardCard = ({ title, description, image, year }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      {/*<img src={image} alt={title} className="mx-auto w-24 h-24 object-cover rounded-full mb-4" />*/}
      <FaAward className="text-yellow-500 text-6xl" />
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <span className="mt-3 inline-block text-yellow-500  font-semibold">
        {year}
      </span>
    </div>
  );
};

const AwardsList = () => {
  return (
    <section className="py-12 bg-red-100 relative">
      <svg
        className="absolute top-10 left-10 md:top-12 md:left-12 lg:top-16 lg:left-16 transform -translate-x-1/2"
        width="200"
        height="200"
        viewBox="0 0 200 200"     
      >
        <circle cx="50" cy="50" r="40" fill="white" className="opacity-50" />
      </svg>

      {/* Second SVG Circle */}
      <svg
        className="absolute top-20 left-1/2 transform -translate-x-1/2 md:top-24 lg:top-32"
        width="500"
        height="500"
        viewBox="0 0 200 200"
        >
        <circle cx="50" cy="50" r="40" fill="white"  className="opacity-30"/>
      </svg>

      {/* Third SVG Circle */}
      <svg
        className="absolute top-10 right-10 md:top-12 md:right-12 lg:top-16 lg:right-16 transform translate-x-1/2"
        width="100"
        height="100"
        viewBox="0 0 200 200"
        >
        <circle cx="50" cy="50" r="40" fill="white"  className="opacity-70"/>
      </svg>
      <div className="container z-10 mx-auto px-6 text-center relative">
      
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Achievements</h2>
        <p className="text-red-600 mb-10">
          Kattraan has been recognized for excellence in education and technology.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <AwardCard key={award.id} {...award} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsList;
