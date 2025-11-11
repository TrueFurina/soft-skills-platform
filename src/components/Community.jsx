
import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Removed Card import
import { Button } from '@/components/ui/button';
import {
  Users,
  MessageCircle,
  Heart,
  Share2,
  Trophy,
  Star,
  TrendingUp,
  Clock,
  Award,
  Target,
  Zap,
  Crown,
  Medal,
  Sparkles,
  ThumbsUp,
  Eye,
  BookOpen,
  Calendar,
  MapPin,
  UserPlus,
  Activity
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [likedPosts, setLikedPosts] = useState(new Set());

  const communityFeed = [
    {
      id: 1,
      user: {
        name: '李明',
        avatar: '👨‍💼',
        level: '沟通大师',
        badge: '🏆'
      },
      content: '刚刚完成了"跨部门协作沟通"训练，学到了很多实用技巧！特别是在处理不同部门利益冲突时的沟通策略。',
      timestamp: '2小时前',
      likes: 24,
      comments: 8,
      shares: 3,
      tags: ['沟通技巧', '团队协作'],
      achievement: '完成高级沟通训练',
      media: null
    },
    {
      id: 2,
      user: {
        name: '王小雨',
        avatar: '👩‍💻',
        level: '情商专家',
        badge: '🌟'
      },
      content: '分享一个情绪管理的小技巧：当感到压力时，试试"4-7-8呼吸法"。吸气4秒，屏息7秒，呼气8秒。在今天的客户投诉处理训练中非常有用！',
      timestamp: '4小时前',
      likes: 45,
      comments: 12,
      shares: 8,
      tags: ['情绪管理', '压力缓解'],
      achievement: null,
      media: '💡'
    },
    {
      id: 3,
      user: {
        name: '张团长',
        avatar: '👨‍🎓',
        level: '领导力导师',
        badge: '👑'
      },
      content: '今天在"团队决策制定"场景中获得了95分！关键是要平衡不同成员的意见，同时保持决策的效率。感谢AI导师的实时反馈。',
      timestamp: '6小时前',
      likes: 67,
      comments: 15,
      shares: 12,
      tags: ['领导力', '决策制定'],
      achievement: '获得决策大师称号',
      media: null
    },
    {
      id: 4,
      user: {
        name: '陈思思',
        avatar: '👩‍🔬',
        level: '问题解决者',
        badge: '🧩'
      },
      content: '参加了今天的"创新思维工作坊"线上活动，和来自不同行业的小伙伴一起头脑风暴，收获满满！下次活动记得报名哦～',
      timestamp: '1天前',
      likes: 32,
      comments: 6,
      shares: 4,
      tags: ['创新思维', '工作坊'],
      achievement: null,
      media: '🎯'
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      user: '张团长',
      avatar: '👨‍🎓',
      score: 2847,
      badge: '👑',
      level: '领导力导师',
      weeklyGrowth: '+156'
    },
    {
      rank: 2,
      user: '王小雨',
      avatar: '👩‍💻',
      score: 2634,
      badge: '🌟',
      level: '情商专家',
      weeklyGrowth: '+142'
    },
    {
      rank: 3,
      user: '李明',
      avatar: '👨‍💼',
      score: 2456,
      badge: '🏆',
      level: '沟通大师',
      weeklyGrowth: '+128'
    },
    {
      rank: 4,
      user: '陈思思',
      avatar: '👩‍🔬',
      score: 2234,
      badge: '🧩',
      level: '问题解决者',
      weeklyGrowth: '+98'
    },
    {
      rank: 5,
      user: '刘小华',
      avatar: '👨‍🏫',
      score: 2156,
      badge: '📚',
      level: '学习达人',
      weeklyGrowth: '+87'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: '跨文化沟通工作坊',
      description: '学习在全球化环境中的有效沟通技巧',
      date: '2024年1月20日',
      time: '14:00-16:00',
      participants: 45,
      maxParticipants: 60,
      type: '在线活动',
      difficulty: '中级',
      host: '国际沟通专家 - 李教授'
    },
    {
      id: 2,
      title: '领导力挑战赛',
      description: '团队领导能力的实战演练和竞技',
      date: '2024年1月25日',
      time: '19:00-21:00',
      participants: 32,
      maxParticipants: 40,
      type: '竞赛活动',
      difficulty: '高级',
      host: '企业导师团队'
    },
    {
      id: 3,
      title: '情商提升训练营',
      description: '7天情商集训，提升情绪管理能力',
      date: '2024年2月1日',
      time: '全天',
      participants: 78,
      maxParticipants: 100,
      type: '训练营',
      difficulty: '中级',
      host: '心理学专家 - 王博士'
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: '互联网沟通精英团',
      description: '专注于互联网行业的沟通技巧提升',
      members: 28,
      maxMembers: 30,
      activity: '非常活跃',
      tags: ['互联网', '沟通技巧', '职场'],
      avatar: '💻',
      recentActivity: '2小时前有新讨论'
    },
    {
      id: 2,
      name: '领导力成长营',
      description: '从团队成员到管理者的进阶之路',
      members: 35,
      maxMembers: 40,
      activity: '活跃',
      tags: ['领导力', '管理', '成长'],
      avatar: '👑',
      recentActivity: '5小时前有新分享'
    },
    {
      id: 3,
      name: '情商修炼社',
      description: '一起提升情商，改善人际关系',
      members: 42,
      maxMembers: 50,
      activity: '活跃',
      tags: ['情商', '人际关系', '心理'],
      avatar: '🧠',
      recentActivity: '1天前有新成员加入'
    }
  ];

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'from-yellow-500 to-orange-500';
      case 2: return 'from-gray-400 to-gray-600';
      case 3: return 'from-orange-600 to-yellow-600';
      default: return 'from-blue-500 to-purple-500';
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-400" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-orange-400" />;
      default: return <Trophy className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-8 main-content">
      {/* 页面标题 */}
      <div className="glass-card-enhanced p-6 md:p-8 text-white relative overflow-hidden card">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center pulse-glow">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gradient-enhanced">学习社区</h1>
              <p className="text-white/80 text-base md:text-lg">与全球学习者一起成长进步</p>
            </div>
          </div>
        </div>
      </div>

      {/* 导航标签 */}
      <div className="flex space-x-1 glass-card-enhanced p-2 rounded-2xl w-fit">
        {[
          { key: 'feed', label: '动态', icon: MessageCircle },
          { key: 'leaderboard', label: '排行榜', icon: Trophy },
          { key: 'events', label: '活动', icon: Calendar },
          { key: 'groups', label: '学习小组', icon: Users }
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
              activeTab === key 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </div>

      {/* 内容区域 */}
      {activeTab === 'feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 主要动态 */}
          <div className="lg:col-span-2 space-y-6">
            {communityFeed.map((post) => (
              <div key={post.id} className="glass-card-enhanced border-0 hover-lift card">
                <div className="p-6 card-content">
                  {/* 用户信息 */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                      {post.user.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-white">{post.user.name}</h4>
                        <span className="text-lg">{post.user.badge}</span>
                        <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                          {post.user.level}
                        </span>
                      </div>
                      <p className="text-sm text-white/60">{post.timestamp}</p>
                    </div>
                  </div>

                  {/* 成就标识 */}
                  {post.achievement && (
                    <div className="glass-card p-3 rounded-lg mb-4 border-gradient-animated card">
                      <div className="p-0 card-content">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-yellow-400 font-medium">🎉 {post.achievement}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 内容 */}
                  <p className="text-white/90 mb-4 leading-relaxed">{post.content}</p>

                  {/* 媒体内容 */}
                  {post.media && (
                    <div className="text-4xl mb-4 text-center py-4">
                      {post.media}
                    </div>
                  )}

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* 互动按钮 */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-6">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 transition-colors ${
                          likedPosts.has(post.id) ? 'text-red-400' : 'text-white/60 hover:text-red-400'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm">{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-white/60 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-white/60 hover:text-green-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 侧边栏 */}
          <div className="space-y-6">
            {/* 个人统计 */}
            <div className="glass-card-enhanced border-0 card">
              <div className="pb-4 card-header">
                <h3 className="text-white text-lg card-title">我的社区统计</h3>
              </div>
              <div className="pt-0 space-y-4 card-content">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">156</div>
                    <div className="text-sm text-white/70">获得点赞</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">23</div>
                    <div className="text-sm text-white/70">发布动态</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">89</div>
                    <div className="text-sm text-white/70">互动评论</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">12</div>
                    <div className="text-sm text-white/70">学习伙伴</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 热门话题 */}
            <div className="glass-card-enhanced border-0 card">
              <div className="pb-4 card-header">
                <h3 className="text-white text-lg card-title">热门话题</h3>
              </div>
              <div className="pt-0 space-y-3 card-content">
                {[
                  { tag: '沟通技巧', count: 234 },
                  { tag: '领导力', count: 189 },
                  { tag: '情绪管理', count: 156 },
                  { tag: '团队协作', count: 143 },
                  { tag: '职场成长', count: 128 }
                ].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg hover-lift micro-interaction cursor-pointer">
                    <span className="text-white font-medium">#{topic.tag}</span>
                    <span className="text-sm text-white/60">{topic.count}讨论</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'leaderboard' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 排行榜 */}
          <div className="lg:col-span-2">
            <div className="glass-card-enhanced border-0 card">
              <div className="pb-4 card-header">
                <h3 className="flex items-center space-x-3 text-white card-title">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <span>本周排行榜</span>
                </h3>
              </div>
              <div className="pt-0 space-y-4 card-content">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`glass-card p-4 rounded-xl hover-lift micro-interaction card ${
                    user.rank <= 3 ? 'border-gradient-animated' : ''
                  }`}>
                    <div className="p-0 card-content">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getRankColor(user.rank)} rounded-full flex items-center justify-center font-bold text-white`}>
                          {user.rank <= 3 ? getRankIcon(user.rank) : user.rank}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-white">{user.user}</h4>
                            <span className="text-lg">{user.badge}</span>
                          </div>
                          <p className="text-sm text-white/70">{user.level}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-white">{user.score}</div>
                          <div className="text-sm text-green-400">{user.weeklyGrowth}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 我的排名 */}
          <div className="space-y-6">
            <div className="glass-card-enhanced border-0 card">
              <div className="pb-4 card-header">
                <h3 className="text-white text-lg card-title">我的排名</h3>
              </div>
              <div className="pt-0 card-content">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto text-4xl font-bold text-white shadow-lg pulse-glow">
                    4
                  </div>
                  <div className="text-2xl font-bold text-white">陈思思</div>
                  <div className="text-sm text-white/70">问题解决者</div>
                  <div className="text-2xl font-bold text-white">1847</div>
                  <div className="text-sm text-white/70">总积分</div>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="text-xl font-bold text-white">A+</div>
                      <div className="text-sm text-white/70">最高等级</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">88.5</div>
                      <div className="text-sm text-white/70">平均得分</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="glass-card-enhanced border-0 hover-lift card">
                <div className="pb-4 card-header">
                  <h3 className="text-white text-lg flex items-center space-x-2 card-title">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span>{event.title}</span>
                  </h3>
                </div>
                <div className="pt-0 space-y-3 card-content">
                  <p className="text-white/70 text-sm line-clamp-2">{event.description}</p>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{event.date} {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-white/60">
                      <Users className="w-4 h-4" />
                      <span>{event.participants}/{event.maxParticipants}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      event.difficulty === '高级' ? 'bg-red-500/20 text-red-300' :
                      event.difficulty === '中级' ? 'bg-yellow-500/20 text-yellow-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {event.difficulty}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-white/60 mb-3">主办方: {event.host}</p>
                    <Button className="premium-button w-full">
                      <UserPlus className="w-4 h-4 mr-2" />
                      报名参加
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {studyGroups.map((group) => (
              <div key={group.id} className="glass-card-enhanced border-0 hover-lift card">
                <div className="pb-4 card-header">
                  <h3 className="text-white text-lg flex items-center space-x-2 card-title">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-xl">
                      {group.avatar}
                    </div>
                    <span>{group.name}</span>
                  </h3>
                </div>
                <div className="pt-0 space-y-3 card-content">
                  <p className="text-white/70 text-sm line-clamp-2">{group.description}</p>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{group.members}/{group.maxMembers} 成员</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/60 text-sm">
                    <Activity className="w-4 h-4" />
                    <span>活跃度: {group.activity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {group.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/20">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-xs text-white/60 mb-3">最近活动: {group.recentActivity}</p>
                    <Button className="premium-button w-full">
                      <UserPlus className="w-4 h-4 mr-2" />
                      加入小组
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;

