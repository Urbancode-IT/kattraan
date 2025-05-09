import { Monitor, UserCircle, GraduationCap, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: (
      <Monitor className="text-yellow-500 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "10K",
    label: "Online Courses",
    bg: "bg-yellow-50",
  },
  {
    icon: (
      <UserCircle className="text-blue-900 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "200+",
    label: "Expert Tutors",
    bg: "bg-gray-200",
  },
  {
    icon: (
      <GraduationCap className="text-purple-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "60K+",
    label: "Online Students",
    bg: "bg-purple-100",
  },
  {
    icon: (
      <BadgeCheck className="text-cyan-600 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
    ),
    value: "6K+",
    label: "Certified Courses",
    bg: "bg-cyan-100",
  },
];

function StatsHighlights() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-14 sm:px-6 md:px-12 lg:px-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4 ${item.bg} hover:shadow-lg transition duration-300 ease-in-out`}
          >
            <div className="p-4 bg-white rounded-full shadow">{item.icon}</div>

            <div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                {item.value}
              </h4>
              <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsHighlights;
