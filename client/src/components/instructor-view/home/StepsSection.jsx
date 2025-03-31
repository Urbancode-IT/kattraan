import React from "react";

const steps = [
  "Fill out the Registration form and Click I'm Interested",
  "Complete the verification process after receiving a Callback from Kattraan team",
  "Attend an interview or demo session",
  "Start teaching and earn on our platform"
];

const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"];
const hoverColors = ["hover:bg-red-300", "hover:bg-blue-300", "hover:bg-green-300", "hover:bg-yellow-300"];
const shadowColors = ["hover:shadow-red-500/50", "hover:shadow-blue-500/50", "hover:shadow-green-500/50", "hover:shadow-yellow-500/50"];

const StepsSection = () => {
  return (<section>
    <h2 className="text-4xl font-bold text-red-500 my-12 text-center">How to join Kattraan as an Instructor?</h2>
  <p className="text-gray-600 text-lg text-center">Join Kattraan as an Instructor and start teaching in 4 simple steps!</p>
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-8">
      
      <div className="md:w-3/5 flex flex-col justify-center rounded-lg">
        <div className="flex flex-col items-center justify-between space-y-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`py-4 px-12 rounded-lg w-full text-center transition-transform transform hover:scale-105 shadow-md hover:shadow-lg ${colors[index]} ${hoverColors[index]} ${shadowColors[index]} flex items-center h-24`}
            >
              <span className="text-lg font-semibold w-32 text-left">Step {index + 1}:</span>
              <span className="flex-1 text-left">{step}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:w-2/5 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
        <h2 className="text-2xl font-bold text-center text-rose-500 mb-4">Register Now</h2>
        <form className="flex flex-col space-y-4 flex-grow">
          <input type="text" placeholder="Full Name" className="p-3 border rounded-lg" />
          <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
          <input type="tel" placeholder="Mobile Number" className="p-3 border rounded-lg" />
          <textarea placeholder="Add Summary" className="p-3 border rounded-lg h-24"></textarea>
          <button type="submit" className="bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-400">I'm Interested..</button>
        </form>
      </div>
    </div></section>
  );
};

export default StepsSection;
