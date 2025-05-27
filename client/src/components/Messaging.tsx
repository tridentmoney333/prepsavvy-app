import { MessageSquare, Send, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Messaging() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! How can we help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');

    // Simulate response after short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for your message! Our team will get back to you soon.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-30">
      <div className="relative">
        <button 
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Chat with Us</h3>
                <button onClick={toggleChat} className="text-white hover:text-blue-100">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              <div className="flex flex-col space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex items-end ${message.isUser ? 'justify-end' : ''}`}>
                    {!message.isUser && (
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                        alt="Agent profile" 
                        className="w-6 h-6 rounded-full order-1"
                      />
                    )}
                    <div className={`flex flex-col space-y-2 text-sm max-w-xs mx-2 ${message.isUser ? 'order-1 items-end' : 'order-2 items-start'}`}>
                      <div>
                        <span className={`px-4 py-2 rounded-lg inline-block ${
                          message.isUser 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-gray-200 text-gray-800 rounded-bl-none'
                        }`}>
                          {message.text}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="block w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button 
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-blue-600 hover:text-blue-500"
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
