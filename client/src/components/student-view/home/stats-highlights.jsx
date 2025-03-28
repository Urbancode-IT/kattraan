import { Monitor, UserCircle, GraduationCap, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: <Monitor className="text-yellow-500 w-8 h-8" />,
    value: "10K",
    label: "Online Courses",
    bg: "bg-yellow-50",
  },
  {
    icon: <UserCircle className="text-blue-900 w-8 h-8" />,
    value: "200+",
    label: "Expert Tutors",
    bg: "bg-gray-200",
  },
  {
    icon: <GraduationCap className="text-purple-600 w-8 h-8" />,
    value: "60K+",
    label: "Online Students",
    bg: "bg-purple-100",
  },
  {
    icon: <BadgeCheck className="text-cyan-600 w-8 h-8" />,
    value: "6K+",
    label: "Certified Courses",
    bg: "bg-cyan-100",
  },
];

function StatsHighlights() {
  return (
    <section className="py-10 px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 flex items-center space-x-4 ${item.bg}`}
          >
            <div>{item.icon}</div>
            <div>
              <h4 className="text-xl font-bold">{item.value}</h4>
              <p className="text-sm text-gray-800">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsHighlights;
