import React from "react";
import Footer from "@/components/student-view/footer";
import HeroSection from "@/components/instructor-view/home/HeroSection";
import { Card } from "@/components/ui/card";
import CardSection from "@/components/instructor-view/home/CardsSection";
import StatsSection from "@/components/instructor-view/home/StatSection";
import InstructorSignup from "@/components/instructor-view/home/InstructorSignup";
function InstructorHomePage() {

  return (
  <>
    <HeroSection/>
    <StatsSection/>
    <InstructorSignup/>
    <CardSection/>
    <Footer/>
  </>);
    
}

export default InstructorHomePage;
