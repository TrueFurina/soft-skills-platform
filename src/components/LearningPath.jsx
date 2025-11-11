
import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import {
  Target,
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  Brain,
  Users,
  Award,
  Play,
  Lock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Zap
} from 'lucide-react';

const LearningPath = () => {
  const [selectedPath, setSelectedPath] = useState('communication');

  const learningPaths = {
    communication: {
      title: '沟通能力提升路径',
      description: '从基础沟通到高级演讲技巧的完整学习路径',
      color: 'from-blue-500 to-cyan-500',
      icon: '🗣️',
      totalSteps: 8,
      completedSteps: 3,
      estimatedTime: '6-8周',
      difficulty: '中级',
      steps: [
        {
          id: 1,
          title: '基础沟通技巧',
          description: '学习有效沟通的基本原则和技巧',
          status: 'completed',
          duration: '45分钟',
          skills: ['倾听技巧', '表达清晰度'],
          score: 88
        },
        {
          id: 2,
          title: '非语言沟通',
          description: '掌握肢体语言和面部表情的运用',
          status: 'completed',
          duration: '40分钟',
          skills: ['肢体语言', '情感表达'],
          score: 92
        },
        {
          id: 3,
          title: '跨文化沟通',
          description: '了解不同文化背景下的沟通差异',
          status: 'completed',
          duration: '50分钟',
          skills: ['文化敏感度', '适应能力'],
          score: 85
        },
        {
          id: 4,
          title: '冲突解决沟通',
          description: '学习在冲突情况下的有效沟通策略',
          status: 'current',
          duration: '55分钟',
          skills: ['冲突管理', '协商技巧'],
          score: null
        },
        {
          id: 5,
          title: '团队沟通协作',
          description: '提升在团队环境中的沟通效率',
          status: 'locked',
          duration: '60分钟',
          skills: ['团队协作', '会议主持'],
          score: null
        },
        {
          id: 6,
          title: '公众演讲基础',
          description: '克服演讲恐惧，掌握基本演讲技巧',
          status: 'locked',
          duration: '70分钟',
          skills: ['演讲技巧', '自信表达'],
          score: null
        },
        {
          id: 7,
          title: '高级演讲技巧',
          description: '学习高级演讲技巧和说服力提升',
          status: 'locked',
          duration: '80分钟',
          skills: ['说服力', '影响力'],
          score: null
        },
        {
          id: 8,
          title: '领导力沟通',
          description: '掌握作为领导者的高效沟通方式',
          status: 'locked',
          duration: '90分钟',
          skills: ['领导力', '激励沟通'],
          score: null
        }
      ]
    },
    leadership: {
      title: '领导力发展路径',
      description: '从团队成员到优秀领导者的成长路径',
      color: 'from-purple-500 to-pink-500',
      icon: '👑',
      totalSteps: 7,
      completedSteps: 2,
      estimatedTime: '8-10周',
      difficulty: '高级',
      steps: [
        {
          id: 1,
          title: '自我认知与领导风格',
          description: '了解自己的领导风格和优势',
          status: 'completed',
          duration: '60分钟',
          skills: ['自我认知', '领导风格'],
          score: 90
        },
        {
          id: 2,
          title: '团队建设基础',
          description: '学习如何建设高效团队',
          status: 'completed',
          duration: '75分钟',
          skills: ['团队建设', '人员管理'],
          score: 87
        },
        {
          id: 3,
          title: '决策制定技巧',
          description: '掌握科学的决策制定方法',
          status: 'current',
          duration: '65分钟',
          skills: ['决策能力', '分析思维'],
          score: null
        }
      ]
    },
    emotional: {
      title: '情商管理路径',
      description: '提升情绪智能和人际关系管理能力',
      color: 'from-green-500 to-teal-500',
      icon: '🧠',
      totalSteps: 6,
      completedSteps: 1,
      estimatedTime: '5-7周',
      difficulty: '中级',
      steps: [
        {
          id: 1,
          title: '情绪自我认知',
          description: '识别和理解自己的情绪模式',
          status: 'completed',
          duration: '45分钟',
          skills: ['情绪认知', '自我觉察'],
          score: 93
        },
        {
          id: 2,
          title: '情绪调节技巧',
          description: '学习有效的情绪管理方法',
          status: 'current',
          duration: '50分钟',
          skills: ['情绪调节', '压力管理'],
          score: null
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedPath];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'current':
        return <Play className="w-5 h-5 text-blue-400" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed':
        return 'border-green-500/30 bg-green-500/10';
      case 'current':
        return 'border-blue-500/30 bg-blue-500/10 ring-2 ring-blue-500/20';
      case 'locked':
        return 'border-gray-500/30 bg-gray-500/5';
      default:
        return 'border-gray-500/30 bg-gray-500/5';
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-8 max-w-7xl mx-auto min-h-screen">
      {/* 页面标题 */}
      <div className="glass-card-enhanced p-6 md:p-8 text-white relative overflow-hidden card">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center pulse-glow">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient-enhanced">个性化学习路径</h1>
              <p className="text-white/80 text-base md:text-lg">AI定制的专属技能提升计划</p>
            </div>
          </div>
        </div>
      </div>

      {/* 学习路径选择 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(learningPaths).map(([key, path]) => (
          <div 
            key={key}
            className={`glass-card-enhanced border-0 cursor-pointer hover-lift micro-interaction card ${
              selectedPath === key ? 'ring-2 ring-blue-500/50' : ''
            }`}
            onClick={() => setSelectedPath(key)}
          >
            <div className="p-6 card-content">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${path.color} rounded-xl flex items-center justify-center`}>
                  <span className="text-2xl">{path.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{path.title}</h3>
                  <p className="text-sm text-white/70 line-clamp-2">{path.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/60">进度</span>
                  <span className="text-sm font-medium text-blue-400">
                    {path.completedSteps}/{path.totalSteps}
                  </span>
                </div>
                <div className="progress-advanced">
                  <div 
                    className="progress-advanced-bar" 
                    style={{ width: `${(path.completedSteps / path.totalSteps) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-white/60" />
                    <span className="text-white/60">{path.estimatedTime}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    path.difficulty === '高级' ? 'bg-red-500/20 text-red-300' :
                    path.difficulty === '中级' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {path.difficulty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 详细学习步骤 */}
      <div className="glass-card-enhanced border-0 card">
        <div className="pb-4 card-header">
          <h3 className="flex items-center space-x-3 text-white card-title">
            <div className={`w-8 h-8 bg-gradient-to-r ${currentPath.color} rounded-lg flex items-center justify-center`}>
              <Target className="w-5 h-5 text-white" />
            </div>
            <span>{currentPath.title} - 学习步骤</span>
          </h3>
        </div>
        <div className="pt-0 card-content">
          <div className="space-y-6">
            {currentPath.steps.map((step, index) => (
              <div key={step.id} className={`glass-card p-6 rounded-xl border ${getStatusColor(step.status)} hover-lift micro-interaction`}>
                <div className="flex items-start space-x-4">
                  {/* 步骤编号和状态 */}
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${currentPath.color}`}>
                      {step.status === 'completed' ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : step.status === 'current' ? (
                        <Play className="w-6 h-6 text-white" />
                      ) : (
                        <span className="text-white font-bold">{step.id}</span>
                      )}
                    </div>
                  </div>

                  {/* 步骤内容 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-white/70 text-sm mb-3">{step.description}</p>
                      </div>
                      {step.score && (
                        <div className="flex items-center space-x-2 ml-4">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm font-medium text-yellow-400">{step.score}分</span>
                        </div>
                      )}
                    </div>

                    {/* 技能标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* 底部信息和操作 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-white/60">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{step.duration}</span>
                        </div>
                        {getStatusIcon(step.status)}
                        <span className="capitalize">{
                          step.status === 'completed' ? '已完成' :
                          step.status === 'current' ? '进行中' :
                          step.status === 'locked' ? '未解锁' : '待开始'
                        }</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        {step.status === 'completed' && (
                          <Button variant="outline" size="sm" className="glass-card border-green-500/30 text-green-400 hover:bg-green-500/10">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            复习
                          </Button>
                        )}
                        {step.status === 'current' && (
                          <Button className="premium-button">
                            <Play className="w-4 h-4 mr-2" />
                            继续学习
                          </Button>
                        )}
                        {step.status === 'locked' && (
                          <Button disabled className="opacity-50 cursor-not-allowed">
                            <Lock className="w-4 h-4 mr-2" />
                            未解锁
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 连接线 */}
                {index < currentPath.steps.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-5 h-5 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI推荐和统计 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AI推荐 */}
        <div className="glass-card-enhanced border-0 card">
          <div className="pb-4 card-header">
            <h3 className="flex items-center space-x-3 text-white card-title">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span>AI智能推荐</span>
            </h3>
          </div>
          <div className="pt-0 space-y-4 card-content">
            <div className="glass-card p-4 rounded-xl border-gradient-animated card">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-2">个性化建议</h4>
                  <p className="text-sm text-white/70 mb-3">
                    基于您的学习进度和表现，建议您在完成当前"冲突解决沟通"模块后，
                    重点关注"团队沟通协作"技能的提升。
                  </p>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-yellow-400">预计提升效果: +18%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 rounded-xl card">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white mb-2">同伴学习</h4>
                  <p className="text-sm text-white/70 mb-3">
                    发现3位学习伙伴正在学习相同路径，建议加入学习小组进行互动练习。
                  </p>
                  <Button size="sm" className="premium-button">
                    <Users className="w-4 h-4 mr-1" />
                    加入小组
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 学习统计 */}
        <div className="glass-card-enhanced border-0 card">
          <div className="pb-4 card-header">
            <h3 className="flex items-center space-x-3 text-white card-title">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span>学习统计</span>
            </h3>
          </div>
          <div className="pt-0 space-y-6 card-content">
            <div className="glass-card p-4 rounded-xl text-center card">
              <div className="p-0 card-content">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-white/70">已完成路径</div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center card">
              <div className="p-0 card-content">
                <div className="text-2xl font-bold text-white">28</div>
                <div className="text-sm text-white/70">总训练数</div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center card">
              <div className="p-0 card-content">
                <div className="text-2xl font-bold text-white">120</div>
                <div className="text-sm text-white/70">小时学习</div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-xl text-center card">
              <div className="p-0 card-content">
                <div className="text-2xl font-bold text-white">92</div>
                <div className="text-sm text-white/70">平均得分</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;

