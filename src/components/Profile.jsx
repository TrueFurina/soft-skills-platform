
import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import {
  User,
  Settings,
  Bell,
  Shield,
  Award,
  Target,
  Calendar,
  Clock,
  TrendingUp,
  Edit,
  Camera,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Trophy,
  BookOpen,
  Users
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟用户数据
  const userProfile = {
    name: '张同学',
    title: '产品经理',
    company: '科技创新有限公司',
    department: '产品部',
    email: 'zhang.student@company.com',
    phone: '+86 138-0000-0000',
    location: '北京市朝阳区',
    joinDate: '2023-06-15',
    avatar: '/api/placeholder/120/120',
    level: '中级',
    points: 2850,
    rank: '前15%'
  };

  const achievements = [
    { id: 1, title: '沟通达人', description: '沟通能力达到85分以上', icon: '🗣️', earned: true, date: '2024-03-15' },
    { id: 2, title: '团队领袖', description: '完成5个领导力训练场景', icon: '👑', earned: true, date: '2024-02-28' },
    { id: 3, title: '情商专家', description: '情商管理能力达到90分', icon: '❤️', earned: false, progress: 86 },
    { id: 4, title: '学习之星', description: '连续30天完成训练', icon: '⭐', earned: true, date: '2024-01-20' },
    { id: 5, title: '创新思维', description: '完成创新思维专项训练', icon: '💡', earned: false, progress: 60 },
    { id: 6, title: '压力管理师', description: '压力管理能力达到优秀', icon: '🧘', earned: false, progress: 75 }
  ];

  const learningGoals = [
    { id: 1, title: '提升领导力到80分', current: 79, target: 80, deadline: '2024-04-30' },
    { id: 2, title: '完成10个训练场景', current: 8, target: 10, deadline: '2024-04-15' },
    { id: 3, title: '获得情商专家徽章', current: 86, target: 90, deadline: '2024-05-31' }
  ];

  const recentActivity = [
    { date: '2024-03-20', action: '完成跨部门协作训练', score: 85 },
    { date: '2024-03-18', action: '参与客户投诉处理场景', score: 92 },
    { date: '2024-03-15', action: '获得沟通达人徽章', score: null },
    { date: '2024-03-12', action: '完成团队领导决策训练', score: 78 },
    { date: '2024-03-10', action: '更新个人学习目标', score: null }
  ];

  const skillProgress = [
    { skill: '沟通能力', current: 82, lastMonth: 78, trend: 'up' },
    { skill: '领导力', current: 79, lastMonth: 75, trend: 'up' },
    { skill: '情商管理', current: 86, lastMonth: 84, trend: 'up' },
    { skill: '团队协作', current: 75, lastMonth: 77, trend: 'down' },
    { skill: '问题解决', current: 70, lastMonth: 68, trend: 'up' },
    { skill: '适应能力', current: 68, lastMonth: 65, trend: 'up' }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* 个人信息卡片 */}
      <div className="bg-gradient-to-r from-[var(--tech-blue)] to-[var(--light-blue)] text-white border-0 card">
        <div className="p-8 card-content">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white text-[var(--tech-blue)] rounded-full flex items-center justify-center shadow-lg">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{userProfile.name}</h2>
              <p className="text-white/90 mb-1">{userProfile.title} · {userProfile.company}</p>
              <p className="text-white/80 text-sm">{userProfile.department}</p>
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm">等级: {userProfile.level}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">积分: {userProfile.points}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm">排名: {userProfile.rank}</span>
                </div>
              </div>
            </div>
            <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <Edit className="w-4 h-4 mr-2" />
              编辑资料
            </Button>
          </div>
        </div>
      </div>

      {/* 技能进度概览 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">技能进度概览</h3>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillProgress.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-[var(--tech-blue)]">{skill.current}分</span>
                    <div className={`flex items-center space-x-1 text-xs ${
                      skill.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <TrendingUp className={`w-3 h-3 ${skill.trend === 'down' ? 'rotate-180' : ''}`} />
                      <span>{Math.abs(skill.current - skill.lastMonth)}</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[var(--tech-blue)] h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${skill.current}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 学习目标 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">学习目标</h3>
        </div>
        <div className="card-content">
          <div className="space-y-4">
            {learningGoals.map((goal) => (
              <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-700">{goal.title}</h4>
                  <span className="text-xs text-gray-500">截止: {goal.deadline}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[var(--tech-blue)] h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${(goal.current / goal.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-[var(--tech-blue)]">
                    {goal.current}/{goal.target}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAchievements = () => (
    <div className="bg-white border-0 shadow-lg card">
      <div className="card-header">
        <h3 className="text-[var(--deep-blue)] card-title">成就徽章</h3>
      </div>
      <div className="card-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`p-6 rounded-lg border-2 transition-all duration-200 ${
              achievement.earned 
                ? 'border-[var(--tech-blue)] bg-blue-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="text-center">
                <div className={`text-4xl mb-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                <h4 className={`font-semibold mb-2 ${
                  achievement.earned ? 'text-[var(--deep-blue)]' : 'text-gray-500'
                }`}>
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                {achievement.earned ? (
                  <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                    已获得 · {achievement.date}
                  </div>
                ) : (
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">进度: {achievement.progress}%</div>
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-[var(--tech-blue)] h-1 rounded-full transition-all duration-300" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActivity = () => (
    <div className="bg-white border-0 shadow-lg card">
      <div className="card-header">
        <h3 className="text-[var(--deep-blue)] card-title">最近活动</h3>
      </div>
      <div className="card-content">
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[var(--tech-blue)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.date}</p>
              </div>
              {activity.score && (
                <div className="text-sm font-bold text-[var(--tech-blue)]">
                  {activity.score}分
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* 个人信息设置 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">个人信息</h3>
        </div>
        <div className="card-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">姓名</label>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{userProfile.name}</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">邮箱</label>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{userProfile.email}</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">电话</label>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{userProfile.phone}</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">位置</label>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span className="text-sm">{userProfile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 通知设置 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">通知设置</h3>
        </div>
        <div className="card-content">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">训练提醒</span>
              </div>
              <Button size="sm" variant="outline">开启</Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">邮件通知</span>
              </div>
              <Button size="sm" variant="outline">开启</Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Award className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium">成就通知</span>
              </div>
              <Button size="sm" variant="outline">开启</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-gradient-to-r from-[var(--tech-blue)] to-[var(--light-blue)] rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">个人档案</h2>
        <p className="text-white/90 text-lg">管理您的个人信息和学习偏好</p>
      </div>

      {/* 标签页导航 */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'overview'
              ? 'bg-white text-[var(--deep-blue)] shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          概览
        </button>
        <button
          onClick={() => setActiveTab('achievements')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'achievements'
              ? 'bg-white text-[var(--deep-blue)] shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          成就
        </button>
        <button
          onClick={() => setActiveTab('activity')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'activity'
              ? 'bg-white text-[var(--deep-blue)] shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          活动
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'settings'
              ? 'bg-white text-[var(--deep-blue)] shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          设置
        </button>
      </div>

      {/* 标签页内容 */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'achievements' && renderAchievements()}
      {activeTab === 'activity' && renderActivity()}
      {activeTab === 'settings' && renderSettings()}
    </div>
  );
};

export default Profile;

