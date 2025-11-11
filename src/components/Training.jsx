
import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Mic,
  Camera,
  Brain,
  TrendingUp,
  Clock,
  Target,
  Users,
  Briefcase,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Zap,
  MessageCircle
} from 'lucide-react';

const Training = () => {
  const [isTraining, setIsTraining] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(60);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const scenarios = [
    // 沟通协作类
    {
      id: 1,
      title: '跨部门协作会议',
      description: '模拟与不同部门同事进行项目协调的会议场景',
      difficulty: '中级',
      duration: '30分钟',
      category: 'communication',
      skills: ['沟通能力', '团队协作', '问题解决'],
      participants: ['产品经理', '技术负责人', '设计师'],
      objectives: ['明确项目需求', '协调资源分配', '制定时间计划'],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: '客户投诉处理',
      description: '处理客户对产品或服务不满的投诉情况',
      difficulty: '高级',
      duration: '25分钟',
      category: 'communication',
      skills: ['情商管理', '沟通能力', '问题解决'],
      participants: ['愤怒的客户', '客服主管'],
      objectives: ['安抚客户情绪', '了解问题根源', '提供解决方案'],
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'bg-red-500'
    },
    {
      id: 3,
      title: '国际商务谈判',
      description: '与海外客户进行商务合作谈判',
      difficulty: '高级',
      duration: '45分钟',
      category: 'communication',
      skills: ['沟通能力', '文化适应', '谈判技巧'],
      participants: ['海外客户', '翻译', '法务顾问'],
      objectives: ['建立信任关系', '达成合作意向', '确定合同条款'],
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    
    // 领导管理类
    {
      id: 4,
      title: '团队领导决策',
      description: '作为团队负责人，在紧急情况下做出重要决策',
      difficulty: '高级',
      duration: '40分钟',
      category: 'leadership',
      skills: ['领导力', '决策能力', '压力管理'],
      participants: ['团队成员A', '团队成员B', '上级领导'],
      objectives: ['分析问题', '权衡利弊', '做出决策'],
      icon: <Target className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: '绩效面谈指导',
      description: '与下属进行绩效评估和职业发展指导',
      difficulty: '中级',
      duration: '35分钟',
      category: 'leadership',
      skills: ['领导力', '沟通能力', '指导技能'],
      participants: ['下属员工', 'HR代表'],
      objectives: ['评估工作表现', '制定改进计划', '规划职业发展'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-indigo-500'
    },
    {
      id: 6,
      title: '变革管理推进',
      description: '推动组织变革，处理员工阻力',
      difficulty: '高级',
      duration: '50分钟',
      category: 'leadership',
      skills: ['领导力', '变革管理', '影响力'],
      participants: ['抗拒变革的员工', '中层管理者', '变革顾问'],
      objectives: ['传达变革愿景', '化解员工阻力', '制定实施计划'],
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-yellow-500'
    },

    // 情商管理类
    {
      id: 7,
      title: '冲突调解处理',
      description: '调解团队内部成员之间的工作冲突',
      difficulty: '中级',
      duration: '30分钟',
      category: 'emotional',
      skills: ['情商管理', '冲突解决', '沟通能力'],
      participants: ['冲突双方', '团队其他成员'],
      objectives: ['了解冲突原因', '促进双方理解', '达成和解方案'],
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-pink-500'
    },
    {
      id: 8,
      title: '压力危机应对',
      description: '在高压环境下保持冷静并做出正确判断',
      difficulty: '高级',
      duration: '20分钟',
      category: 'emotional',
      skills: ['压力管理', '情绪控制', '危机应对'],
      participants: ['紧急事件相关人员', '上级领导'],
      objectives: ['快速评估情况', '制定应急方案', '稳定团队情绪'],
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-orange-500'
    },

    // 创新思维类
    {
      id: 9,
      title: '创新方案设计',
      description: '带领团队进行头脑风暴，设计创新解决方案',
      difficulty: '中级',
      duration: '40分钟',
      category: 'innovation',
      skills: ['创新思维', '团队协作', '问题解决'],
      participants: ['创意团队', '技术专家', '市场分析师'],
      objectives: ['激发创意思维', '整合多方观点', '形成可行方案'],
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'bg-cyan-500'
    },
    {
      id: 10,
      title: '数字化转型规划',
      description: '制定企业数字化转型战略和实施路径',
      difficulty: '高级',
      duration: '60分钟',
      category: 'innovation',
      skills: ['战略思维', '创新管理', '技术理解'],
      participants: ['IT团队', '业务部门', '外部顾问'],
      objectives: ['分析现状', '设计转型路径', '制定实施计划'],
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-teal-500'
    },

    // 商务专业类
    {
      id: 11,
      title: '投资项目路演',
      description: '向投资人展示项目价值和商业前景',
      difficulty: '高级',
      duration: '35分钟',
      category: 'business',
      skills: ['演讲能力', '商业思维', '说服力'],
      participants: ['投资人', '财务顾问', '行业专家'],
      objectives: ['展示项目亮点', '回答投资疑问', '获得投资意向'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-gray-500'
    },
    {
      id: 12,
      title: '危机公关处理',
      description: '应对企业负面舆情和媒体危机',
      difficulty: '高级',
      duration: '45分钟',
      category: 'business',
      skills: ['危机管理', '媒体沟通', '公关策略'],
      participants: ['媒体记者', '公关团队', '法务顾问'],
      objectives: ['控制舆情发展', '传达企业立场', '重建公众信任'],
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-red-600'
    }
  ];

  const categories = [
    { id: 'all', name: '全部场景', icon: <Target className="w-4 h-4" /> },
    { id: 'communication', name: '沟通协作', icon: <MessageCircle className="w-4 h-4" /> },
    { id: 'leadership', name: '领导管理', icon: <Users className="w-4 h-4" /> },
    { id: 'emotional', name: '情商管理', icon: <Heart className="w-4 h-4" /> },
    { id: 'innovation', name: '创新思维', icon: <Lightbulb className="w-4 h-4" /> },
    { id: 'business', name: '商务专业', icon: <Briefcase className="w-4 h-4" /> }
  ];

  const realTimeFeedback = {
    emotion: '专注',
    speechRate: 68,
    keywordDensity: 125,
    pauseCount: 5,
    confidence: 85,
    engagement: 92
  };

  const filteredScenarios = selectedCategory === 'all' 
    ? scenarios 
    : scenarios.filter(scenario => scenario.category === selectedCategory);

  const handleStartTraining = (scenario) => {
    setSelectedScenario(scenario);
    setIsTraining(true);
  };

  const handlePauseTraining = () => {
    setIsTraining(false);
  };

  const handleResetTraining = () => {
    setIsTraining(false);
    setCurrentProgress(0);
    setSelectedScenario(null);
  };

  if (selectedScenario && isTraining) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        {/* 训练界面 */}
        <div className="main-content-grid">
          {/* 主要训练区域 */}
          <div className="main-training-area">
            <div className="h-full bg-white border-0 shadow-lg card">
              <div className="pb-4 card-header">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${selectedScenario.color} rounded-lg flex items-center justify-center text-white`}>
                      {selectedScenario.icon}
                    </div>
                    <div>
                      <h3 className="text-[var(--deep-blue)] card-title">{selectedScenario.title}</h3>
                      <p className="text-sm text-gray-600">{selectedScenario.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={handlePauseTraining}>
                      <Pause className="w-4 h-4 mr-2" />
                      暂停
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleResetTraining}>
                      <RotateCcw className="w-4 h-4 mr-2" />
                      重置
                    </Button>
                  </div>
                </div>
              </div>
              <div className="h-full card-content">
                {/* 虚拟场景显示区域 */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl h-96 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-blue)]/10 to-[var(--tech-blue)]/10"></div>
                  <div className="text-center z-10">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <div className={`w-24 h-24 ${selectedScenario.color} rounded-full flex items-center justify-center text-white`}>
                        {selectedScenario.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--deep-blue)] mb-2">AI虚拟场景</h3>
                    <p className="text-gray-600">正在进行 {selectedScenario.title} 训练...</p>
                  </div>
                  
                  {/* 录制指示器 */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full pulse-animation"></div>
                    <span className="text-sm text-gray-700">正在录制</span>
                  </div>
                  
                  {/* 音频/视频控制 */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="outline" className="bg-white/80">
                      <Camera className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/80">
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/80">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* 对话选项 */}
                <div className="space-y-3">
                  <h4 className="font-medium text-[var(--deep-blue)] mb-3">请选择您的回应：</h4>
                  <div className="grid gap-3">
                    <Button variant="outline" className="justify-start h-auto p-4 text-left hover:bg-blue-50">
                      <span className="text-sm">我理解您的观点，让我们从另一个角度来分析这个问题...</span>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 text-left hover:bg-blue-50">
                      <span className="text-sm">这确实是一个挑战，我建议我们先收集更多信息再做决定...</span>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4 text-left hover:bg-blue-50">
                      <span className="text-sm">我想听听大家的想法，我们可以一起讨论可能的解决方案...</span>
                    </Button>
                  </div>
                </div>

                {/* 进度条 */}
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">训练进度</span>
                    <span className="text-sm font-medium text-[var(--tech-blue)]">{currentProgress}%</span>
                  </div>
                  <Progress value={currentProgress} className="h-3" />
                </div>
              </div>
            </div>
          </div>

          {/* 实时反馈面板 */}
          <div className="real-time-feedback-panel card">
            <div className="card-header">
              <h3 className="text-sm text-[var(--deep-blue)] card-title">情绪状态</h3>
            </div>
            <div className="space-y-4 card-content">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">😊</span>
                </div>
                <p className="text-sm font-medium text-[var(--deep-blue)]">{realTimeFeedback.emotion}</p>
              </div>
            </div>
          </div>

          <div className="real-time-analysis-panel card">
            <div className="card-header">
              <h3 className="text-sm text-[var(--deep-blue)] card-title">实时分析</h3>
            </div>
            <div className="space-y-4 card-content">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">语速控制</span>
                  <span className="text-xs font-medium text-[var(--tech-blue)]">{realTimeFeedback.speechRate}%</span>
                </div>
                <Progress value={realTimeFeedback.speechRate} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">关键词密度</span>
                  <span className="text-xs font-medium text-[var(--tech-blue)]">{realTimeFeedback.keywordDensity}</span>
                </div>
                <Progress value={Math.min(realTimeFeedback.keywordDensity, 100)} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">自信度</span>
                  <span className="text-xs font-medium text-[var(--tech-blue)]">{realTimeFeedback.confidence}%</span>
                </div>
                <Progress value={realTimeFeedback.confidence} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">参与度</span>
                  <span className="text-xs font-medium text-[var(--tech-blue)]">{realTimeFeedback.engagement}%</span>
                </div>
                <Progress value={realTimeFeedback.engagement} className="h-2" />
              </div>
              
              <div className="pt-2 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">停顿次数</span>
                  <span className="text-xs font-medium text-[var(--tech-blue)]">{realTimeFeedback.pauseCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-gradient-to-r from-[var(--tech-blue)] to-[var(--light-blue)] rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">技能训练中心</h2>
        <p className="text-white/90 text-lg">选择训练场景，提升您的软技能</p>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-[var(--tech-blue)] text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* 训练场景列表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredScenarios.map((scenario) => (
          <div key={scenario.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group card">
            <div className="card-header">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${scenario.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    {scenario.icon}
                  </div>
                  <div>
                    <h3 className="text-[var(--deep-blue)] text-lg card-title">{scenario.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                      scenario.difficulty === '高级' 
                        ? 'bg-red-100 text-red-700' 
                        : scenario.difficulty === '中级'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                    }`}>
                      {scenario.difficulty}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{scenario.duration}</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 card-content">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{scenario.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {scenario.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <Button 
                className="w-full bg-[var(--tech-blue)] hover:bg-[var(--deep-blue)] text-white"
                onClick={() => handleStartTraining(scenario)}
              >
                <Play className="w-4 h-4 mr-2" />
                开始训练
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;

