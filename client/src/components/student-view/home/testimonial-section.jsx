import { Star } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Carolyn Ortiz",
    feedback:
      "Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    name: "Dennis Barrett",
    feedback:
      "At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const mentors = [
  {
    name: "Lori Stevens",
    subject: "Tutor of physics",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "Billy Vasquez",
    subject: "Tutor of chemistry",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Larry Lawson",
    subject: "Tutor of technology",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const TestimonialSection = () => {
  return (
  <section className="relative bg-gradient-to-br from-white to-purple-50 py-32 px-6 sm:px-10 lg:px-24 overflow-hidden">
      {/* Background Circle */}
  <div className="absolute w-[200px] h-[200px] bg-purple-200 rounded-full top-10 left-10 opacity-20 z-0"></div>

      {/* Dot Pattern */}
  <div className="absolute bottom-14 left-[250px] z-0 opacity-40">
        <svg width="150" height="80" fill="none" viewBox="0 0 120 60">
          {[...Array(10)].map((_, i) =>
            [...Array(6)].map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={i * 12}
                cy={j * 12}
                r="1.5"
                fill="#e11d48"
              />
            ))
          )}
        </svg>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <div className="relative space-y-12">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-md">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 text-sm text-center italic mb-4">
              “{testimonials[0].feedback}”
            </p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-center font-semibold text-gray-800">
              {testimonials[0].name}
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-purple-600 text-white p-4 rounded-xl w-60 shadow-lg absolute -bottom-20 left-0">
            <p className="text-lg font-bold mb-1">4.5/5.0</p>
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-300 fill-yellow-300"
                />
              ))}
            </div>
            <p className="text-sm">Based on 3265 ratings</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-md ml-auto">
            <img
              src={testimonials[1].image}
              alt={testimonials[1].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 text-sm text-center italic mb-4">
              “{testimonials[1].feedback}”
            </p>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(testimonials[1].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-center font-semibold text-gray-800">
              {testimonials[1].name}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative pt-20 lg:pt-0">
          {/* Floating Mentor Card */}
          <div className="absolute top-60 right-0 bg-white rounded-xl shadow-lg p-4 w-72 z-20">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-black text-sm">
                100+ Verified Mentors
              </h4>
              <span className="bg-yellow-400 rounded-full p-1">
                <FaCheckCircle className="text-white w-4 h-4" />
              </span>
            </div>
            <div className="space-y-3">
              {mentors.map((mentor, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm">{mentor.name}</p>
                    <p className="text-xs text-gray-500">{mentor.subject}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading and Text */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Some valuable feedback <br /> from our students
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              We’re proud to share the stories of learners who have experienced
              transformation with Kattraan. Real people. Real growth.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-md font-medium">
              View Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
