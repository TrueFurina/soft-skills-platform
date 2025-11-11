import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Target, BookOpen, BarChart3, Users, FileText, User } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Training from './components/Training';
import LearningPath from './components/LearningPath';
import Assessment from './components/Assessment';
import Community from './components/Community';
import Reports from './components/Reports';
import Profile from './components/Profile';
import './App.css';

const App = () => {
  const [activeLink, setActiveLink] = useState('dashboard');

  const navItems = [
    { name: '仪表盘', icon: Home, path: '/', component: Dashboard, link: 'dashboard' },
    { name: '技能训练', icon: Target, path: '/training', component: Training, link: 'training' },
    { name: '学习路径', icon: BookOpen, path: '/learning-path', component: LearningPath, link: 'learning-path' },
    { name: '能力评估', icon: BarChart3, path: '/assessment', component: Assessment, link: 'assessment' },
    { name: '学习社区', icon: Users, path: '/community', component: Community, link: 'community' },
    { name: '报告中心', icon: FileText, path: '/reports', component: Reports, link: 'reports' },
    { name: '个人档案', icon: User, path: '/profile', component: Profile, link: 'profile' },
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <div className="w-64 bg-[var(--deep-blue)] text-white flex flex-col p-4 shadow-xl">
          <div className="text-2xl font-bold mb-8 p-2">软技能数字孪生系统</div>
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setActiveLink(item.link)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  activeLink === item.link
                    ? 'bg-[var(--tech-blue)] shadow-md'
                    : 'hover:bg-[var(--tech-blue)]/50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          <div className="p-2 text-sm text-white/70 border-t border-white/10 pt-4">
            © 2024 SoftSkills AI
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/community" element={<Community />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
