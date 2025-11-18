import React, { useState } from 'react';
import { Award, TrendingUp, Calendar, Zap, BarChart3, Download, Share2 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Assessment = () => {
  const [selectedHistory, setSelectedHistory] = useState(null);
  const assessmentData = [
    { subject: '沟通能力', A: 85, fullMark: 100 },
    { subject: '领导力', A: 78, fullMark: 100 },
    { subject: '情商管理', A: 82, fullMark: 100 },
    { subject: '团队协作', A: 90, fullMark: 100 },
    { subject: '问题解决', A: 75, fullMark: 100 },
    { subject: '适应能力', A: 88, fullMark: 100 },
  ];

  const history = [
    { date: '2024-10-25', score: 82, improvement: '+5%', focus: '沟通能力' },
    { date: '2024-09-10', score: 77, improvement: '+2%', focus: '团队协作' },
    { date: '2024-07-15', score: 75, improvement: 'N/A', focus: '领导力' },
  ];

  const trendData = [
    { month: '7月', score: 75 },
    { month: '8月', score: 76 },
    { month: '9月', score: 77 },
    { month: '10月', score: 82 },
    { month: '11月', score: 85 },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-[var(--secondary-dark)] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">能力评估中心</h2>
            <p className="text-white/90 text-lg">基于AI的软技能深度分析报告</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* 核心指标与雷达图 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 核心指标 */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card p-6 bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">最新综合评分</p>
                <p className="text-3xl font-bold text-[var(--primary-dark)]">85 <span className="text-base font-normal text-green-600">+3%</span></p>
              </div>
            </div>
          </div>
          <div className="card p-6 bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">上次评估日期</p>
                <p className="text-xl font-bold text-[var(--primary-dark)]">2024年10月25日</p>
              </div>
            </div>
          </div>
          <button className="w-full py-3 px-4 bg-[var(--secondary-dark)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <Zap className="w-5 h-5" />
            <span>开始新的评估</span>
          </button>
          <div className="flex space-x-4">
            <button className="flex-1 py-3 px-4 bg-gray-100 text-[var(--primary-dark)] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Download className="w-5 h-5" />
              <span>下载报告</span>
            </button>
            <button className="flex-1 py-3 px-4 bg-gray-100 text-[var(--primary-dark)] font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>分享结果</span>
            </button>
          </div>
        </div>

        {/* 雷达图 */}
        <div className="lg:col-span-2 card bg-white">
          <div className="card-header">
            <h3 className="card-title flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-[var(--secondary-dark)]" />
              <span>软技能能力分布</span>
            </h3>
          </div>
          <div className="card-content">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={assessmentData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" stroke="#4b5563" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#e5e7eb" />
                  <Radar name="当前能力" dataKey="A" stroke="var(--secondary-dark)" fill="var(--secondary-dark)" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 趋势分析 */}
      <div className="card bg-white">
        <div className="card-header">
          <h3 className="card-title flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-[var(--secondary-dark)]" />
            <span>能力发展趋势</span>
          </h3>
        </div>
        <div className="card-content">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis domain={[70, 90]} stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="var(--secondary-dark)" strokeWidth={3} dot={{ fill: 'var(--secondary-dark)', r: 4 }} activeDot={{ r: 6 }} name="综合得分" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 评估历史 */}
      <div className="card bg-white">
        <div className="card-header">
          <h3 className="card-title flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-[var(--secondary-dark)]" />
            <span>评估历史记录</span>
          </h3>
        </div>
        <div className="card-content">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">综合得分</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">进步幅度</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">重点提升领域</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {history.map((item, index) => (
                  <tr 
                      key={index} 
                      className={`cursor-pointer transition-colors ${selectedHistory === index ? 'bg-blue-50' : 'hover:bg-gray-100'}`}
                      onClick={() => setSelectedHistory(index)}
                    >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[var(--primary-dark)]">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.score}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">{item.improvement}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.focus}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-[var(--secondary-dark)] hover:text-blue-700">查看报告</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
