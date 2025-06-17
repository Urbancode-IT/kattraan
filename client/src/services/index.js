import axiosInstance from "@/api/axiosInstance";

// services/auth.js or wherever this is defined

export async function registerService(formData) {
  const { data } = await axiosInstance.post("/auth/register", formData);
  return data;
}

<<<<<<< HEAD



=======
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
export async function loginService(formData) {
  const { data } = await axiosInstance.post("/auth/login", formData);

  return data;
}

export async function checkAuthService() {
  const { data } = await axiosInstance.get("/auth/check-auth");

  return data;
}

<<<<<<< HEAD

export async function becomeInstructorService({ userName, userEmail, password }) {
=======
export async function becomeInstructorService({
  userName,
  userEmail,
  password,
}) {
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
  const { data } = await axiosInstance.post(`/auth/become-instructor`, {
    userName,
    userEmail,
    password,
  });

  return data;
}

<<<<<<< HEAD


export async function mediaUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

  return data;
}

export async function mediaDeleteService(id) {
  const { data } = await axiosInstance.delete(`/media/delete/${id}`);

=======
export async function mediaUploadService(formData, onProgress) {
  // Let Axios/browser set the multipart headers & boundary
  const { data } = await axiosInstance.post("/media/upload", formData, {
    onUploadProgress: (e) => {
      if (onProgress) {
        onProgress(Math.round((e.loaded * 100) / e.total));
      }
    },
  });
  return data;
}

export async function mediaDeleteService(key) {
  const { data } = await axiosInstance.delete(
    `/media/delete/${encodeURIComponent(key)}`
  );
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
  return data;
}

export async function fetchInstructorCourseListService() {
  const { data } = await axiosInstance.get(`/instructor/course/get`);

  return data;
}

<<<<<<< HEAD
export async function addNewCourseService(formData) {
  const { data } = await axiosInstance.post(`/instructor/course/add`, formData);

=======
export async function addNewCourseService(courseData) {
  const { data } = await axiosInstance.post(
    `/instructor/course/add`,
    courseData
  );
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
  return data;
}

export async function fetchInstructorCourseDetailsService(id) {
  const { data } = await axiosInstance.get(
    `/instructor/course/get/details/${id}`
  );

  return data;
}

export async function updateCourseByIdService(id, formData) {
  const { data } = await axiosInstance.put(
    `/instructor/course/update/${id}`,
    formData
  );

  return data;
}

<<<<<<< HEAD
export async function mediaBulkUploadService(formData, onProgressCallback) {
  const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgressCallback(percentCompleted);
    },
  });

=======
export async function mediaBulkUploadService(formData, onProgress) {
  const { data } = await axiosInstance.post("/media/bulk-upload", formData, {
    onUploadProgress: (e) => {
      if (onProgress) {
        onProgress(Math.round((e.loaded * 100) / e.total));
      }
    },
  });
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
  return data;
}

export async function fetchStudentViewCourseListService(query) {
  const { data } = await axiosInstance.get(`/student/course/get?${query}`);

  return data;
}

export async function fetchStudentViewCourseDetailsService(courseId) {
  const { data } = await axiosInstance.get(
    `/student/course/get/details/${courseId}`
  );

  return data;
}

export async function checkCoursePurchaseInfoService(courseId, studentId) {
  const { data } = await axiosInstance.get(
    `/student/course/purchase-info/${courseId}/${studentId}`
  );

  return data;
}

// Updated Razorpay Integration

export async function createPaymentService(orderDetails) {
  // Sends user, course, and pricing details to the backend to create Razorpay order
<<<<<<< HEAD
  const { data } = await axiosInstance.post(`/student/order/create`, orderDetails);
=======
  const { data } = await axiosInstance.post(
    `/student/order/create`,
    orderDetails
  );
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7

  return data; // Contains razorpayOrderId
}

export async function capturePaymentService(paymentDetails) {
  // Sends paymentId and orderId to capture and finalize the payment
<<<<<<< HEAD
  const { data } = await axiosInstance.post(`/student/order/capture`, paymentDetails);
=======
  const { data } = await axiosInstance.post(
    `/student/order/capture`,
    paymentDetails
  );
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7

  return data; // Contains success or failure of payment capture
}

export async function fetchStudentBoughtCoursesService(studentId) {
  const { data } = await axiosInstance.get(
    `/student/courses-bought/get/${studentId}`
  );

  return data;
}

export async function getCurrentCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.get(
    `/student/course-progress/get/${userId}/${courseId}`
  );

  return data;
}

export async function markLectureAsViewedService(userId, courseId, lectureId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/mark-lecture-viewed`,
    {
      userId,
      courseId,
      lectureId,
    }
  );

  return data;
}

export async function resetCourseProgressService(userId, courseId) {
  const { data } = await axiosInstance.post(
    `/student/course-progress/reset-progress`,
    {
      userId,
      courseId,
    }
  );

  return data;
<<<<<<< HEAD
}
=======
}
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
