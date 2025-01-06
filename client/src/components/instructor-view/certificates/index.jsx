import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button is a reusable component
import { FileText, Download, Edit, Trash2 } from "lucide-react"; // Icons for actions

const certificatesData = [
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
  const [certificates, setCertificates] = useState(certificatesData);
  const [newCertificate, setNewCertificate] = useState({
    studentName: "",
    courseName: "",
    issueDate: "",
    status: "Pending",
  });

  const handleDownload = (id) => {
    // Logic for downloading the certificate (could integrate with backend to generate PDF)
    console.log("Downloading certificate with id:", id);
  };

  const handleEdit = (id) => {
    // Logic to edit certificate details
    console.log("Editing certificate with id:", id);
  };

  const handleDelete = (id) => {
    // Delete logic
    setCertificates(certificates.filter((certificate) => certificate.id !== id));
  };

  const handleAddCertificate = () => {
    const newCert = {
      ...newCertificate,
      id: certificates.length + 1, // Generate a new id for the certificate
    };
    setCertificates([...certificates, newCert]);
    setNewCertificate({
      studentName: "",
      courseName: "",
      issueDate: "",
      status: "Pending",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Certificates</h2>
        <Button className="bg-blue-500 text-white" onClick={handleAddCertificate}>
          + Add New Certificate
        </Button>
      </div>

      {/* New Certificate Form */}
      <div className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            className="p-4 border-2 border-gray-300 rounded-lg w-1/3"
            placeholder="Student Name"
            value={newCertificate.studentName}
            onChange={(e) => setNewCertificate({ ...newCertificate, studentName: e.target.value })}
          />
          <input
            type="text"
            className="p-4 border-2 border-gray-300 rounded-lg w-1/3"
            placeholder="Course Name"
            value={newCertificate.courseName}
            onChange={(e) => setNewCertificate({ ...newCertificate, courseName: e.target.value })}
          />
          <input
            type="date"
            className="p-4 border-2 border-gray-300 rounded-lg"
            value={newCertificate.issueDate}
            onChange={(e) => setNewCertificate({ ...newCertificate, issueDate: e.target.value })}
          />
          <select
            className="p-4 border-2 border-gray-300 rounded-lg"
            value={newCertificate.status}
            onChange={(e) => setNewCertificate({ ...newCertificate, status: e.target.value })}
          >
            <option value="Pending">Pending</option>
            <option value="Issued">Issued</option>
          </select>
        </div>
        <Button className="bg-green-500 text-white" onClick={handleAddCertificate}>
          Issue Certificate
        </Button>
      </div>

      {/* Certificates List */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto mt-6">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">Student Name</th>
              <th className="py-2 px-4 text-left">Course Name</th>
              <th className="py-2 px-4 text-left">Issue Date</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate) => (
              <tr key={certificate.id} className="border-b">
                <td className="py-2 px-4">{certificate.studentName}</td>
                <td className="py-2 px-4">{certificate.courseName}</td>
                <td className="py-2 px-4">{certificate.issueDate}</td>
                <td className="py-2 px-4">{certificate.status}</td>
                <td className="py-2 px-4">
                  <Button
                    className="bg-gray-300 text-black mr-2"
                    onClick={() => handleDownload(certificate.id)}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    className="bg-gray-300 text-black mr-2"
                    onClick={() => handleEdit(certificate.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    className="bg-red-500 text-white"
                    onClick={() => handleDelete(certificate.id)}
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

export default InstructorCertificates;
