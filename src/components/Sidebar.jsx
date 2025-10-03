import { NavLink } from "react-router-dom";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {/* Overlay - Reduces page opacity without color */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white/40 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed md:static left-0 top-0 z-50 bg-white border-r border-gray-200 py-6 px-4 h-screen w-64 transition-transform duration-300 flex flex-col
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="md:hidden flex justify-between items-center mb-6">
          <div className="font-bold text-lg flex items-center gap-2">
            <span className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M5 2L9 7L5 12" strokeWidth="2" stroke="white" fill="none"/>
              </svg>
            </span>
            <span>EduFamily AI</span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="text-2xl text-gray-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        
        <div className="font-bold text-lg flex items-center gap-2 mb-8 hidden md:flex">
          <span className="rounded-full bg-blue-500 w-6 h-6 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
              <path d="M5 2L9 7L5 12" strokeWidth="2" stroke="white" fill="none"/>
            </svg>
          </span>
          EduFamily AI
        </div>
        
        <nav className="flex flex-col gap-1 text-sm flex-1">
          <NavLink
            to="/"
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2.5 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-blue-50 text-gray-700"
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
              `flex items-center gap-3 py-2.5 px-3 rounded-lg font-medium cursor-pointer transition ${
                isActive
                  ? "bg-blue-50 text-gray-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`
            }
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 8.5c0 3.59-3.13 6.5-7 6.5-1.19 0-2.31-.27-3.31-.76L3 16l1.76-3.69C4.27 11.31 4 10.19 4 9c0-3.59 3.13-6.5 7-6.5s7 2.91 7 6.5z"/>
            </svg>
            Chat
          </NavLink>
          
          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium cursor-pointer transition">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h12v12H4z"/>
              <line x1="4" y1="8" x2="16" y2="8"/>
            </svg>
            Resources
          </div>
          
          <div className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium cursor-pointer transition">
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
