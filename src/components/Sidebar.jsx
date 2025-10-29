import { NavLink } from "react-router-dom";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 z-50 bg-white border-r border-orange-200 py-6 px-4 h-screen w-64 transition-transform duration-300 flex flex-col
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-between items-center mb-6">
          <div className="font-bold text-lg flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 w-8 h-8 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M3 3h4v4H3z"/>
                <path d="M9 3h4v4H9z"/>
                <path d="M3 9h4v4H3z"/>
                <path d="M9 9h4v4H9z"/>
              </svg>
            </span>
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">EduTrack</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-orange-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        {/* Desktop Logo */}
        <div className="font-bold text-lg flex items-center gap-2 mb-8 hidden md:flex">
          <span className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 w-8 h-8 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
              <path d="M3 3h4v4H3z"/>
              <path d="M9 3h4v4H9z"/>
              <path d="M3 9h4v4H3z"/>
              <path d="M9 9h4v4H9z"/>
            </svg>
          </span>
          <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">EduTrack</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col gap-1 text-sm flex-1">
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="6" height="6" rx="1"/>
              <rect x="11" y="3" width="6" height="6" rx="1"/>
              <rect x="3" y="11" width="6" height="6" rx="1"/>
              <rect x="11" y="11" width="6" height="6" rx="1"/>
            </svg>
            Dashboard
          </NavLink>
          
          <NavLink
            to="/chat"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 8.5c0 3.59-3.13 6.5-7 6.5-1.19 0-2.31-.27-3.31-.76L3 16l1.76-3.69C4.27 11.31 4 10.19 4 9c0-3.59 3.13-6.5 7-6.5s7 2.91 7 6.5z"/>
            </svg>
            AI Chat
          </NavLink>
          
          <NavLink
            to="/students"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 18v-1a4 4 0 014-4h4a4 4 0 014 4v1"/>
              <circle cx="10" cy="6" r="3"/>
            </svg>
            Students
          </NavLink>
          
          <NavLink
            to="/courses"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 3h16v14H2z"/>
              <line x1="2" y1="7" x2="18" y2="7"/>
              <line x1="6" y1="3" x2="6" y2="7"/>
              <line x1="14" y1="3" x2="14" y2="7"/>
            </svg>
            Courses
          </NavLink>
          
          <NavLink
            to="/analytics"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 17V9l4-4 4 4 6-6v14H3z"/>
            </svg>
            Analytics
          </NavLink>
          
          <div className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium cursor-pointer transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h12v12H4z"/>
              <line x1="4" y1="8" x2="16" y2="8"/>
            </svg>
            Resources
          </div>
          
          <div className="flex items-center gap-3 py-3 px-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium cursor-pointer transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="7"/>
              <line x1="10" y1="10" x2="10" y2="6"/>
              <circle cx="10" cy="13.5" r="0.5" fill="currentColor"/>
            </svg>
            Support
          </div>
        </nav>
      </aside>
    </>
  );
}
