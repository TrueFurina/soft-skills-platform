import React from 'react';
import { Clock, CheckCircle, Star, TrendingUp, Target, BookOpen, Users, Award, Zap, BarChart3, ListChecks } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Mock Data for Dashboard
const skillData = [
  { subject: '沟通能力', A: 85, fullMark: 100 },
  { subject: '领导力', A: 78, fullMark: 100 },
  { subject: '情商管理', A: 82, fullMark: 100 },
  { subject: '团队协作', A: 90, fullMark: 100 },
  { subject: '问题解决', A: 75, fullMark: 100 },
  { subject: '适应能力', A: 88, fullMark: 100 },
];

const progressData = [
  { name: '周一', uv: 4000, pv: 2400, amt: 2400 },
  { name: '周二', uv: 3000, pv: 1398, amt: 2210 },
  { name: '周三', uv: 2000, pv: 9800, amt: 2290 },
  { name: '周四', uv: 2780, pv: 3908, amt: 2000 },
  { name: '周五', uv: 1890, pv: 4800, amt: 2181 },
  { name: '周六', uv: 2390, pv: 3800, amt: 2500 },
  { name: '周日', uv: 3490, pv: 4300, amt: 2100 },
];

const Dashboard = () => {
  const metricCards = [
    { title: '总训练时长', value: '24.5', unit: '小时', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: '完成场景', value: '18', unit: '个', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
    { title: '平均得分', value: '82', unit: '分', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' },
    { title: '技能提升', value: '+15', unit: '%', icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-50' },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* 欢迎卡片 - 匹配参考页面的大块蓝色背景 */}
      <div className="bg-[var(--secondary-dark)] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-extrabold mb-2">欢迎回来，张同学！</h2>
            <p className="text-white/90 text-lg mb-4">继续您的软技能提升之旅</p>
            <div className="flex space-x-6 text-sm">
              <p className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>本周目标: 完成3个训练场景</span>
              </p>
              <p className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4" />
                <span>总体进步: +12%</span>
              </p>
            </div>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>

      {/* 关键指标概览 - 匹配参考页面的四宫格卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCards.map((card, index) => (
          <div key={index} className="bg-white border-0 rounded-2xl card">
            <div className="p-6 card-content">
              <p className="text-sm text-gray-500 mb-1">{card.title}</p>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-[var(--primary-dark)]">
                  {card.value}
                  <span className="text-xl font-normal ml-1 text-gray-500">{card.unit}</span>
                </p>
                <div className={`w-10 h-10 ${card.bg} rounded-full flex items-center justify-center ${card.color}`}>
                  <card.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 技能雷达图 & 训练进度 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 技能雷达图 - 匹配参考页面的大图 */}
        <div className="lg:col-span-2 bg-white border-0 rounded-2xl card">
          <div className="card-header">
            <h3 className="card-title flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-[var(--secondary-dark)]" />
              <span>软技能能力雷达图</span>
            </h3>
          </div>
          <div className="card-content">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" stroke="#4b5563" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#e5e7eb" />
                  <Radar name="张同学" dataKey="A" stroke="var(--secondary-dark)" fill="var(--secondary-dark)" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-4">技能详细评分</p>
          </div>
        </div>

        {/* 训练进度 - 匹配参考页面的小卡片 */}
        <div className="bg-white border-0 rounded-2xl card">
          <div className="card-header">
            <h3 className="card-title flex items-center space-x-2">
              <ListChecks className="w-5 h-5 text-[var(--secondary-dark)]" />
              <span>本周训练进度</span>
            </h3>
          </div>
          <div className="card-content space-y-4">
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-sm font-medium">
                <span>沟通场景模拟</span>
                <span className="text-green-600">完成</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-sm font-medium">
                <span>团队协作挑战</span>
                <span className="text-yellow-600">进行中 (60%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between text-sm font-medium">
                <span>领导力决策训练</span>
                <span className="text-red-600">未开始</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 学习趋势图 */}
      <div className="bg-white border-0 rounded-2xl card">
        <div className="card-header">
          <h3 className="card-title flex items-center space-x-2">
            <AreaChart className="w-5 h-5 text-[var(--secondary-dark)]" />
            <span>近七日学习趋势</span>
          </h3>
        </div>
        <div className="card-content">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--secondary-dark)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--secondary-dark)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="var(--secondary-dark)" fillOpacity={1} fill="url(#colorUv)" name="学习时长 (分钟)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
