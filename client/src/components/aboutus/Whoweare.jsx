import { Button } from "@/components/ui/button";
import teamImg from "@/assets/img/aboutus/team.jpg";

const Whoweare = () =>{
    return(
        <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white p-6">
        <div className="relative w-full md:w-1/2 p-6 max-w-sm mx-auto md:max-w-none">
          <div className="relative z-10">
            <img
              src={teamImg} // Replace with actual image URL
              alt="Team Kattraan"
              className="w-full rounded-lg shadow-md"
            />
            <div className="absolute bottom-4 left-4 bg-rose-500 text-white py-2 px-4 rounded-lg shadow-lg backdrop-blur-sm">
              <p className="text-sm font-semibold">Team Kattraan</p>
              <p className="text-xs">Web Development</p>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 opacity-50 transform -translate-x-3 -translate-y-3 rounded-md"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500 opacity-50 transform -translate-x-3 -translate-y-3 rounded-md"></div>
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-gray-600">
          <h4 className="text-blue-500 text-sm">About Team Kattraan</h4>
          <h2 className="text-3xl font-bold my-5 text-blue-800">
            We are Creative Tech Enthusiasts working since 2015
          </h2>
          <p className="mt-4">
            Kattraan is your trusted partner in education and career growth. We
            are a premier educational institute dedicated to empowering learners
            with the skills and knowledge they need to excel in today's
            competitive world.
          </p>
          <p className="mt-4">
            At Kattraan, we believe in the transformative power of education.
            Our mission is to provide access to quality education and career
            development opportunities for individuals from all walks of life.
          </p>
          <p className="mt-4">
            We offer a wide range of computer courses, language training, and
            career development programs designed to cater to students,
            professionals, and job seekers. Whether you are looking to enhance
            your technical expertise, improve communication skills, or gain
            real-world experience through internships, we have the right program
            for you.
          </p>
          <Button
            className="mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-rose-600"
            aria-label="Contact Team Kattraan"
          >
            Contact Us
          </Button>
        </div>
      </section>
    )};

export default Whoweare;