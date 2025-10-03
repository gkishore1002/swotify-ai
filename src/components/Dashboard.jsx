export default function Dashboard() {
  return (
    <div className="p-6 pt-20 md:pt-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Students</h3>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-500">
              <path d="M4 18v-1a4 4 0 014-4h4a4 4 0 014 4v1"/>
              <circle cx="10" cy="6" r="3"/>
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-900">24</p>
          <p className="text-sm text-green-600 mt-2">+12% from last month</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Avg Progress</h3>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-green-500">
              <path d="M13 7L9 11l-2-2-4 4"/>
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-900">78%</p>
          <p className="text-sm text-green-600 mt-2">+5% from last week</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Courses</h3>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-500">
              <path d="M4 4h12v12H4z"/>
              <line x1="4" y1="8" x2="16" y2="8"/>
            </svg>
          </div>
          <p className="text-3xl font-bold text-gray-900">12</p>
          <p className="text-sm text-gray-500 mt-2">3 new this week</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" className="h-10 w-10 rounded-full"/>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Sarah completed Math Module 5</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="h-10 w-10 rounded-full"/>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Leo started Science Course</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
