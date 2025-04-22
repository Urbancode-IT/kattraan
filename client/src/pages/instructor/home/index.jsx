import React from "react";
import Footer from "@/components/student-view/footer";
import HeroSection from "@/components/instructor-view/home/HeroSection";
import { Card } from "@/components/ui/card";
import CardsSection from "@/components/instructor-view/home/CardsSection";
import StatsSection from "@/components/instructor-view/home/StatSection";

import StepsSection from "@/components/instructor-view/home/StepsSection";

import Testimonials from "@/components/instructor-view/home/Testimonials";
function InstructorHomePage() {

  return (
  <>
    <HeroSection/>
    <StatsSection/>
    <CardsSection/>
    <StepsSection/>
    <Testimonials/>
    
    <Footer/>
  </>);
    
}

export default InstructorHomePage;
