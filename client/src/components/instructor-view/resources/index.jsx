import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Upload } from 'lucide-react';

// Mock data for resources or fetch from a service
const initialResources = [
    { id: 1, name: 'Lecture Slides Chapter 1', type: 'PDF', link: '#'},
    { id: 2, name: 'Introduction Video', type: 'Video', link: '#'},
    { id: 3, name: 'Reading List', type: 'Document', link: '#'}
];

function InstructorResources() {
    const [resources, setResources] = useState(initialResources);
    const [newResource, setNewResource] = useState('');
    const [file, setFile] = useState(null);

    const handleUpload = () => {
        // Check if file and resource name are provided
        if (newResource && file) {
            const newResourceEntry = {
                id: resources.length + 1,
                name: newResource,
                type: 'File',
                link: '#'
            };
            setResources([...resources, newResourceEntry]);
            setNewResource('');
            setFile(null);
        }
    };

    const handleDelete = (id) => {
        setResources(resources.filter(resource => resource.id !== id));
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Resources</h1>
            <div>
                {resources.map(resource => (
                    <div key={resource.id} className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
                        <span>{resource.name} ({resource.type})</span>
                        <Button onClick={() => handleDelete(resource.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-5 w-5" />
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <Input
                    className="mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Resource Name"
                    value={newResource}
                    onChange={(e) => setNewResource(e.target.value)}
                />
                <input
                    type="file"
                    className="mb-2 p-2 border border-gray-300 rounded cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <Button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <Upload className="mr-2" /> Upload Resource
                </Button>
            </div>
        </div>
    );
}

export default InstructorResources;
