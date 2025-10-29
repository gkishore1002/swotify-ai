import { useState } from "react";

export default function ChatPage() {
  const [mode, setMode] = useState("simple");
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      from: "ai",
      text: "Hello! How can I assist you today? You can ask me about your students' progress, learning resources, or any educational questions you have.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage() {
    if (!message.trim()) return;

    setChatHistory((prev) => [...prev, { from: "user", text: message }]);
    setIsTyping(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, mode }),
      });
      const data = await response.json();

      setChatHistory((prev) => [...prev, { from: "ai", text: data.reply }]);
    } catch (err) {
      setChatHistory((prev) => [...prev, { from: "ai", text: "Error: Unable to get response." }]);
    } finally {
      setIsTyping(false);
      setMessage("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="flex flex-col w-full h-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-4 md:mb-6 px-2 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
          AI Assistant
        </h1>
        <p className="text-sm md:text-base text-gray-600">
          Your intelligent companion for tracking educational progress and insights.
        </p>
      </div>

      {/* Mode Switch */}
      <div className="flex justify-center gap-2 mb-4 md:mb-6 px-2">
        <button
          onClick={() => setMode("simple")}
          className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-xs sm:text-sm rounded-xl transition-all duration-300 ${
            mode === "simple"
              ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg"
              : "bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md"
          }`}
        >
          💬 Simple Mode
        </button>
        <button
          onClick={() => setMode("deep")}
          className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-xs sm:text-sm rounded-xl transition-all duration-300 ${
            mode === "deep"
              ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg"
              : "bg-white/60 backdrop-blur-sm text-gray-600 hover:bg-white hover:shadow-md"
          }`}
        >
          🔍 Deep Research
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6 flex-1 overflow-y-auto px-2 md:px-2 pb-2">
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 md:gap-3 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.from === "ai" && (
              <div className="rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
                  <circle cx="7" cy="7" r="2" />
                  <circle cx="17" cy="7" r="2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
              </div>
            )}
            <div
              className={`rounded-2xl shadow-md px-3 py-2.5 md:px-5 md:py-3.5 text-xs md:text-sm max-w-[75%] md:max-w-2xl whitespace-pre-wrap ${
                msg.from === "user"
                  ? "bg-gradient-to-r from-orange-600 to-pink-600 text-white font-medium"
                  : "bg-white/80 backdrop-blur-sm text-gray-800 border border-white"
              }`}
            >
              {msg.text}
            </div>
            {msg.from === "user" && (
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="User"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover flex-shrink-0 ring-2 ring-orange-500 ring-offset-2"
              />
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-2 md:gap-3 items-start">
            <div className="rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 h-8 w-8 md:h-10 md:w-10 flex-shrink-0 flex items-center justify-center text-white shadow-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 md:h-5">
                <circle cx="7" cy="7" r="2" />
                <circle cx="17" cy="7" r="2" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md px-3 py-3 md:px-5 md:py-4 flex gap-1.5 border border-white">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar - Perplexity Style */}
      <div className="bg-white/90 backdrop-blur-md border border-orange-200 rounded-xl md:rounded-2xl shadow-lg flex items-end">
        {/* Left Side - Attach Button */}
        <button 
          className="p-2.5 md:p-3 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-l-xl md:rounded-l-2xl transition-all duration-300 flex-shrink-0" 
          title="Attach file"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 7v5a4 4 0 01-8 0V5a3 3 0 016 0v7a2 2 0 01-4 0V7" />
          </svg>
        </button>

        {/* Center - Text Area */}
        <textarea
          className="flex-1 min-w-0 bg-transparent px-2 py-3 md:px-3 md:py-3.5 outline-none text-gray-800 placeholder-gray-400 text-sm md:text-base resize-none max-h-24 md:max-h-32"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />

        {/* Right Side - Voice & Send Buttons */}
        <div className="flex items-center gap-1 pr-2 md:pr-3">
          <button 
            className="p-2 md:p-2.5 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 flex-shrink-0" 
            title="Voice input"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="8" y="2" width="4" height="10" rx="2" />
              <path d="M5 9v1a5 5 0 0010 0V9" />
              <line x1="10" y1="15" x2="10" y2="18" />
            </svg>
          </button>

          <button
            onClick={sendMessage}
            disabled={!message.trim()}
            className={`p-2 md:p-2.5 rounded-lg transition-all duration-300 flex-shrink-0 ${
              message.trim()
                ? 'bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            title="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 2l16 8-16 8V11l11-1-11-1V2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
