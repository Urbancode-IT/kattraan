import React from "react";

const InstructorForm = () => {
  return (<div className="py-12">
    <h2 className="text-4xl font-semibold mb-4 text-center ">How to become an Instructor?</h2>
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-5xl mx-auto">
         
      {/* Form Section */}
      <div className="bg-white p-6 shadow-lg rounded-lg w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Please fill this form</h2>
        <form className="space-y-4">
          <div className="flex gap-2">
            <input type="text" placeholder="Name *" className="w-1/2 p-2 border rounded-md" />
            <input type="email" placeholder="Email *" className="w-1/2 p-2 border rounded-md" />
          </div>
          <input type="tel" placeholder="Phone number *" className="w-full p-2 border rounded-md" />
          <textarea placeholder="Add Summary *" className="w-full p-2 border rounded-md h-24"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">Submit form</button>
        </form>
      </div>
      
      {/* Information Section */}
      <div className="w-full md:w-1/2">
       
        <p className="text-gray-600 text-base">
        Kattraan is dedicated to providing high-quality computer education, empowering students with the latest technological skills. If you are passionate about teaching and have expertise in programming, web development, data science, networking, or other computer-related fields, we invite you to join our team of educators. As a teacher at Kattraan, you will have the opportunity to mentor students, design interactive lessons, and contribute to their career growth in the ever-evolving tech industry.
        </p> <br/>
         <p className="text-gray-600 text-base">
        To become a teacher at Kattraan, applicants should possess strong subject knowledge, excellent communication skills, and a commitment to student success. Previous teaching experience or industry expertise is preferred. Join Kattraan today and make a difference in shaping the next generation of tech professionals!
        </p>
      </div>
    </div>
 </div> );
};

export default InstructorForm;
