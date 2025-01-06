import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button is a reusable component
import { Edit, Trash2, CheckCircle } from "lucide-react"; // Icons for edit, delete, and mark as read

const notificationsData = [
  {
    id: 1,
    message: "The final exam will be held on 2023-12-01. Please prepare accordingly.",
    date: "2023-09-15",
    status: "Unread",
  },
  {
    id: 2,
    message: "Reminder: Project submission deadline is on 2023-11-20. Submit your projects on time.",
    date: "2023-09-17",
    status: "Read",
  },
  {
    id: 3,
    message: "New course materials uploaded for Python Programming. Check the course portal.",
    date: "2023-09-18",
    status: "Unread",
  },
];

function InstructorNotifications() {
  const [notifications, setNotifications] = useState(notificationsData);
  const [newNotification, setNewNotification] = useState({
    message: "",
    date: "",
  });

  const handleMarkAsRead = (id) => {
    // Mark notification as read
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, status: "Read" } : notification
      )
    );
  };

  const handleDelete = (id) => {
    // Delete notification
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleSendNotification = () => {
    const newNotificationData = {
      ...newNotification,
      id: notifications.length + 1, // Generate a new id for the notification
      status: "Unread", // New notifications are unread by default
    };
    setNotifications([...notifications, newNotificationData]);
    setNewNotification({
      message: "",
      date: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Student Notifications</h2>
        <Button className="bg-blue-500 text-white" onClick={handleSendNotification}>
          + Send New Notification
        </Button>
      </div>

      {/* New Notification Form */}
      <div className="space-y-4">
        <textarea
          className="p-4 border-2 border-gray-300 rounded-lg w-full"
          placeholder="Enter your message here..."
          rows="4"
          value={newNotification.message}
          onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
        />
        <input
          type="date"
          className="p-4 border-2 border-gray-300 rounded-lg w-full"
          value={newNotification.date}
          onChange={(e) => setNewNotification({ ...newNotification, date: e.target.value })}
        />
        <Button className="bg-green-500 text-white" onClick={handleSendNotification}>
          Send Notification
        </Button>
      </div>

      {/* Notifications List */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Message</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id} className="border-b">
                <td className="py-2 px-4">{notification.message}</td>
                <td className="py-2 px-4">{notification.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={`${
                      notification.status === "Unread" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {notification.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  {notification.status === "Unread" && (
                    <Button
                      className="bg-green-500 text-white mr-2"
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark as Read
                    </Button>
                  )}
                  <Button
                    className="bg-gray-300 text-black mr-2"
                    onClick={() => handleDelete(notification.id)}
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

export default InstructorNotifications;
