import { useState } from "react";

export default function ChatPage() {
  const [mode, setMode] = useState("simple");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center min-h-screen pt-20 md:pt-8 pb-24 md:pb-8 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="flex flex-col w-full max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-900">Conversational AI</h1>
          <p className="mt-2 text-base md:text-lg text-gray-500">Your personal assistant for tracking educational progress.</p>
        </div>
        
        {/* Mode Switch */}
        <div className="flex justify-center gap-0 mb-6">
          <button
            onClick={() => setMode("simple")}
            className={`px-8 py-2.5 font-medium text-sm rounded-l-full transition ${
              mode === "simple"
                ? "bg-white text-blue-600 shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Simple Mode
          </button>
          <button
            onClick={() => setMode("deep")}
            className={`px-8 py-2.5 font-medium text-sm rounded-r-full transition ${
              mode === "deep"
                ? "bg-white text-blue-600 shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Deep Research
          </button>
        </div>
        
        {/* AI message 1 */}
        <div className="flex gap-3 items-start mb-4">
          <div className="rounded-full bg-blue-100 h-10 w-10 flex-shrink-0 flex items-center justify-center text-blue-500 font-bold text-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="6" cy="6" r="1.5"/>
              <circle cx="14" cy="6" r="1.5"/>
              <circle cx="6" cy="14" r="1.5"/>
              <circle cx="14" cy="14" r="1.5"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm px-5 py-4 text-sm text-gray-700 max-w-2xl">
              Hello! How can I assist you today? You can ask me about your children's progress, learning resources, or any other questions you have. Here are some suggestions to get started:
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="rounded-full px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-xs font-medium text-gray-700 transition">
                  Show me Sarah's progress
                </button>
                <button className="rounded-full px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-xs font-medium text-gray-700 transition">
                  Best resources for math?
                </button>
                <button className="rounded-full px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 text-xs font-medium text-gray-700 transition">
                  Improve learning at home?
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* User Message */}
        <div className="flex items-start gap-3 justify-end mb-4">
          <div className="bg-blue-600 rounded-2xl shadow-sm px-5 py-3 text-sm text-white font-medium max-w-xs">
            Show me Sarah's progress
          </div>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User" className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
        </div>
        
        {/* Typing indicator */}
        <div className="flex gap-3 items-start mb-4">
          <div className="rounded-full bg-blue-100 h-10 w-10 flex-shrink-0 flex items-center justify-center text-blue-500 font-bold text-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="6" cy="6" r="1.5"/>
              <circle cx="14" cy="6" r="1.5"/>
              <circle cx="6" cy="14" r="1.5"/>
              <circle cx="14" cy="14" r="1.5"/>
            </svg>
          </div>
          <div className="bg-white rounded-2xl shadow-sm px-5 py-4 flex gap-1">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
          </div>
        </div>
        
        {/* AI Message 2 */}
        <div className="flex gap-3 items-start mb-4">
          <div className="rounded-full bg-blue-100 h-10 w-10 flex-shrink-0 flex items-center justify-center text-blue-500 font-bold text-xl">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <circle cx="6" cy="6" r="1.5"/>
              <circle cx="14" cy="6" r="1.5"/>
              <circle cx="6" cy="14" r="1.5"/>
              <circle cx="14" cy="14" r="1.5"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm px-5 py-4 text-sm text-gray-700 max-w-2xl">
              <div className="mb-3">Of course! Here's a summary of Sarah's progress:</div>
              <ul className="space-y-1.5 mb-3">
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Overall Progress:</span>
                  <span className="font-semibold text-gray-800">85%</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Math:</span>
                  <span className="font-semibold text-green-600">90% (Excellent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Science:</span>
                  <span className="font-semibold text-yellow-600">75% (Good)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">English:</span>
                  <span className="font-semibold text-blue-600">80% (Very Good)</span>
                </li>
              </ul>
              <div className="mb-3">Here's a visual breakdown of her subject performance:</div>
              
              {/* Chart */}
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <div className="flex items-end justify-around gap-4 h-32 mb-3">
                  <div className="flex flex-col items-center flex-1 max-w-20">
                    <div className="w-full bg-blue-400 rounded-t-lg" style={{height: '90%'}} />
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-20">
                    <div className="w-full bg-yellow-400 rounded-t-lg" style={{height: '60%'}} />
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-20">
                    <div className="w-full bg-green-400 rounded-t-lg" style={{height: '75%'}} />
                  </div>
                </div>
                <div className="flex justify-around text-xs text-gray-500">
                  <div className="flex-1 max-w-20 text-center">Math</div>
                  <div className="flex-1 max-w-20 text-center">Science</div>
                  <div className="flex-1 max-w-20 text-center">English</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Input Bar */}
        <div className="fixed md:static bottom-0 left-0 right-0 md:left-auto md:right-auto w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-none md:rounded-xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
          <button className="text-gray-400 hover:text-gray-600" title="Voice input">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="8" y="2" width="4" height="10" rx="2"/>
              <path d="M5 9v1a5 5 0 0010 0V9"/>
              <line x1="10" y1="15" x2="10" y2="18"/>
            </svg>
          </button>
          <input
            className="flex-1 min-w-0 bg-transparent px-2 py-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
            placeholder="Type your message, e.g., 'What did Leo learn this week?'"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="text-gray-400 hover:text-gray-600" title="Attach file">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 7v5a4 4 0 01-8 0V5a3 3 0 016 0v7a2 2 0 01-4 0V7"/>
            </svg>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1.5 transition">
            Send
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2l12 6-12 6V9l8-1-8-1V2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
