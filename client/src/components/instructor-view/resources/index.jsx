import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Upload } from 'lucide-react';

const initialResources = [
  { id: 1, name: 'Lecture Slides Chapter 1', type: 'PDF', link: '#' },
  { id: 2, name: 'Introduction Video', type: 'Video', link: '#' },
  { id: 3, name: 'Reading List', type: 'Document', link: '#' }
];

function InstructorResources() {
  const [resources, setResources] = useState(initialResources);
  const [newResource, setNewResource] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (newResource && file) {
      const newResourceEntry = {
        id: resources.length + 1,
        name: newResource,
        type: file.type.includes("video") ? "Video" : file.type.includes("pdf") ? "PDF" : "File",
        link: '#'
      };
      setResources([...resources, newResourceEntry]);
      setNewResource('');
      setFile(null);
    }
  };

  const handleDelete = (id) => {
    setResources(resources.filter((resource) => resource.id !== id));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">📁 Instructor Resources</h1>

      {/* Resource List */}
      <div className="space-y-3 mb-6">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div
              key={resource.id}
              className="flex justify-between items-center px-4 py-3 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              <div className="text-gray-800 text-sm font-medium">
                {resource.name} <span className="text-xs text-gray-500">({resource.type})</span>
              </div>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(resource.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center">No resources uploaded yet.</p>
        )}
      </div>

      {/* Upload Section */}
      <div className="space-y-4 border-t pt-6">
        <Input
          placeholder="Enter resource name..."
          value={newResource}
          onChange={(e) => setNewResource(e.target.value)}
          className="w-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <div className="text-right">
          <Button
            onClick={handleUpload}
            disabled={!newResource || !file}
            className="flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Upload Resource
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InstructorResources;
