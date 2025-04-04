import Footer from "@/components/student-view/footer";
import HeroSection from "@/components/aboutus/HeroSection";
import Whoweare from "@/components/aboutus/Whoweare";
import StatsSection from "@/components/instructor-view/home/StatSection";
import AwardsList from "@/components/aboutus/AwardsList";
import ContactUs from "@/components/aboutus/ContactUs";
import TestimonialSlider from "@/components/aboutus/TestimonialSlider";
import FeaturedCourses from "@/components/student-view/home/featured-courses";
const AboutUsPage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      {/*who we are section*/}
      <Whoweare />
      <AwardsList/>
      <ContactUs/>
      <FeaturedCourses/>
      <TestimonialSlider/>
      <Footer />
    </>
  );
};

export default AboutUsPage;
