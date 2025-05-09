import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Megaphone } from "lucide-react";
import { format } from "date-fns";
import Modal from "react-modal";

const initialAnnouncements = [
  {
    id: 1,
    title: "New Year Special Offer",
    description: "Start the new year with a new skill! Enroll now and get 20% off.",
    dueDate: "2024-01-01",
    details: "Offer valid till January 1st, 2024. Use NEWYEAR20 during checkout."
  },
];

Modal.setAppElement('#root'); // Replace '#root' with your app root if different

function InstructorAnnouncements() {
  const [announcements, setAnnouncements] = useState(initialAnnouncements);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    details: ""
  });

  const handleOpenModal = () => {
    setForm({ title: "", description: "", dueDate: "", details: "" });
    setModalOpen(true);
  };

  const handleAddAnnouncement = () => {
    if (!form.title || !form.description) {
      alert("Title and Description are required.");
      return;
    }

    const newAnnouncement = {
      id: announcements.length + 1,
      ...form,
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Megaphone className="w-6 h-6 text-blue-600" />
          Announcements
        </h2>
        <Button onClick={handleOpenModal} className="bg-blue-600 text-white">
          + Add New Announcement
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((a) => (
          <div key={a.id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{a.description}</p>
              <p className="text-xs text-gray-500 mt-2">📅 Due: {format(new Date(a.dueDate), "PPP")}</p>
            </div>
            <div className="px-5 pb-4 text-sm text-gray-700">{a.details}</div>
            <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
              <Button size="sm" variant="outline">
                <Edit className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(a.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-white rounded-xl p-6 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40"
      >
        <h3 className="text-lg font-bold mb-4">📢 New Announcement</h3>
        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <Input
            placeholder="Short Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <Input
            type="date"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          />
          <Textarea
            placeholder="Details"
            rows={4}
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
          />
        </div>
        <div className="flex justify-end mt-6 gap-3">
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-600 text-white" onClick={handleAddAnnouncement}>
            Save Announcement
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default InstructorAnnouncements;
