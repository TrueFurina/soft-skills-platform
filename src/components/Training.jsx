import React, { useState } from 'react';
import { Zap, Clock, TrendingUp, Award, Play, CheckCircle, Target, Users } from 'lucide-react';

const Training = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);
  const trainingScenarios = [
    {
      title: '高压谈判模拟',
      description: '在模拟的高压环境中进行商业谈判，提升抗压能力和谈判技巧。',
      status: '已完成',
      progress: 100,
      score: 92,
      duration: '60分钟',
      color: 'bg-green-500',
      skill: '沟通能力',
    },
    {
      title: '跨部门冲突解决',
      description: '模拟处理两个部门间的资源冲突，练习沟通和协调能力。',
      status: '进行中',
      progress: 60,
      score: null,
      duration: '45分钟',
      color: 'bg-blue-500',
      skill: '团队协作',
    },
    {
      title: '危机公关演练',
      description: '模拟公司突发危机，练习快速反应和对外沟通能力。',
      status: '未开始',
      progress: 0,
      score: null,
      duration: '75分钟',
      color: 'bg-gray-500',
      skill: '问题解决',
    },
    {
      title: '团队激励与士气提升',
      description: '模拟作为团队领导，设计并实施激励计划。',
      status: '未开始',
      progress: 0,
      score: null,
      duration: '50分钟',
      color: 'bg-yellow-500',
      skill: '领导力',
    },
    {
      title: '情商管理：情绪识别',
      description: '通过AI面部和语音分析，训练情绪识别和共情能力。',
      status: '未开始',
      progress: 0,
      score: null,
      duration: '30分钟',
      color: 'bg-purple-500',
      skill: '情商管理',
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-[var(--secondary-dark)] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">技能训练中心</h2>
            <p className="text-white/90 text-lg">沉浸式AI模拟场景，即时反馈提升</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* 训练概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">总场景数</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">12</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">已完成</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">4</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">平均得分</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">85分</p>
            </div>
          </div>
        </div>
      </div>

      {/* 训练场景列表 */}
      <div className="space-y-6">
        {trainingScenarios.map((scenario, index) => (
          <div 
            key={index} 
            className={`card p-6 bg-white flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all duration-300 ${selectedScenario === index ? 'ring-4 ring-blue-500 ring-opacity-50 shadow-xl' : 'hover:shadow-lg'}`}
            onClick={() => setSelectedScenario(index)}
          >
            <div className="flex-1 space-y-2">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${scenario.color}`}></div>
                <h2 className="text-xl font-semibold text-[var(--primary-dark)]">{scenario.title}</h2>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${scenario.status === '已完成' ? 'bg-green-100 text-green-800' : scenario.status === '进行中' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                  {scenario.status}
                </span>
              </div>
              <p className="text-gray-600 ml-6">{scenario.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 ml-6">
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span>{scenario.skill}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{scenario.duration}</span>
                </div>
                {scenario.score && (
                  <div className="flex items-center space-x-1 text-green-600">
                    <Award className="w-4 h-4" />
                    <span>得分: {scenario.score}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full md:w-64 mt-4 md:mt-0">
              <div className="flex justify-between mb-1 text-sm font-medium text-[var(--primary-dark)]">
                <span>进度</span>
                <span>{scenario.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${scenario.color} h-2.5 rounded-full`} style={{ width: `${scenario.progress}%` }}></div>
              </div>
              <button className="mt-3 w-full py-2 px-4 bg-[var(--secondary-dark)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                {scenario.status === '已完成' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>查看报告</span>
                  </>
                ) : scenario.status === '进行中' ? (
                  <>
                    <Play className="w-5 h-5" />
                    <span>继续训练</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span>开始训练</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
