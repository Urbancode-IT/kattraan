import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

function InstructorMessages() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            // Placeholder for an API call to fetch messages
            return [
                { id: 1, from: 'Jane Smith', subject: 'Course Material Question', received: '2023-09-15' },
                { id: 2, from: 'John Doe', subject: 'Assignment Submission', received: '2023-09-14' },
                { id: 3, from: 'Alice Johnson', subject: 'Exam Schedule Inquiry', received: '2023-09-13' },
            ];
        };

        const loadMessages = async () => {
            const messagesData = await fetchMessages();
            setMessages(messagesData);
        };

        loadMessages();
    }, []);

    const handleSendMessage = () => {
        console.log('Sending message:', newMessage);
        // Add logic to send a message to the backend
        setNewMessage(""); // Clear the input after sending
    };

    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <div className="mb-6">
                {messages.map((message) => (
                    <div key={message.id} className="border-b border-gray-200 py-2">
                        <div className="font-semibold">{message.from}</div>
                        <div className="text-sm">{message.subject}</div>
                        <div className="text-xs text-gray-500">{message.received}</div>
                    </div>
                ))}
            </div>
            <div>
                <Input
                    className="mb-2 p-2 border border-gray-300 rounded shadow-sm focus:ring focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                    placeholder="Type a new message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <Send className="mr-2" /> Send
                </Button>
            </div>
        </div>
    );
}

export default InstructorMessages;
