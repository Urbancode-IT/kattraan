import React from "react";

const BecomeInstructor = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-10">
      <div className="relative bg-[#16a7bd] text-white rounded-lg p-8 sm:p-10 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Background Circles */}
        <div className="absolute w-48 h-48 bg-white/10 rounded-full top-4 left-4 z-0"></div>
        <div className="absolute w-4 h-4 bg-white/20 rounded-full top-8 right-[40%] z-0"></div>
        <div className="absolute w-5 h-5 bg-white/20 rounded-full bottom-8 right-[25%] z-0"></div>

        {/* TEXT */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
            Become an Instructor!
          </h2>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Share your expertise with thousands of eager learners on Kattraan.
            Inspire the next generation, create impact, and grow your personal
            brand while earning on your own terms.
          </p>
        </div>

        {/* CTA BUTTON */}
        <div className="relative z-10">
          <button className="border border-[#FFB433] text-[#FFB433] font-semibold px-6 py-2 rounded-md hover:bg-[#FFB433] hover:text-white transition" href="/instructor">
            Start Teaching Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
