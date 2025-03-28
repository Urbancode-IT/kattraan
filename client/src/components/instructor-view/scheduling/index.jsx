import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button is a reusable component
import { Edit, Trash2 } from "lucide-react"; // Icons for edit and delete

const schedulesData = [
  {
    id: 1,
    className: "Web Development 101",
    instructor: "John Doe",
    date: "2023-09-15",
    time: "10:00 AM - 12:00 PM",
  },
  {
    id: 2,
    className: "Python Programming",
    instructor: "Jane Smith",
    date: "2023-09-16",
    time: "2:00 PM - 4:00 PM",
  },
  {
    id: 3,
    className: "Digital Marketing Basics",
    instructor: "Alice Johnson",
    date: "2023-09-17",
    time: "9:00 AM - 11:00 AM",
  },
];

function InstructorScheduling() {
  const [schedules, setSchedules] = useState(schedulesData);
  const [newClass, setNewClass] = useState({
    className: "",
    instructor: "",
    date: "",
    time: "",
  });

  const handleEdit = (id) => {
    // Edit logic
    console.log("Editing schedule with id:", id);
  };

  const handleDelete = (id) => {
    // Delete logic
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  const handleAddSchedule = () => {
    const newSchedule = {
      ...newClass,
      id: schedules.length + 1, // Generate a new id (for demo purposes)
    };
    setSchedules([...schedules, newSchedule]);
    setNewClass({
      className: "",
      instructor: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Class Schedule</h2>
        <Button className="bg-blue-500 text-white" onClick={handleAddSchedule}>
          + Add New Schedule
        </Button>
      </div>

      {/* New Class Form */}
      <div className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            className="p-4 border-2 border-gray-300 rounded-lg w-1/3"
            placeholder="Class Name"
            value={newClass.className}
            onChange={(e) => setNewClass({ ...newClass, className: e.target.value })}
          />
          <input
            type="text"
            className="p-4 border-2 border-gray-300 rounded-lg w-1/3"
            placeholder="Instructor Name"
            value={newClass.instructor}
            onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
          />
          <input
            type="date"
            className="p-4 border-2 border-gray-300 rounded-lg"
            value={newClass.date}
            onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
          />
          <input
            type="time"
            className="p-4 border-2 border-gray-300 rounded-lg"
            value={newClass.time}
            onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
          />
        </div>
        <Button className="bg-green-500 text-white" onClick={handleAddSchedule}>
          Add Schedule
        </Button>
      </div>

      {/* Class Schedule List */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto mt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Class Name</th>
              <th className="py-2 px-4 text-left">Instructor</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Time</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id} className="border-b">
                <td className="py-2 px-4">{schedule.className}</td>
                <td className="py-2 px-4">{schedule.instructor}</td>
                <td className="py-2 px-4">{schedule.date}</td>
                <td className="py-2 px-4">{schedule.time}</td>
                <td className="py-2 px-4">
                  <Button
                    className="bg-gray-300 text-black mr-2"
                    onClick={() => handleEdit(schedule.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    className="bg-red-500 text-white"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InstructorScheduling;
