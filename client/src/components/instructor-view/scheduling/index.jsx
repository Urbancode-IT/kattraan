import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, CalendarClock } from "lucide-react";

const initialSchedules = [
  {
    id: 1,
    className: "Web Development 101",
    instructor: "John Doe",
    date: "2023-09-15",
    time: "10:00 - 12:00",
  },
  {
    id: 2,
    className: "Python Programming",
    instructor: "Jane Smith",
    date: "2023-09-16",
    time: "14:00 - 16:00",
  },
  {
    id: 3,
    className: "Digital Marketing Basics",
    instructor: "Alice Johnson",
    date: "2023-09-17",
    time: "09:00 - 11:00",
  },
];

function InstructorScheduling() {
  const [schedules, setSchedules] = useState(initialSchedules);
  const [newClass, setNewClass] = useState({
    className: "",
    instructor: "",
    date: "",
    timeStart: "",
    timeEnd: "",
  });

  const handleAddSchedule = () => {
    const { className, instructor, date, timeStart, timeEnd } = newClass;
    if (!className || !instructor || !date || !timeStart || !timeEnd) {
      alert("Please fill in all fields");
      return;
    }

    const newSchedule = {
      id: schedules.length + 1,
      className,
      instructor,
      date,
      time: `${timeStart} - ${timeEnd}`,
    };

    setSchedules([newSchedule, ...schedules]);
    setNewClass({
      className: "",
      instructor: "",
      date: "",
      timeStart: "",
      timeEnd: "",
    });
  };

  const handleDelete = (id) => {
    setSchedules(schedules.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <CalendarClock className="text-blue-600" /> Class Schedule
        </h2>
      </div>

      {/* Form to Add New Schedule */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Class Name"
            value={newClass.className}
            onChange={(e) => setNewClass({ ...newClass, className: e.target.value })}
          />
          <input
            type="text"
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Instructor"
            value={newClass.instructor}
            onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
          />
          <input
            type="date"
            className="p-3 border border-gray-300 rounded-md"
            value={newClass.date}
            onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
          />
          <input
            type="time"
            className="p-3 border border-gray-300 rounded-md"
            value={newClass.timeStart}
            onChange={(e) => setNewClass({ ...newClass, timeStart: e.target.value })}
          />
          <input
            type="time"
            className="p-3 border border-gray-300 rounded-md"
            value={newClass.timeEnd}
            onChange={(e) => setNewClass({ ...newClass, timeEnd: e.target.value })}
          />
        </div>
        <div className="text-right">
          <Button className="bg-blue-600 text-white" onClick={handleAddSchedule}>
            + Add Schedule
          </Button>
        </div>
      </div>

      {/* Schedule List Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left border shadow-sm bg-white rounded-lg">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="px-4 py-3">Class Name</th>
              <th className="px-4 py-3">Instructor</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr
                key={schedule.id}
                className="border-t hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-3">{schedule.className}</td>
                <td className="px-4 py-3">{schedule.instructor}</td>
                <td className="px-4 py-3">{schedule.date}</td>
                <td className="px-4 py-3">{schedule.time}</td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(schedule.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
            {schedules.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400 text-sm">
                  No schedules found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InstructorScheduling;
