import FormControls from "@/components/common-form/form-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);
  return (
    <div className="w-full">
      <Card className="rounded-2xl shadow-lg border border-gray-100 bg-white w-full">
        <CardHeader className="bg-purple-50 rounded-t-2xl border-b border-gray-100 px-10 py-6">
          <CardTitle className="text-2xl font-bold text-purple-700">Course Landing Page</CardTitle>
        </CardHeader>
        <CardContent className="px-10 py-12 space-y-10">
          <div className="space-y-6">
            <FormControls
              formControls={courseLandingPageFormControls}
              formData={courseLandingFormData}
              setFormData={setCourseLandingFormData}
            />
          </div>
          <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Course Category</label>
              <select
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-200"
                value={courseLandingFormData.category || ""}
                onChange={e => setCourseLandingFormData({ ...courseLandingFormData, category: e.target.value })}
              >
                <option value="">Select category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="business">Business</option>
                <option value="marketing">Marketing</option>
                <option value="personal">Personal Development</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Course Level</label>
              <select
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-purple-200"
                value={courseLandingFormData.level || ""}
                onChange={e => setCourseLandingFormData({ ...courseLandingFormData, level: e.target.value })}
              >
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseLanding;
