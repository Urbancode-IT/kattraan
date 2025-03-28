import { courseCategories } from "@/config";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CourseCategories() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(courseCategories[0]?.id || "");

  const handleNavigateToCoursesPage = (categoryId) => {
    setActiveCategory(categoryId);
    const currentFilter = { category: [categoryId] };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/courses");
  };

  return (
    <section className="py-12 px-4 lg:px-20 bg-[#f6f8fa] text-center">
      <h2 className="text-3xl font-bold mb-3">Most Popular Courses</h2>
      <p className="text-gray-500 mb-8">
        Choose from hundreds of courses from specialist organizations
      </p>

      <div className="flex flex-wrap justify-center gap-3 bg-white px-6 py-4 rounded-md shadow">
        {courseCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleNavigateToCoursesPage(category.id)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
              activeCategory === category.id
                ? "bg-blue-600 text-white shadow"
                : "bg-transparent text-blue-700 hover:bg-blue-100"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CourseCategories;
