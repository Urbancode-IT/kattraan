import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Edit, Trash2 } from "lucide-react";

const initialCertificates = [
  {
    id: 1,
    studentName: "John Doe",
    courseName: "Web Development 101",
    issueDate: "2023-09-15",
    status: "Issued",
  },
  {
    id: 2,
    studentName: "Jane Smith",
    courseName: "Python Programming",
    issueDate: "2023-09-20",
    status: "Pending",
  },
  {
    id: 3,
    studentName: "Alice Johnson",
    courseName: "Digital Marketing Basics",
    issueDate: "2023-09-22",
    status: "Issued",
  },
];

function InstructorCertificates() {
  const [certificates, setCertificates] = useState(initialCertificates);
  const [newCertificate, setNewCertificate] = useState({
    studentName: "",
    courseName: "",
    issueDate: "",
    status: "Pending",
  });

  const handleAddCertificate = () => {
    const { studentName, courseName, issueDate } = newCertificate;

    if (!studentName || !courseName || !issueDate) {
      alert("Please fill in all required fields.");
      return;
    }

    const newCert = {
      ...newCertificate,
      id: certificates.length + 1,
    };

    setCertificates([newCert, ...certificates]);
    setNewCertificate({
      studentName: "",
      courseName: "",
      issueDate: "",
      status: "Pending",
    });
  };

  const handleDownload = (id) => {
    console.log("Downloading certificate with id:", id);
  };

  const handleEdit = (id) => {
    console.log("Editing certificate with id:", id);
  };

  const handleDelete = (id) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FileText className="w-6 h-6 text-blue-600" />
          Certificates
        </h2>
        <Button className="bg-blue-600 text-white" onClick={handleAddCertificate}>
          + Add New Certificate
        </Button>
      </div>

      {/* New Certificate Form */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Student Name"
            value={newCertificate.studentName}
            onChange={(e) => setNewCertificate({ ...newCertificate, studentName: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Course Name"
            value={newCertificate.courseName}
            onChange={(e) => setNewCertificate({ ...newCertificate, courseName: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="date"
            value={newCertificate.issueDate}
            onChange={(e) => setNewCertificate({ ...newCertificate, issueDate: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <select
            value={newCertificate.status}
            onChange={(e) => setNewCertificate({ ...newCertificate, status: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="Issued">Issued</option>
          </select>
        </div>
        <div className="text-right">
          <Button className="bg-green-600 text-white" onClick={handleAddCertificate}>
            Issue Certificate
          </Button>
        </div>
      </div>

      {/* Certificates Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-sm rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Student Name</th>
              <th className="px-4 py-3 text-left">Course Name</th>
              <th className="px-4 py-3 text-left">Issue Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr
                key={cert.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{cert.studentName}</td>
                <td className="px-4 py-3">{cert.courseName}</td>
                <td className="px-4 py-3">{cert.issueDate}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      cert.status === "Issued"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {cert.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleDownload(cert.id)}>
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleEdit(cert.id)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(cert.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
            {certificates.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No certificates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InstructorCertificates;
