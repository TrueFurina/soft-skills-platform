import React from 'react';
import { TrendingUp, Target, Clock, Users, Award, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    { title: '综合评分', value: '85', icon: TrendingUp, color: 'bg-green-500' },
    { title: '本周目标', value: '12', icon: Target, color: 'bg-blue-500' },
    { title: '连续学习', value: '7', unit: '天', icon: Clock, color: 'bg-yellow-500' },
    { title: '学习时长', value: '24.5', unit: '小时', icon: Users, color: 'bg-purple-500' },
  ];

  const skillData = [
    { name: '沟通', score: 82 },
    { name: '领导', score: 79 },
    { name: '团队', score: 86 },
    { name: '解决', score: 75 },
    { name: '适应', score: 88 },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="bg-gradient-to-r from-[var(--tech-blue)] to-[var(--light-blue)] rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">欢迎回来，张同学！</h2>
        <p className="text-white/90 text-lg">您的软技能数字孪生系统已准备就绪。</p>
      </div>

      {/* 关键指标概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border-0 shadow-lg rounded-2xl card">
            <div className="p-6 card-content">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-[var(--deep-blue)]">
                    {stat.value}
                    {stat.unit && <span className="text-lg font-normal ml-1">{stat.unit}</span>}
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 技能雷达图 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border-0 shadow-lg rounded-2xl card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">软技能能力雷达图</h3>
          </div>
          <div className="card-content">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={skillData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#2a6496" fill="#2a6496" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 快速入口 */}
        <div className="bg-white border-0 shadow-lg rounded-2xl card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">快速入口</h3>
          </div>
          <div className="card-content space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-[var(--tech-blue)]" />
                <span className="font-medium text-[var(--deep-blue)]">开始训练</span>
              </div>
              <span className="text-sm text-gray-500">模拟场景</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-green-600" />
                <span className="font-medium text-[var(--deep-blue)]">能力评估</span>
              </div>
              <span className="text-sm text-gray-500">最新报告</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span className="font-medium text-[var(--deep-blue)]">学习路径</span>
              </div>
              <span className="text-sm text-gray-500">我的计划</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
