import React from "react";
import banner from "@/assets/img/hero-final.png"; // Use your banner image here
import { FaPlay, FaCheckCircle } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { PiCertificate } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-16 py-12 bg-white">
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
          Limitless learning at your{" "}
          <span className="relative inline-block">
            <span className="bg-yellow-300 px-5">fingertips</span>
          </span>
        </h1>
        <p className="text-gray-600 text-lg">
          Online learning and teaching marketplace with 5K+ courses & 10M
          students. Taught by experts to help you acquire new skills.
        </p>

        {/* FEATURES */}
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-black" />
            Learn with experts
          </span>
          <span className="flex items-center gap-2">
            <PiCertificate className="text-black" />
            Get certificate
          </span>
          <span className="flex items-center gap-2">
            <FaCheckCircle className="text-black" />
            Get membership
          </span>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex items-center gap-4 pt-4">
          <Button className="bg-[#f23d5c] text-white px-6 py-2 rounded-md hover:bg-[#d8314d]">
            Get Started
          </Button>
          <button className="flex items-center gap-2 text-[#0e3eaf] font-medium hover:underline">
            <span className="bg-blue-100 p-2 rounded-full">
              <FaPlay />
            </span>
            Watch video
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE & GRAPHICS */}
      <div className="relative w-full lg:w-[50%] flex justify-center items-center mb-12 lg:mb-0">
        <img
          src={banner}
          alt="Student"
          className="max-w-[400px] lg:max-w-[500px] z-10"
        />

        {/* Decorative light bulb */}
        <div className="absolute top-[25%] left-[10%] text-yellow-500 text-3xl">
          <MdOutlineLightbulb />
        </div>

        {/* Notification Badge */}
        <div className="absolute top-[10%] right-[8%] bg-green-100 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 text-sm z-20">
          <FiUsers className="text-green-600" />
          <div>
            <p className="text-gray-700">Our daily new students</p>
            <p className="text-xs text-gray-500">1K+</p>
          </div>
        </div>

        {/* Congrats Badge */}
        <div className="absolute bottom-[10%] left-[5%] bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-3 z-20">
          <span className="bg-yellow-400 p-2 rounded-full text-white">
            <FaCheckCircle />
          </span>
          <div className="text-sm">
            <p className="font-semibold text-gray-800">Congratulations</p>
            <p className="text-xs text-gray-500">Your admission completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
