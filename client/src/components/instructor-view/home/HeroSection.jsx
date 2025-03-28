import React from "react";
import banner from "@/assets/img/instructor-banner-nobg.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white">
              {/* LEFT CONTENT */}
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                  Apply as Instructor
                </h1>
                <p className="text-gray-600 text-lg">
                Share your knowledge and expertise with students around the world. Apply today and start teaching online!
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Button className="bg-[#f23d5c] text-white text-lg px-6 py-2 rounded-md hover:bg-[#d8314d]">
                    Start Teaching Today
                  </Button>
                </div>
              </div>
        
              {/* RIGHT IMAGE & GRAPHICS */}
              <div className="relative w-full lg:w-[50%] flex justify-center items-center mb-12 lg:mb-0">
                <img
                  src={banner}
                  alt="Student"
                />
                  
              </div>
            </section>
    )
};

export default HeroSection;