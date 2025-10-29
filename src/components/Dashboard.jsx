export default function Dashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Total Students Card */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 18v-1a4 4 0 014-4h4a4 4 0 014 4v1"/>
                <circle cx="10" cy="6" r="3"/>
              </svg>
            </div>
          </div>
          <h3 className="text-sm font-medium text-orange-100 mb-2">Total Students</h3>
          <p className="text-4xl font-bold mb-3">24</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">+12%</span>
            <span className="text-orange-100">from last month</span>
          </div>
        </div>
        
        {/* Average Progress Card */}
        <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12l4 4 10-10"/>
              </svg>
            </div>
          </div>
          <h3 className="text-sm font-medium text-rose-100 mb-2">Avg Progress</h3>
          <p className="text-4xl font-bold mb-3">78%</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">+5%</span>
            <span className="text-rose-100">from last week</span>
          </div>
        </div>
        
        {/* Active Courses Card */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 3h16v14H2z"/>
                <line x1="2" y1="7" x2="18" y2="7"/>
                <line x1="6" y1="3" x2="6" y2="7"/>
                <line x1="14" y1="3" x2="14" y2="7"/>
              </svg>
            </div>
          </div>
          <h3 className="text-sm font-medium text-amber-100 mb-2">Active Courses</h3>
          <p className="text-4xl font-bold mb-3">12</p>
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">+3 new</span>
            <span className="text-amber-100">this week</span>
          </div>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
          <button className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors">
            View All →
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Activity Item 1 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl border border-orange-100 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/women/44.jpg" 
                alt="Student" 
                className="h-12 w-12 rounded-full ring-4 ring-white"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Sarah completed Math Module 5</p>
              <p className="text-xs text-gray-600 mt-1">2 hours ago</p>
            </div>
            <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Completed
            </div>
          </div>
          
          {/* Activity Item 2 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Student" 
                className="h-12 w-12 rounded-full ring-4 ring-white"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-orange-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Leo started Science Course</p>
              <p className="text-xs text-gray-600 mt-1">5 hours ago</p>
            </div>
            <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium">
              Started
            </div>
          </div>
          
          {/* Activity Item 3 */}
          <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
            <div className="relative">
              <img 
                src="https://randomuser.me/api/portraits/women/68.jpg" 
                alt="Student" 
                className="h-12 w-12 rounded-full ring-4 ring-white"
              />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-yellow-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Emma submitted Assignment 3</p>
              <p className="text-xs text-gray-600 mt-1">1 day ago</p>
            </div>
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
              Submitted
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
