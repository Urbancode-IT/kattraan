import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Edit, Trash2 } from "lucide-react"; // Icons for editing and deleting

const announcementsData = [
  {
    id: 1,
    title: "New Year Special Offer",
    description: "Start the new year with a new skill! Enroll in our courses and get a 20% discount.",
    dueDate: "2024-01-01",
    details: "Enroll in any of our courses by January 1st, 2024, and receive a 20% discount. Don’t miss out on this limited-time offer to boost your career with new skills!"
  },
  {
    id: 2,
    title: "Diwali Festival Sale",
    description: "Celebrate Diwali with 30% off on all courses! Learn new skills this festive season.",
    dueDate: "2023-11-15",
    details: "Our Diwali Festival Sale offers a massive 30% discount on all courses! Hurry, the offer ends on November 15th, 2023. Use promo code DIWALI30 during checkout."
  },
  {
    id: 3,
    title: "Summer Skills Special",
    description: "Summer’s here! Enroll in courses this summer and enjoy 25% off on select courses.",
    dueDate: "2023-07-01",
    details: "Get ready for summer with our skills development programs! From July 1st, 2023, enjoy 25% off on select courses. Whether it’s coding, design, or business, we have it all."
  },
  {
    id: 4,
    title: "Black Friday Flash Sale",
    description: "Don’t miss out! 50% off all courses this Black Friday weekend only.",
    dueDate: "2023-11-25",
    details: "Our Black Friday Flash Sale is here! For this weekend only, get 50% off all courses. Use the promo code BLACKFRIDAY50 at checkout. Offer ends on November 25th, 2023."
  },
  {
    id: 5,
    title: "Winter Holidays Offer",
    description: "Gift yourself a new skill this winter with 15% off on all courses.",
    dueDate: "2023-12-25",
    details: "Warm up your winter with learning! Get 15% off on all our courses during the holiday season. This offer is valid until December 25th, 2023. Use HOLIDAY15 to redeem."
  }
];

function InstructorAnnouncements() {
  const [announcements, setAnnouncements] = useState(announcementsData);

  const handleEdit = (id) => {
    // Edit logic
    console.log("Editing announcement with id:", id);
  };

  const handleDelete = (id) => {
    // Delete logic
    setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
  };

  const handleAddNew = () => {
    // Logic to add new announcement
    console.log("Add new announcement clicked");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Announcements</h2>
        <Button className="bg-blue-500 text-white" onClick={handleAddNew}>
          + Add New Announcement
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-200">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
              <p className="text-gray-600 mt-2">{announcement.description}</p>
              <p className="text-sm text-gray-500 mt-2">Due Date: {announcement.dueDate}</p>
            </div>
            <div className="p-6 bg-gray-100">
              <p className="text-sm text-gray-600">{announcement.details}</p>
            </div>
            <div className="flex justify-between p-4 bg-gray-100">
              <Button
                className="bg-gray-300 text-black"
                onClick={() => handleEdit(announcement.id)}
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                className="bg-red-500 text-white"
                onClick={() => handleDelete(announcement.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstructorAnnouncements;
