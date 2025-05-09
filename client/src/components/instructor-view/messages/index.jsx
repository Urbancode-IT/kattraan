import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function InstructorMessages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
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
    if (!newMessage.trim()) return;

    console.log('Sending message:', newMessage);
    // Ideally send to backend here
    setNewMessage(""); // Clear input
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">📥 Inbox Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message.id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="font-semibold text-gray-800">{message.from}</div>
                <div className="text-sm text-gray-600 mt-1">{message.subject}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(message.received).toLocaleDateString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted text-center py-6">
              No messages yet. Start the conversation!
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="w-4 h-4 mr-2" />
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default InstructorMessages;
