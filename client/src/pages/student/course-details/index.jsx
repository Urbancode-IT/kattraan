// ✅ Full UI with Sidebar Instructor, Language, Tags & Main Content Polished + Dynamic Duration Calculation
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import VideoPlayer from "@/components/video-player";
import { AuthContext } from "@/context/auth-context";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  createPaymentService,
  fetchStudentViewCourseDetailsService,
} from "@/services";
import { CheckCircle, Globe, Lock, PlayCircle } from "lucide-react";
import { RAZORPAY_KEY } from "@/config";

function StudentViewCourseDetailsPage() {
  const {
    studentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
    loadingState,
    setLoadingState,
  } = useContext(StudentContext);

  const { auth } = useContext(AuthContext);
  const [displayCurrentVideoFreePreview, setDisplayCurrentVideoFreePreview] = useState(null);
  const [showFreePreviewDialog, setShowFreePreviewDialog] = useState(false);
  const [approvalUrl, setApprovalUrl] = useState("");
  const [totalDuration, setTotalDuration] = useState("0m");

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  async function fetchStudentViewCourseDetails() {
    const check = await checkCoursePurchaseInfoService(currentCourseDetailsId, auth?.user._id);
    if (check?.success && check?.data) return navigate(`/course-progress/${currentCourseDetailsId}`);

    const res = await fetchStudentViewCourseDetailsService(currentCourseDetailsId);
    if (res?.success) {
      setStudentViewCourseDetails(res?.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  function handleSetFreePreview(video) {
    setDisplayCurrentVideoFreePreview(video?.videoUrl);
  }

  function formatDuration(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours > 0 ? `${hours}h ` : ""}${minutes}m`;
  }

  useEffect(() => {
    async function calculateTotalVideoDuration() {
      const durations = await Promise.all(
        studentViewCourseDetails?.curriculum?.map((item) => {
          return new Promise((resolve) => {
            const video = document.createElement("video");
            video.src = item.videoUrl;
            video.onloadedmetadata = () => resolve(video.duration);
            video.onerror = () => resolve(0);
          });
        }) || []
      );
      const total = durations.reduce((acc, d) => acc + d, 0);
      setTotalDuration(formatDuration(total));
    }

    if (studentViewCourseDetails?.curriculum?.length > 0) {
      calculateTotalVideoDuration();
    }
  }, [studentViewCourseDetails]);

  async function handleCreatePayment() {
    try {
      const payload = {
        userId: auth?.user?._id,
        courseId: studentViewCourseDetails?._id,
        coursePricing: studentViewCourseDetails?.pricing,
        courseTitle: studentViewCourseDetails?.title,
      };

      const response = await createPaymentService(payload);
      if (response.success) {
        const { razorpayOrderId } = response.data;
        const options = {
          key: RAZORPAY_KEY,
          amount: payload.coursePricing * 100,
          currency: "INR",
          name: "Urbancode Training and Solutions",
          description: payload.courseTitle,
          order_id: razorpayOrderId,
          handler: async (res) => {
            alert("Payment Successful!");
            navigate(`/course-progress/${payload.courseId}`);
          },
          prefill: {
            name: auth?.user?.userName,
            email: auth?.user?.userEmail,
          },
          theme: { color: "#F37254" },
        };
        const razorpay = new Razorpay(options);
        razorpay.open();
        razorpay.on("payment.failed", () => alert("Payment failed. Please try again."));
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred while initiating payment.");
    }
  }

  useEffect(() => {
    if (displayCurrentVideoFreePreview !== null) setShowFreePreviewDialog(true);
  }, [displayCurrentVideoFreePreview]);

  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  useEffect(() => {
    if (!location.pathname.includes("course/details")) {
      setStudentViewCourseDetails(null);
      setCurrentCourseDetailsId(null);
    }
  }, [location.pathname]);

  if (loadingState) return <Skeleton />;
  if (approvalUrl !== "") window.location.href = approvalUrl;

  const previewIndex = studentViewCourseDetails?.curriculum?.findIndex((v) => v.freePreview) ?? -1;
  const tags = studentViewCourseDetails?.tags || ["seo", "ads", "marketing", "linkedin"];
  const instructorName = studentViewCourseDetails?.instructorName || "Instructor";
  const language = studentViewCourseDetails?.primaryLanguage || "English";

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{studentViewCourseDetails?.title}</h1>
        <p className="text-gray-600 mb-4">{studentViewCourseDetails?.subtitle}</p>

        <div className="aspect-video rounded overflow-hidden mb-4">
          <VideoPlayer
            url={previewIndex !== -1 ? studentViewCourseDetails?.curriculum[previewIndex]?.videoUrl : ""}
            width="100%"
            height="100%"
          />
        </div>

        <Card className="mb-6">
          <CardHeader><CardTitle>Course description</CardTitle></CardHeader>
          <CardContent><p>{studentViewCourseDetails?.description}</p></CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader><CardTitle>What you’ll learn</CardTitle></CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {studentViewCourseDetails?.objectives?.split(",")?.map((obj, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={16} /> {obj.trim()}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Curriculum</CardTitle></CardHeader>
          <CardContent>
            <ul className="divide-y text-sm">
              {studentViewCourseDetails?.curriculum?.map((item, idx) => (
                <li
                  key={idx}
                  onClick={item.freePreview ? () => handleSetFreePreview(item) : null}
                  className={`flex justify-between py-2 ${item.freePreview ? "cursor-pointer text-blue-600" : "text-gray-400 cursor-not-allowed"}`}
                >
                  <div className="flex items-center gap-2">
                    {item.freePreview ? <PlayCircle size={16} /> : <Lock size={16} />}
                    <span>{item.title}</span>
                  </div>
                  <span className="text-xs">{item.duration || ""}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <aside className="space-y-6">
        <Card className="p-4 shadow">
          <div className="mb-4">
            {studentViewCourseDetails?.image ? (
              <img src={studentViewCourseDetails.image} className="w-full h-48 object-cover rounded" alt="Course" />
            ) : (
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">No Image</div>
            )}
          </div>
          <div className="text-center mb-4">
            <p className="text-3xl font-bold">₹{studentViewCourseDetails?.pricing}</p>
          </div>
          <Button onClick={handleCreatePayment} className="w-full bg-green-600 text-white hover:bg-green-700">Buy now</Button>
        </Card>

        <Card className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">
            {instructorName[0]}
          </div>
          <div>
            <p className="font-semibold">{instructorName}</p>
            <p className="text-xs text-gray-500">Instructor</p>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-2">Course Info</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li className="flex items-center gap-2"><Globe size={14} /> Language: {language}</li>
            <li>Lectures: {studentViewCourseDetails?.totalLectures || studentViewCourseDetails?.curriculum?.length || 0}</li>
            <li>Level: {studentViewCourseDetails?.level || "Beginner"}</li>
            <li>Duration: {totalDuration}</li>
          </ul>
        </Card>

        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-2">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="border px-2 py-1 text-xs rounded text-gray-600">{tag}</span>
            ))}
          </div>
        </Card>
      </aside>

      <Dialog open={showFreePreviewDialog} onOpenChange={() => { setShowFreePreviewDialog(false); setDisplayCurrentVideoFreePreview(null); }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader><DialogTitle>Course Preview</DialogTitle></DialogHeader>
          <div className="aspect-video mb-4">
            <VideoPlayer url={displayCurrentVideoFreePreview} width="100%" height="100%" />
          </div>
          <div className="flex flex-col gap-1 text-sm">
            {studentViewCourseDetails?.curriculum?.filter(v => v.freePreview)?.map((item, idx) => (
              <p key={idx} onClick={() => handleSetFreePreview(item)} className="cursor-pointer text-blue-600 hover:underline">{item.title}</p>
            ))}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StudentViewCourseDetailsPage;
