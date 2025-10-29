export default function Navbar({ setMobileOpen }) {
  return (
    <nav className="fixed top-0 right-0 left-0 md:left-64 z-30 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Mobile Menu Button & Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
            
            {/* Mobile Logo */}
            <div className="md:hidden font-bold text-base md:text-lg flex items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-orange-500 to-pink-500 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="white">
                  <path d="M3 3h4v4H3z"/>
                  <path d="M9 3h4v4H9z"/>
                  <path d="M3 9h4v4H3z"/>
                  <path d="M9 9h4v4H9z"/>
                </svg>
              </span>
              <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">EduTrack</span>
            </div>
          </div>

          {/* Right Side - Notifications & Profile */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* Notifications */}
            <button className="relative p-1.5 md:p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="md:w-[22px] md:h-[22px]">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500 rounded-full ring-1 md:ring-2 ring-white"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-3 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-xs md:text-sm font-semibold text-gray-900">John Doe</p>
                <p className="text-[10px] md:text-xs text-gray-500">Instructor</p>
              </div>
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="h-8 w-8 md:h-10 md:w-10 rounded-full ring-2 ring-orange-500 ring-offset-1 md:ring-offset-2 cursor-pointer hover:ring-pink-500 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
