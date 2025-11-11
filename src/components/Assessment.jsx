
import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  BarChart3,
  TrendingUp,
  Download,
  Share2,
  RefreshCw,
  Award,
  Target,
  Calendar
} from 'lucide-react';
import RadarChart from './RadarChart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Assessment = () => {
  // 模拟数据
  const skillsData = [
    { skill: '沟通能力', value: 82 },
    { skill: '领导力', value: 79 },
    { skill: '情商管理', value: 86 },
    { skill: '团队协作', value: 75 },
    { skill: '问题解决', value: 70 },
    { skill: '适应能力', value: 68 }
  ];

  const detailedMetrics = [
    { name: '沟通能力', score: 82, improvement: '+5', color: 'bg-blue-500' },
    { name: '领导力', score: 79, improvement: '+3', color: 'bg-green-500' },
    { name: '情商管理', score: 86, improvement: '+8', color: 'bg-purple-500' },
    { name: '团队协作', score: 75, improvement: '+2', color: 'bg-orange-500' },
    { name: '问题解决', score: 70, improvement: '+4', color: 'bg-red-500' },
    { name: '适应能力', score: 68, improvement: '+1', color: 'bg-yellow-500' }
  ];

  const trendData = [
    { month: '1月', score: 65 },
    { month: '2月', score: 68 },
    { month: '3月', score: 72 },
    { month: '4月', score: 75 },
    { month: '5月', score: 78 },
    { month: '6月', score: 82 }
  ];

  const recentAssessments = [
    {
      date: '2024-01-15',
      scenario: '跨部门协作会议',
      overallScore: 85,
      topSkill: '沟通能力',
      improvementArea: '决策速度'
    },
    {
      date: '2024-01-10',
      scenario: '客户投诉处理',
      overallScore: 78,
      topSkill: '情商管理',
      improvementArea: '问题解决'
    },
    {
      date: '2024-01-05',
      scenario: '团队领导决策',
      overallScore: 82,
      topSkill: '领导力',
      improvementArea: '压力管理'
    }
  ];

  return (
    <div className="p-6 space-y-6 main-content">
      {/* 页面标题 */}
      <div className="card page-title-card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">能力评估报告</h2>
            <p className="text-white/90 text-lg">全面了解您的软技能发展状况</p>
          </div>
          <div className="hidden lg:block">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* 总体评分卡片 */}
      <div className="grid grid-cols-3">
        <div className="card stat-card">
          <div className="p-6 text-center card-content">
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--tech-blue)] to-[var(--light-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-1">82分</h3>
            <p className="text-gray-600 text-sm">综合评分</p>
            <div className="flex items-center justify-center mt-2 text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-sm">+5分 较上月</span>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="p-6 text-center card-content">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-1">情商管理</h3>
            <p className="text-gray-600 text-sm">最强技能</p>
            <div className="mt-2">
              <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">86分</span>
            </div>
          </div>
        </div>

        <div className="card stat-card">
          <div className="p-6 text-center card-content">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-1">适应能力</h3>
            <p className="text-gray-600 text-sm">待提升技能</p>
            <div className="mt-2">
              <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">68分</span>
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-3">
        {/* 软技能雷达图 */}
        <div className="lg:col-span-2 card">
          <div className="bg-white border-0 shadow-lg card">
            <div className="card-header">
              <h3 className="flex items-center justify-between text-[var(--deep-blue)] card-title">
                <span className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>软技能能力雷达图</span>
                </span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    下载报告
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    分享结果
                  </Button>
                </div>
              </h3>
            </div>
            <div className="card-content">
              <RadarChart data={skillsData} />
            </div>
          </div>
        </div>

        {/* 详细指标 */}
        <div className="card">
          <div className="bg-white border-0 shadow-lg card">
            <div className="card-header">
              <h3 className="text-[var(--deep-blue)] card-title">详细指标</h3>
            </div>
            <div className="space-y-4 card-content">
              {detailedMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-[var(--deep-blue)]">{metric.score}</span>
                      <span className="text-xs text-green-600 bg-green-50 px-1 py-0.5 rounded">
                        {metric.improvement}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={metric.score} className="flex-1 h-2" />
                    <div className={`w-3 h-3 rounded-full ${metric.color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 趋势分析 */}
      <div className="card">
        <div className="bg-white border-0 shadow-lg card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">能力发展趋势</h3>
          </div>
          <div className="card-content">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12, fill: '#64748b' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: '#64748b' }}
                    axisLine={{ stroke: '#e2e8f0' }}
                    domain={[60, 90]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2a6496"
                    strokeWidth={3}
                    dot={{ fill: '#2a6496', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#2a6496', strokeWidth: 2, fill: '#ffffff' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 最近评估记录 */}
      <div className="card">
        <div className="bg-white border-0 shadow-lg card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">最近评估记录</h3>
          </div>
          <div className="card-content">
            <div className="space-y-4">
              {recentAssessments.map((assessment, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-[var(--deep-blue)]">{assessment.scenario}</h4>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{assessment.date}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">综合得分：</span>
                      <span className="font-semibold text-[var(--tech-blue)] ml-1">{assessment.overallScore}分</span>
                    </div>
                    <div>
                      <span className="text-gray-600">优势技能：</span>
                      <span className="font-semibold text-green-600 ml-1">{assessment.topSkill}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">改进方向：</span>
                      <span className="font-semibold text-orange-600 ml-1">{assessment.improvementArea}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 行动建议 */}
      <div className="card">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-0 shadow-lg card">
          <div className="card-header">
            <h3 className="text-[var(--deep-blue)] card-title">个性化提升建议</h3>
          </div>
          <div className="card-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[var(--deep-blue)] mb-3">推荐训练场景</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[var(--tech-blue)] rounded-full"></div>
                    <span className="text-sm">压力管理与决策训练</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[var(--tech-blue)] rounded-full"></div>
                    <span className="text-sm">变化适应能力提升</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[var(--tech-blue)] rounded-full"></div>
                    <span className="text-sm">创新思维训练</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--deep-blue)] mb-3">学习资源推荐</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">《适应性领导力》课程</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">敏捷思维工作坊</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">变革管理实践指南</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-[var(--tech-blue)] hover:bg-[var(--deep-blue)]">
                开始个性化训练计划
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;

