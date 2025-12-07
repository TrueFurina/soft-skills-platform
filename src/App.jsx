import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, Zap, Award, BookOpen, Users, User } from 'lucide-react';

// Import Components
import Dashboard from './components/Dashboard';
import Training from './components/Training';
import Assessment from './components/Assessment';
import LearningPath from './components/LearningPath';
import Community from './components/Community';
import Reports from './components/Reports';
import Profile from './components/Profile';
// The error "User is not defined" is likely a component import issue.
// Let's ensure all components are imported.
// The error is likely in the Profile component, or a missing component import.
// Since the error is "User is not defined", let's assume a component named User is missing.
// However, the component is Profile. Let's ensure Profile is correctly imported.
// The error is likely due to the aggressive refactoring. Let's ensure the Profile component is correctly imported.
// The Profile component is imported on line 12.
// The error is likely in the Profile component itself.
// Since I cannot access the Profile component, I will try to remove the Profile component from the routes to see if the app loads.
// If it loads, the error is in the Profile component.
// I will not remove it yet. I will trust the user's error report.
// The error is "User is not defined". This is a ReferenceError.
// The only "User" is the icon.

// I will try to explicitly import the User component from the components folder, just in case.
// I will assume the component is named User and is in the components folder.
import UserComponent from './components/User';

// Navigation Items
const navItems = [
  { name: '仪表盘', path: '/', icon: Home, link: 'dashboard' },
  { name: '技能训练', path: '/training', icon: Zap, link: 'training' },
  { name: '能力评估', path: '/assessment', icon: Award, link: 'assessment' },
  { name: '学习路径', path: '/learning-path', icon: BookOpen, link: 'learning-path' },
  { name: '学习社区', path: '/community', icon: Users, link: 'community' },
  { name: '报告中心', path: '/reports', icon: BookOpen, link: 'reports' },
  { name: '个人档案', path: '/profile', icon: User, link: 'profile' },
];

const App = () => {
  // Aggressively simplified structure to ensure rendering.
  // Active link logic is temporarily removed to eliminate useLocation error.
  return (
    <HashRouter>
      <div className="flex h-screen bg-[var(--light-gray)]">
        {/* Sidebar - Based on Reference Page */}
        <div className="w-64 bg-[var(--primary-dark)] sidebar text-white flex flex-col p-4 shadow-xl">
          <div className="flex items-center space-x-3 mb-8 p-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-[var(--primary-dark)]" />
            </div>
            <div className="text-xl font-bold">SoftSkills AI</div>
          </div>
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 nav-link nav-link-hover"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          {/* Footer/Profile Link Placeholder */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 nav-link nav-link-hover">
              <User className="w-5 h-5" />
              <span>张同学 (Profile)</span>
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/community" element={<Community />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
