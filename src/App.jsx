import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ChatPage from './components/ChatPage';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
        <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar setMobileOpen={setMobileOpen} />
          
          <main className="flex-1 overflow-y-auto p-6 mt-16">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/students" element={
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Students
                  </h1>
                  <p className="text-gray-600">Manage your students here.</p>
                </div>
              } />
              <Route path="/courses" element={
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Courses
                  </h1>
                  <p className="text-gray-600">Manage your courses here.</p>
                </div>
              } />
              <Route path="/analytics" element={
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Analytics
                  </h1>
                  <p className="text-gray-600">View analytics and reports here.</p>
                </div>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
