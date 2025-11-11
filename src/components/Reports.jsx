
import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import {
  FileText,
  Download,
  Share2,
  Calendar,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Clock,
  Users,
  Filter,
  Search
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Reports = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('6months');
  const [selectedReportType, setSelectedReportType] = useState('all');

  // 模拟数据
  const performanceData = [
    { month: '1月', communication: 65, leadership: 60, emotional: 70, teamwork: 68, problem: 62, adaptability: 58 },
    { month: '2月', communication: 68, leadership: 65, emotional: 72, teamwork: 70, problem: 65, adaptability: 62 },
    { month: '3月', communication: 72, leadership: 68, emotional: 75, teamwork: 72, problem: 68, adaptability: 65 },
    { month: '4月', communication: 75, leadership: 72, emotional: 78, teamwork: 75, problem: 70, adaptability: 68 },
    { month: '5月', communication: 78, leadership: 75, emotional: 82, teamwork: 78, problem: 73, adaptability: 70 },
    { month: '6月', communication: 82, leadership: 79, emotional: 86, teamwork: 75, problem: 70, adaptability: 68 }
  ];

  const skillDistribution = [
    { name: '沟通能力', value: 82, color: '#2a6496' },
    { name: '领导力', value: 79, color: '#61a5c2' },
    { name: '情商管理', value: 86, color: '#1a365d' },
    { name: '团队协作', value: 75, color: '#ff7f50' },
    { name: '问题解决', value: 70, color: '#28a745' },
    { name: '适应能力', value: 68, color: '#6c757d' }
  ];

  const trainingEffectiveness = [
    { scenario: '跨部门协作', before: 65, after: 82, improvement: 17 },
    { scenario: '客户投诉处理', before: 70, after: 86, improvement: 16 },
    { scenario: '团队领导决策', before: 68, after: 79, improvement: 11 },
    { scenario: '压力管理', before: 60, after: 75, improvement: 15 },
    { scenario: '创新思维', before: 55, after: 68, improvement: 13 }
  ];

  const reportHistory = [
    {
      id: 1,
      title: '2024年第一季度软技能发展报告',
      date: '2024-03-31',
      type: '季度报告',
      status: '已完成',
      highlights: ['沟通能力提升15%', '领导力达到优秀水平', '团队协作有待加强']
    },
    {
      id: 2,
      title: '跨部门协作专项训练报告',
      date: '2024-03-15',
      type: '专项报告',
      status: '已完成',
      highlights: ['协作效率提升20%', '冲突处理能力增强', '沟通技巧显著改善']
    },
    {
      id: 3,
      title: '情商管理深度分析报告',
      date: '2024-02-28',
      type: '深度分析',
      status: '已完成',
      highlights: ['情绪识别准确率85%', '压力管理技能优秀', '共情能力待提升']
    }
  ];

  const benchmarkData = [
    { category: '同行业平均', communication: 75, leadership: 70, emotional: 78, teamwork: 72, problem: 68, adaptability: 65 },
    { category: '您的表现', communication: 82, leadership: 79, emotional: 86, teamwork: 75, problem: 70, adaptability: 68 },
    { category: '行业优秀', communication: 90, leadership: 88, emotional: 92, teamwork: 85, problem: 82, adaptability: 80 }
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* 页面标题和筛选 */}
      <div className="bg-gradient-to-r from-[var(--tech-blue)] to-[var(--light-blue)] rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">报告中心</h2>
            <p className="text-white/90 text-lg">深度分析您的软技能发展轨迹</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        
        {/* 筛选控件 */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <select 
              value={selectedTimeRange} 
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-white/20 border border-white/30 rounded-lg px-3 py-1 text-sm text-white backdrop-blur-sm"
            >
              <option value="1month">近1个月</option>
              <option value="3months">近3个月</option>
              <option value="6months">近6个月</option>
              <option value="1year">近1年</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <select 
              value={selectedReportType} 
              onChange={(e) => setSelectedReportType(e.target.value)}
              className="bg-white/20 border border-white/30 rounded-lg px-3 py-1 text-sm text-white backdrop-blur-sm"
            >
              <option value="all">所有报告</option>
              <option value="quarterly">季度报告</option>
              <option value="special">专项报告</option>
              <option value="analysis">深度分析</option>
            </select>
          </div>
        </div>
      </div>

      {/* 关键指标概览 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="p-6 card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">总体进步</p>
                <p className="text-2xl font-bold text-[var(--deep-blue)]">+18%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="p-6 card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">训练效果</p>
                <p className="text-2xl font-bold text-[var(--deep-blue)]">优秀</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-[var(--tech-blue)]" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="p-6 card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">行业排名</p>
                <p className="text-2xl font-bold text-[var(--deep-blue)]">前15%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="p-6 card-content">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">活跃度</p>
                <p className="text-2xl font-bold text-[var(--deep-blue)]">92%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技能发展趋势 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">技能发展趋势分析</h3>
        </div>
        <div className="card-content">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} domain={[50, 90]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area type="monotone" dataKey="communication" stackId="1" stroke="#2a6496" fill="#2a6496" fillOpacity={0.6} />
                <Area type="monotone" dataKey="leadership" stackId="2" stroke="#61a5c2" fill="#61a5c2" fillOpacity={0.6} />
                <Area type="monotone" dataKey="emotional" stackId="3" stroke="#1a365d" fill="#1a365d" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 技能分布和训练效果 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 技能分布饼图 */}
        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">技能分布分析</h3>
          </div>
          <div className="card-content">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={skillDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {skillDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* 训练效果分析 */}
        <div className="bg-white border-0 shadow-lg rounded-2xl shadow-lg card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">训练效果分析</h3>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {trainingEffectiveness.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-700">{item.scenario}</h4>
                    <span className="text-sm font-bold text-green-600">+{item.improvement}分</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>训练前: {item.before}分</span>
                        <span>训练后: {item.after}分</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[var(--tech-blue)] h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${(item.after / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 行业对比分析 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">行业对比分析</h3>
        </div>
        <div className="card-content">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={benchmarkData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} domain={[60, 95]} />
                <Tooltip />
                <Line type="monotone" dataKey="communication" stroke="#2a6496" strokeWidth={2} />
                <Line type="monotone" dataKey="leadership" stroke="#61a5c2" strokeWidth={2} />
                <Line type="monotone" dataKey="emotional" stroke="#1a365d" strokeWidth={2} />
                <Line type="monotone" dataKey="teamwork" stroke="#ff7f50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 历史报告 */}
      <div className="bg-white border-0 shadow-lg card">
        <div className="card-header">
          <h3 className="text-[var(--deep-blue)] card-title">历史报告</h3>
        </div>
        <div className="card-content">
          <div className="space-y-4">
            {reportHistory.map((report) => (
              <div key={report.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[var(--deep-blue)]">{report.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-blue-100 text-[var(--tech-blue)] px-2 py-1 rounded">
                      {report.type}
                    </span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      {report.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{report.date}</p>
                <div className="mb-3">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">主要亮点：</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {report.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-[var(--tech-blue)] rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    下载
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    分享
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

