import MediaProgressbar from "@/components/media-progress-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstructorContext } from "@/context/instructor-context";
import { mediaUploadService } from "@/services";
import { useContext } from "react";

function CourseSettings() {
  const {
    courseLandingFormData,
    setCourseLandingFormData,
    mediaUploadProgress,
    setMediaUploadProgress,
    mediaUploadProgressPercentage,
    setMediaUploadProgressPercentage,
  } = useContext(InstructorContext);

  async function handleImageUploadChange(event) {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append("file", selectedImage);

      try {
        setMediaUploadProgress(true);
        const response = await mediaUploadService(
          imageFormData,
          setMediaUploadProgressPercentage
        );
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response.data.url,
          });
          setMediaUploadProgress(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="w-full">
      <Card className="rounded-2xl shadow-lg border border-gray-100 bg-white w-full">
        <CardHeader className="bg-purple-50 rounded-t-2xl border-b border-gray-100 px-10 py-6">
          <CardTitle className="text-2xl font-bold text-purple-700">Course Settings</CardTitle>
        </CardHeader>
        <div className="p-4">
          {mediaUploadProgress ? (
            <MediaProgressbar
              isMediaUploading={mediaUploadProgress}
              progress={mediaUploadProgressPercentage}
            />
          ) : null}
        </div>
        <CardContent className="px-10 py-12 space-y-10">
          {courseLandingFormData?.image ? (
            <img src={courseLandingFormData.image} className="mb-4 rounded-xl shadow max-h-48 border border-gray-200" />
          ) : (
            <div className="flex flex-col gap-3 mb-4">
              <Label className="font-semibold">Upload Course Image</Label>
              <Input
                onChange={handleImageUploadChange}
                type="file"
                accept="image/*"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Label className="mb-1 font-semibold">Course Language</Label>
              <Input
                type="text"
                placeholder="e.g. English"
                value={courseLandingFormData.language || ""}
                onChange={e => setCourseLandingFormData({ ...courseLandingFormData, language: e.target.value })}
                className="mt-1 rounded-lg"
              />
            </div>
            <div>
              <Label className="mb-1 font-semibold">Course Duration (hours)</Label>
              <Input
                type="number"
                min={1}
                placeholder="e.g. 10"
                value={courseLandingFormData.duration || ""}
                onChange={e => setCourseLandingFormData({ ...courseLandingFormData, duration: e.target.value })}
                className="mt-1 rounded-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CourseSettings;
