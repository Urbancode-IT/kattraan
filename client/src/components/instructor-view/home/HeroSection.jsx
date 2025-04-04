import React from "react";
import banner from "@/assets/img/instructor-home/tutor.png";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import {useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white">
      {/* LEFT CONTENT */}
      <div className="lg:w-2/3 space-y-2">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-12">
          Apply as Instructor
        </h1>
        <p className="text-gray-600 text-lg">
          Share your knowledge and expertise with students around the world.
          Apply today and start teaching online!
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button
            variant="outline"
            className="bg-rose-500 text-white text-lg px-6 py-3 rounded-md hover:bg-rose-400"
            onClick={() => navigate("/instructor-auth")}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* RIGHT IMAGE & GRAPHICS */}
      <div className=" w-full lg:w-[50%] flex justify-center items-center mb-12 lg:mb-0">
        <img src={banner} alt="Student" />
      </div>
    </section>
  );
=======
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

  const navigate = useNavigate();
    return (
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white">
              {/* LEFT CONTENT */}
              <div className="lg:w-2/3 space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-12">
                  Apply as Instructor
                </h1>
                <p className="text-gray-600 text-lg">
                Share your knowledge and expertise with students around the world. Apply today and start teaching online!
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Button className="bg-rose-500 text-white text-lg px-6 py-3 rounded-md hover:bg-rose-400" onClick={() => navigate("/instructor-auth")}>
                    Start Teaching Today
                  </Button>
                </div>
              </div>
        
              {/* RIGHT IMAGE & GRAPHICS */}
              <div className=" w-full lg:w-[50%] flex justify-center items-center mb-12 lg:mb-0">
                <img
                  src={banner}
                  alt="Student"
                />
                  
              </div>
            </section>
    )
>>>>>>> be1ef7f612d10f00a8223d344a430ea204dcc3e8
};

export default HeroSection;
