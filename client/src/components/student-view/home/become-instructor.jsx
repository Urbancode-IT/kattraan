import React from "react";

const BecomeInstructor = () => {
  return (
    <section className="bg-gradient-to-br from-white to-purple-50 px-4 sm:px-8 lg:px-16 py-14">
      <div className="relative bg-white text-gray-900 rounded-2xl p-8 sm:p-12 lg:p-20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
        {/* Background Circles */}
        <div className="absolute w-48 h-48 bg-purple-100 rounded-full top-4 left-4 z-0"></div>
        <div className="absolute w-4 h-4 bg-purple-200 rounded-full top-8 right-[40%] z-0"></div>
        <div className="absolute w-5 h-5 bg-purple-200 rounded-full bottom-8 right-[25%] z-0"></div>

        {/* TEXT */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-gray-900">
            Become an Instructor!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Share your expertise with thousands of eager learners on Kattraan. Inspire the next generation, create impact, and grow your personal brand while earning on your own terms.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="relative z-10">
          <a href="/instructor">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow transition text-base">
              Start Teaching Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
