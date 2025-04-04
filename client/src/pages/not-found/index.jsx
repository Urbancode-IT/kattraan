import { Link } from "react-router-dom"; 
 
import notfound from "@/assets/img/error.gif";

import { useEffect } from "react";
import Footer from "@/components/student-view/footer";
import Header from "@/components/student-view/header";



const NotFoundPage= () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <div className="text-center">
          <img
            src={notfound}
            className="h-50 mx-auto mb-6"
            alt="Error 404"
          />
          <h1 className="text-6xl md:text-8xl font-bold text-red-600">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2">Oh no, something went wrong!</h2>
          <p className="text-gray-600 mt-2 mb-6">
            Either something went wrong or this page doesn’t exist anymore.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Take me to Homepage
          </Link>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;




