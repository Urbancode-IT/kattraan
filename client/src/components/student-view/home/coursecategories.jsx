import { courseCategories } from "@/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GraduationCap, Star, TrendingUp, Settings2 } from "lucide-react"; // Optional: Lucide icons

const iconMap = {
  tech: <Settings2 className="w-5 h-5 mr-2" />,
  trending: <TrendingUp className="w-5 h-5 mr-2" />,
  featured: <Star className="w-5 h-5 mr-2" />,
  academic: <GraduationCap className="w-5 h-5 mr-2" />,
};

function CourseCategories() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(
    courseCategories[0]?.id || ""
  );

  const handleNavigateToCoursesPage = (categoryId) => {
    setActiveCategory(categoryId);
    const currentFilter = { category: [categoryId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  return (
  <section className="py-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-white to-purple-50 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
          🚀 Most Popular Courses
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-8">
          Choose from hundreds of high-quality courses offered by top experts
          and institutions.
        </p>
      </div>

  <div className="bg-white px-6 py-8 rounded-2xl shadow-lg border border-gray-200 max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleNavigateToCoursesPage(category.id)}
              className={`flex items-center px-5 py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 ease-in-out
            ${
              activeCategory === category.id
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-purple-50 text-purple-700 hover:bg-purple-100"
            }`}
            >
              {iconMap[category.icon] || null}
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseCategories;
