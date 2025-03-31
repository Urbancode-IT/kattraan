import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { filterOptions, sortOptions } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { Star } from "lucide-react";
import { FaRegClock } from "react-icons/fa";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function createSearchParamsHelper(filterParams) {
  const queryParams = [];
  for (const [key, value] of Object.entries(filterParams)) {
    if (Array.isArray(value) && value.length > 0) {
      const paramValue = value.join(",");
      queryParams.push(`${key}=${encodeURIComponent(paramValue)}`);
    }
  }
  return queryParams.join("&");
}

function formatDuration(durationStrArray = []) {
  let totalSeconds = 0;
  durationStrArray.forEach((item) => {
    if (item) {
      const parts = item.split(":").map(Number);
      if (parts.length === 2) totalSeconds += parts[0] * 60 + parts[1];
      if (parts.length === 3)
        totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
  });
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  return `${h > 0 ? `${h}h ` : ""}${m}m`;
}

function StudentViewCoursesPage() {
  const [sort, setSort] = useState("price-lowtohigh");
  const [filters, setFilters] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const {
    studentViewCoursesList,
    setStudentViewCoursesList,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  function handleFilterOnChange(getSectionId, getCurrentOption) {
    let cpyFilters = { ...filters };
    const index = Object.keys(cpyFilters).indexOf(getSectionId);
    if (index === -1) {
      cpyFilters[getSectionId] = [getCurrentOption.id];
    } else {
      const idx = cpyFilters[getSectionId].indexOf(getCurrentOption.id);
      if (idx === -1) cpyFilters[getSectionId].push(getCurrentOption.id);
      else cpyFilters[getSectionId].splice(idx, 1);
    }
    setFilters(cpyFilters);
    sessionStorage.setItem("filters", JSON.stringify(cpyFilters));
  }

  async function fetchAllStudentViewCourses(filters, sort) {
    const query = new URLSearchParams({ ...filters, sortBy: sort });
    const response = await fetchStudentViewCourseListService(query);
    if (response?.success) {
      setStudentViewCoursesList(response?.data);
      setLoadingState(false);
    }
  }

  async function handleCourseNavigate(courseId) {
    const response = await checkCoursePurchaseInfoService(courseId, auth?.user?._id);
    const path = response?.data
      ? `/course-progress/${courseId}`
      : `/course/details/${courseId}`;
    navigate(path);
  }

  useEffect(() => {
    const queryString = createSearchParamsHelper(filters);
    setSearchParams(new URLSearchParams(queryString));
  }, [filters]);

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilters(JSON.parse(sessionStorage.getItem("filters")) || {});
  }, []);

  useEffect(() => {
    if (filters && sort) fetchAllStudentViewCourses(filters, sort);
  }, [filters, sort]);

  useEffect(() => () => sessionStorage.removeItem("filters"), []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Course List</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <aside className="space-y-4 col-span-1">
          {Object.keys(filterOptions).map((section) => (
            <div className="border p-4 rounded shadow-sm" key={section}>
              <h3 className="font-semibold mb-2 text-gray-700 uppercase">
                {section}
              </h3>
              {filterOptions[section].map((opt) => (
                <Label
                  key={opt.id}
                  className="flex items-center gap-2 text-sm text-gray-600 mb-1"
                >
                  <Checkbox
                    checked={
                      filters?.[section]?.includes(opt.id) || false
                    }
                    onCheckedChange={() => handleFilterOnChange(section, opt)}
                  />
                  {opt.label}
                </Label>
              ))}
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="col-span-3">
          <div className="flex justify-between items-center mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Sort By
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(value) => setSort(value)}
                >
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="text-sm font-medium text-gray-700">
              {studentViewCoursesList.length} results
            </span>
          </div>

          <div className="space-y-6">
            {studentViewCoursesList?.length > 0 ? (
              studentViewCoursesList.map((courseItem) => {
                const totalDuration = formatDuration(
                  courseItem?.curriculum?.map((c) => c.duration)
                );
                const lectures = courseItem?.curriculum?.length || 0;

                return (
                  <Card
                    key={courseItem?._id}
                    onClick={() => handleCourseNavigate(courseItem._id)}
                    className="hover:shadow-lg cursor-pointer transition border rounded-xl"
                  >
                    <CardContent className="flex p-4 gap-6">
                      <img
                        src={courseItem?.image}
                        alt={courseItem?.title}
                        className="w-40 h-28 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                            {courseItem?.level || "All level"}
                          </span>
                          <div className="flex items-center gap-1 text-yellow-500 text-sm">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < Math.round(courseItem?.rating || 4)
                                    ? "fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="ml-1 font-medium">
                              {courseItem?.rating || "4.5"}/5
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg mt-1 mb-2">
                          {courseItem?.title}
                        </CardTitle>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {courseItem?.subtitle || "Course subtitle..."}
                        </p>

                        <div className="flex mt-3 gap-6 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <FaRegClock className="w-4 h-4" /> {totalDuration}
                          </span>
                          <span className="flex items-center gap-1">
                            <PiChalkboardTeacher className="w-4 h-4" /> {lectures} lectures
                          </span>
                        </div>

                        <div className="mt-2 font-semibold text-lg text-green-600">
                          ₹{courseItem?.pricing}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : loadingState ? (
              <Skeleton className="h-32 w-full" />
            ) : (
              <p className="text-center text-gray-500">No courses found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentViewCoursesPage;
