import React, { useState } from 'react';
import { Users, MessageSquare, Heart, Send, User, Zap, TrendingUp } from 'lucide-react';

const Community = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());

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
  const posts = [
    {
      id: 1,
      user: '李明 (高级沟通专家)',
      avatar: 'https://i.pravatar.cc/150?img=1',
      time: '2小时前',
      content: '在“高压谈判模拟”中，我发现保持沉默比急于回应更有效。大家有什么高压场景下的谈判技巧分享吗？ #沟通技巧 #谈判策略',
      likes: 125,
      comments: 38,
    },
    {
      id: 2,
      user: '王芳 (项目经理)',
      avatar: 'https://i.pravatar.cc/150?img=2',
      time: '5小时前',
      content: '成功完成了“卓越领导力培养计划”！最大的收获是学会了如何进行有效的授权和激励。推荐大家都来试试！ #领导力 #团队管理',
      likes: 210,
      comments: 55,
    },
    {
      id: 3,
      user: '张强 (初级分析师)',
      avatar: 'https://i.pravatar.cc/150?img=3',
      time: '1天前',
      content: '最近在学习情商管理，感觉情绪稳定度有明显提升。有没有关于处理职场“情绪勒索”的场景推荐？ #情商管理 #职场成长',
      likes: 95,
      comments: 21,
    },
    {
      id: 4,
      user: '赵丽 (HRBP)',
      avatar: 'https://i.pravatar.cc/150?img=4',
      time: '2天前',
      content: '求助！如何提高团队在远程协作中的效率？有没有推荐的“跨部门冲突解决”训练场景？ #团队协作 #远程办公',
      likes: 150,
      comments: 42,
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="bg-[var(--secondary-dark)] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">学习社区</h2>
            <p className="text-white/90 text-lg">分享经验，互相学习，共同成长</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* 社区概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">社区成员</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">5.8K</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">今日新帖</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">112</p>
            </div>
          </div>
        </div>
        <div className="card p-6 bg-white">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">活跃度</p>
              <p className="text-2xl font-bold text-[var(--primary-dark)]">95%</p>
            </div>
          </div>
        </div>
      </div>

      {/* 帖子区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 主要帖子流 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 发布新帖子 */}
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4">发布新动态</h3>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows="3"
              placeholder="分享你的学习心得、提出你的疑问..."
            ></textarea>
            <div className="flex justify-end mt-3">
              <button className="py-2 px-4 bg-[var(--secondary-dark)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>发布</span>
              </button>
            </div>
          </div>

          {/* 帖子列表 */}
          {posts.map((post) => (
            <div key={post.id} className="card p-6 bg-white">
              <div className="flex items-center space-x-3 mb-4">
                <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-[var(--primary-dark)]">{post.user}</p>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center space-x-6 border-t border-gray-200 pt-4">
                <button 
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center space-x-1 transition-colors ${
                    likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                  <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)} 赞</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span>{post.comments} 评论</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                  <Send className="w-5 h-5" />
                  <span>分享</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 侧边栏 - 热门话题 */}
        <div className="space-y-6">
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4">热门话题</h3>
            <div className="space-y-3">
              {[
                { tag: '沟通技巧', count: 512 },
                { tag: '领导力', count: 450 },
                { tag: '情商管理', count: 380 },
                { tag: '团队协作', count: 320 },
                { tag: '创新思维', count: 280 },
                { tag: '职场成长', count: 250 }
              ].map((topic, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-[var(--primary-dark)] font-medium">#{topic.tag}</span>
                  <span className="text-sm text-gray-500">{topic.count} 讨论</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="text-xl font-semibold text-[var(--primary-dark)] mb-4">学习小组推荐</h3>
            <div className="space-y-3">
              {[
                { name: '互联网沟通精英团', members: 28 },
                { name: '领导力成长营', members: 35 },
                { name: '情商修炼社', members: 42 }
              ].map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-[var(--primary-dark)] font-medium">{group.name}</span>
                  <span className="text-sm text-gray-500">{group.members} 成员</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
