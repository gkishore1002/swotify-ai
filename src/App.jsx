import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/Dashboard";
import ChatPage from "./components/ChatPage";;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          mobileOpen={mobileOpen} 
          setMobileOpen={setMobileOpen}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function Navbar({ mobileOpen, setMobileOpen }) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* Mobile topbar */}
      <div className="md:hidden fixed w-full top-0 left-0 z-30 bg-white border-b border-gray-200 flex items-center justify-between h-14 px-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="text-2xl text-gray-600"
          aria-label="Open sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <div className="font-bold text-lg flex items-center gap-2">
          <span className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path d="M5 2L9 7L5 12" strokeWidth="2" stroke="white" fill="none"/>
            </svg>
          </span>
          EduFamily AI
        </div>
        <div className="relative">
          <button onClick={() => setProfileOpen(!profileOpen)}>
            <img 
              src="https://randomuser.me/api/portraits/women/65.jpg" 
              alt="User" 
              className="h-8 w-8 rounded-full"
            />
          </button>
          {profileOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setProfileOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Logout</a>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Desktop navbar */}
      <nav className="hidden md:flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
        <div className="text-xl font-semibold text-gray-800">
          Welcome back!
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7"/>
              <path d="M10 6v4l3 2"/>
            </svg>
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3v1m0 12v1m7-7h-1M4 10H3m13.66 4.66l-.71-.71M7.05 7.05l-.71-.71m11.32 0l-.71.71M7.05 12.95l-.71.71"/>
              <circle cx="10" cy="10" r="3"/>
            </svg>
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2"
            >
              <img 
                src="https://randomuser.me/api/portraits/women/65.jpg" 
                alt="User" 
                className="h-9 w-9 rounded-full"
              />
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="currentColor"
                className={`transition-transform ${profileOpen ? 'rotate-180' : ''}`}
              >
                <path d="M4 6l4 4 4-4"/>
              </svg>
            </button>
            
            {profileOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setProfileOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-xs text-gray-500">sarah@example.com</p>
                  </div>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 18v-1a4 4 0 014-4h4a4 4 0 014 4v1"/>
                      <circle cx="10" cy="6" r="3"/>
                    </svg>
                    Profile
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="5" width="14" height="10" rx="1"/>
                      <line x1="3" y1="9" x2="17" y2="9"/>
                    </svg>
                    Billing
                  </a>
                  <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="10" cy="10" r="7"/>
                      <path d="M10 6v4h4"/>
                    </svg>
                    Settings
                  </a>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 3H5a2 2 0 00-2 2v10a2 2 0 002 2h4m6-6l4-4m0 0l-4-4m4 4H9"/>
                      </svg>
                      Logout
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
