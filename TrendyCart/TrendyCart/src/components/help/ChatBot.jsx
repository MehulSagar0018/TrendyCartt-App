// Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { TiMessages } from 'react-icons/ti';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: input,
      });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botMessage = { text: 'Sorry, I am unable to process your request.', sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const toggleChat = () => {
    if (isOpen) {
      setMessages([]); // Clear messages when closing the chat
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>TrendyCart Assistant</h3>
            <button onClick={toggleChat}>Close</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleChat}>
        <TiMessages size={24} />
      </button>
    </div>
  );
};

export default ChatBot;