import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "@/context/student-context";
import { AuthContext } from "@/context/auth-context";
import { checkCoursePurchaseInfoService } from "@/services";
import { Star } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";

function FeaturedCourses() {
  const { studentViewCoursesList } = useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleCourseNavigate(courseId) {
    try {
      const response = await checkCoursePurchaseInfoService(courseId, auth?.user?._id);
      if (response?.success) {
        const path = response.data
          ? `/course-progress/${courseId}`
          : `/course/details/${courseId}`;
        navigate(path);
      } else {
        alert("Unable to navigate to the course. Please try again.");
      }
    } catch (error) {
      console.error("Error navigating to the course:", error);
      alert("An error occurred while checking course access.");
    }
  }

  return (
    <section className="py-12 px-4 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold mb-3 text-center">Most Popular Courses</h2>
      <p className="text-gray-500 mb-8 text-center">
        Choose from hundreds of courses from specialist organizations
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
          studentViewCoursesList.map((courseItem) => (
            <div
              key={courseItem?._id}
              onClick={() => handleCourseNavigate(courseItem?._id)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Course Image */}
              <img
                src={courseItem?.image}
                alt={courseItem?.title}
                className="w-full h-44 object-cover rounded-t-2xl"
              />

              <div className="p-4">
                {/* Badge */}
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded mb-2">
                  {courseItem?.level || "All level"}
                </span>

                {/* Title */}
                <h3 className="text-md font-semibold text-gray-800 mb-1 leading-snug">
                  {courseItem?.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {courseItem?.subtitle || "Course description coming soon..."}
                </p>

                {/* Rating */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 mr-0.5 ${
                        i < Math.round(courseItem?.rating || 4)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 font-medium">
                    {courseItem?.rating || "4.5"}/5.0
                  </span>
                </div>

                <hr className="my-3" />

                {/* Footer Info */}
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <FaRegClock className="w-4 h-4" />
                    {courseItem?.duration || "12h 56m"}
                  </div>
                  <div className="flex items-center gap-1">
                    <PiChalkboardTeacher className="w-4 h-4" />
                    {courseItem?.lectures || "15"} lectures
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No Courses Found</p>
        )}
      </div>
    </section>
  );
}

export default FeaturedCourses;
