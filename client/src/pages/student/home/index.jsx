import { courseCategories } from "@/config";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { StudentContext } from "@/context/student-context";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/student-view/footer";
import FeaturedCourses from "@/components/student-view/home/featured-courses";
import StatsHighlights from "@/components/student-view/home/stats-highlights";
import BecomeInstructor from "@/components/student-view/home/become-instructor";
import TestimonialSection from "@/components/student-view/home/testimonial-section";
// import CourseCategories from "@/components/student-view/home/coursecategories";
import HeroSection from "@/components/student-view/home/hero-section";



import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = { category: [getCurrentId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    try {
      const response = await fetchStudentViewCourseListService();
      if (response?.success) {
        setStudentViewCoursesList(response?.data);
      } else {
        console.error("Failed to fetch courses:", response?.message);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }

  async function handleCourseNavigate(getCurrentCourseId) {
    try {
      const response = await checkCoursePurchaseInfoService(
        getCurrentCourseId,
        auth?.user?._id
      );

      if (response?.success) {
        navigate(
          response?.data
            ? `/course-progress/${getCurrentCourseId}`
            : `/course/details/${getCurrentCourseId}`
        );
      } else {
        alert("Unable to navigate to the course. Please try again.");
      }
    } catch (error) {
      console.error("Error navigating to the course:", error);
      alert("An error occurred while checking course access.");
    }
  }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <HeroSection />
      <StatsHighlights />

      {/* Course Categories Section */}
      <section className="py-12 px-4 lg:px-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">Browse Top Categories</h2>
          <p className="text-base text-gray-500 mb-8 text-center">Explore trending topics and find your next skill to master.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {courseCategories.map((categoryItem) => (
              <Button
                className="px-6 py-3 rounded-full font-semibold text-base bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 hover:text-purple-900 shadow-sm transition-all duration-200"
                variant="outline"
                key={categoryItem.id}
                onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
              >
                {categoryItem.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <FeaturedCourses />
      <BecomeInstructor />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default StudentHomePage;
