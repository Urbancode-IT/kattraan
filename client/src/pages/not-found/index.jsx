import { Link } from "react-router-dom"; 
import { ArrowLeft } from "lucide-react"; 
import notfound from "@/assets/img/not-found.svg";


function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
        <p className="text-2xl font-bold mt-4">Oops! Page not found</p>
        <p className="mt-2 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      <div className="mt-10 max-w-md">
        <img
          src={notfound} // Replace with your custom image
          alt="Page not found illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
