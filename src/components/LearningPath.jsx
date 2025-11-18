import React, { useState } from 'react';
import { BookOpen, CheckCircle, Clock, TrendingUp, Zap, Target, User } from 'lucide-react';

const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState(null);
  const paths = [
    {
      title: '高效沟通大师之路',
      progress: 75,
      status: '进行中',
      duration: '4周',
      modules: 8,
      description: '专注于提升职场沟通技巧，包括倾听、表达、谈判和冲突解决。',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '卓越领导力培养计划',
      progress: 100,
      status: '已完成',
      duration: '6周',
      modules: 12,
      description: '培养团队领导、激励和决策能力，适用于未来管理岗位。',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: '情商与压力管理',
      progress: 30,
      status: '未开始',
      duration: '3周',
      modules: 6,
      description: '学习自我情绪调节、情商提升和高效应对工作压力的方法。',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-[var(--secondary-dark)] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">个性化学习路径</h2>
            <p className="text-white/90 text-lg">AI定制的专属技能提升计划</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* 路径概览卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">总路径数</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">3</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">已完成</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">1</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">当前进度</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">75%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 学习路径列表 */}
      <div className="space-y-6">
        {paths.map((path, index) => (
          <div 
            key={index} 
            className={`card p-6 bg-white flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-300 ${selectedPath === index ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-xl' : 'hover:shadow-lg'}`}
            onClick={() => setSelectedPath(index)}
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${path.color}`}></div>
                <h2 className="text-xl font-semibold text-[var(--primary-dark)]">{path.title}</h2>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${path.status === '已完成' ? 'bg-green-100 text-green-800' : path.status === '进行中' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                  {path.status}
                </span>
              </div>
              <p className="text-gray-600 ml-6">{path.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 ml-6">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{path.modules} 模块</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-64 mt-4 md:mt-0">
              <div className="flex justify-between mb-1 text-sm font-medium text-[var(--primary-dark)]">
                <span>进度</span>
                <span>{path.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`h-2.5 rounded-full bg-gradient-to-r ${path.color}`} style={{ width: `${path.progress}%` }}></div>
              </div>
              <button className="mt-3 w-full py-2 px-4 bg-[var(--secondary-dark)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
                {path.status === '已完成' ? '查看证书' : path.status === '进行中' ? '继续学习' : '开始路径'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPath;
