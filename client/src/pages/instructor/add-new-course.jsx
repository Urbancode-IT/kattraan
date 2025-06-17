import CourseCurriculum from "@/components/instructor-view/courses/add-new-course/course-curriculum";
import CourseLanding from "@/components/instructor-view/courses/add-new-course/course-landing";
import CourseSettings from "@/components/instructor-view/courses/add-new-course/course-settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  courseCurriculumInitialFormData,
  courseLandingInitialFormData,
} from "@/config";
import { AuthContext } from "@/context/auth-context";
import { InstructorContext } from "@/context/instructor-context";
import {
  addNewCourseService,
  fetchInstructorCourseDetailsService,
  updateCourseByIdService,
} from "@/services";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddNewCoursePage() {
  const {
    courseLandingFormData,
    courseCurriculumFormData,
    setCourseLandingFormData,
    setCourseCurriculumFormData,
    currentEditedCourseId,
    setCurrentEditedCourseId,
  } = useContext(InstructorContext);

  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const params = useParams();

<<<<<<< HEAD
  console.log(params);
=======
  // Initialize edit mode if courseId param is present
  useEffect(() => {
    if (params?.courseId) {
      setCurrentEditedCourseId(params.courseId);
    }
  }, [params.courseId, setCurrentEditedCourseId]);

  // Fetch course details when editing
  useEffect(() => {
    if (currentEditedCourseId !== null) {
      fetchCurrentCourseDetails();
    }
  }, [currentEditedCourseId]);
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
<<<<<<< HEAD

    return value === "" || value === null || value === undefined;
  }

  function validateFormData() {
    for (const key in courseLandingFormData) {
      if (isEmpty(courseLandingFormData[key])) {
        return false;
      }
    }

    let hasFreePreview = false;

    for (const item of courseCurriculumFormData) {
      if (
        isEmpty(item.title) ||
        isEmpty(item.videoUrl) ||
        isEmpty(item.public_id)
      ) {
        return false;
      }

      if (item.freePreview) {
        hasFreePreview = true; //found at least one free preview
      }
    }

    return hasFreePreview;
=======
    return value === "" || value === null || value === undefined;
  }

  // Simplified validation: all landing fields filled + at least one lecture with title & video
  function validateFormData() {
    // Validate landing page fields
    const landingInvalid = Object.values(courseLandingFormData).some(isEmpty);
    if (landingInvalid) return false;

    // At least one curriculum item
    if (courseCurriculumFormData.length === 0) return false;

    // Each curriculum item needs title and videoUrl
    for (const item of courseCurriculumFormData) {
      if (isEmpty(item.title) || isEmpty(item.videoUrl)) {
        return false;
      }
    }

    return true;
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
  }

  async function handleCreateCourse() {
    const courseFinalFormData = {
      instructorId: auth?.user?._id,
      instructorName: auth?.user?.userName,
<<<<<<< HEAD
      date: new Date(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublised: true,
    };

    const response =
      currentEditedCourseId !== null
=======
      date: new Date().toISOString(),
      ...courseLandingFormData,
      students: [],
      curriculum: courseCurriculumFormData,
      isPublished: true,
    };

    console.log("Submitting course:", courseFinalFormData);

    try {
      const response = currentEditedCourseId
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
        ? await updateCourseByIdService(
            currentEditedCourseId,
            courseFinalFormData
          )
        : await addNewCourseService(courseFinalFormData);

<<<<<<< HEAD
    if (response?.success) {
      setCourseLandingFormData(courseLandingInitialFormData);
      setCourseCurriculumFormData(courseCurriculumInitialFormData);
      navigate(-1);
      setCurrentEditedCourseId(null);
    }

    console.log(courseFinalFormData, "courseFinalFormData");
  }

  async function fetchCurrentCourseDetails() {
    const response = await fetchInstructorCourseDetailsService(
      currentEditedCourseId
    );

    if (response?.success) {
      const setCourseFormData = Object.keys(
        courseLandingInitialFormData
      ).reduce((acc, key) => {
        acc[key] = response?.data[key] || courseLandingInitialFormData[key];

        return acc;
      }, {});

      console.log(setCourseFormData, response?.data, "setCourseFormData");
      setCourseLandingFormData(setCourseFormData);
      setCourseCurriculumFormData(response?.data?.curriculum);
    }

    console.log(response, "response");
  }

  useEffect(() => {
    if (currentEditedCourseId !== null) fetchCurrentCourseDetails();
  }, [currentEditedCourseId]);

  useEffect(() => {
    if (params?.courseId) setCurrentEditedCourseId(params?.courseId);
  }, [params?.courseId]);

  console.log(params, currentEditedCourseId, "params");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-extrabold mb-5">Create a new course</h1>
=======
      console.log("Course service response:", response);

      if (response?.success) {
        // Reset forms and exit
        setCourseLandingFormData(courseLandingInitialFormData);
        setCourseCurriculumFormData(courseCurriculumInitialFormData);
        setCurrentEditedCourseId(null);
        navigate(-1);
      } else {
        console.error("Course creation failed:", response?.message);
      }
    } catch (err) {
      console.error("Error in handleCreateCourse:", err);
    }
  }

  async function fetchCurrentCourseDetails() {
    try {
      const response = await fetchInstructorCourseDetailsService(
        currentEditedCourseId
      );
      console.log("Fetched course details:", response);

      if (response?.success) {
        // Merge API data into initial form data shape
        const initial = courseLandingInitialFormData;
        const setCourseFormData = Object.keys(initial).reduce((acc, key) => {
          acc[key] = response.data[key] ?? initial[key];
          return acc;
        }, {});

        setCourseLandingFormData(setCourseFormData);
        setCourseCurriculumFormData(
          response.data.curriculum || initial.curriculum
        );
      }
    } catch (err) {
      console.error("Error fetching course details:", err);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-extrabold">
          {currentEditedCourseId ? "Edit Course" : "Create a New Course"}
        </h1>
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
        <Button
          disabled={!validateFormData()}
          className="text-sm tracking-wider font-bold px-8"
          onClick={handleCreateCourse}
        >
<<<<<<< HEAD
          SUBMIT
        </Button>
      </div>
      <Card>
        <CardContent>
          <div className="container mx-auto p-4">
            <Tabs defaultValue="curriculum" className="space-y-4">
              <TabsList>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="course-landing-page">
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="curriculum">
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value="course-landing-page">
                <CourseLanding />
              </TabsContent>
              <TabsContent value="settings">
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
=======
          {currentEditedCourseId ? "UPDATE" : "SUBMIT"}
        </Button>
      </div>

      <Card>
        <CardContent>
          <Tabs defaultValue="curriculum" className="space-y-4">
            <TabsList>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="course-landing-page">
                Course Landing Page
              </TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum">
              <CourseCurriculum />
            </TabsContent>

            <TabsContent value="course-landing-page">
              <CourseLanding />
            </TabsContent>

            <TabsContent value="settings">
              <CourseSettings />
            </TabsContent>
          </Tabs>
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
        </CardContent>
      </Card>
    </div>
  );
}

export default AddNewCoursePage;
