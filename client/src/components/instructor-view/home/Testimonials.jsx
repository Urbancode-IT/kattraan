import React from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in aliquet nunc. Morbi efficitur libero at lectus laoreet, et malesuada tortor sodales. Fusce consectetur maximus laoreet. Curabitur.",
    name: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    bgColor: "bg-red-500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in aliquet nunc. Morbi efficitur libero at lectus laoreet, et malesuada tortor sodales. Fusce consectetur maximus laoreet. Curabitur.",
    name: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bgColor: "bg-purple-500",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in aliquet nunc. Morbi efficitur libero at lectus laoreet, et malesuada tortor sodales. Fusce consectetur maximus laoreet. Curabitur.",
    name: "Lorem ipsum",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    bgColor: "bg-blue-500",
  },
];

const TestimonialCard = ({ text, name, image, bgColor }) => {
  return (

    <div className={`relative p-6 text-white rounded-xl shadow-lg ${bgColor} w-80`}>
      <div className="absolute top-0 left-4 w-8 h-2 bg-white rounded-b-md"></div>
      <p className="mb-4">{text}</p>
      <hr className="border-white/50 mb-2" />
      <div className="font-bold">{name}</div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <img src={image} alt={name} className="w-16 h-16 rounded-full border-4 border-white shadow-md" />
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="container mx-auto py-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-red-500 my-12 text-center">
  Our Instructors Love <span className="relative">Kattraan ❤️</span>
</h2>
    <div className="flex justify-center gap-6 mt-16">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
        
      ))}
    </div></section>
  );
};

export default Testimonials;
