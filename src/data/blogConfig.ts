// 博客配置文件 - 修改这里的内容即可更新博客
export const blogConfig = {
  // 博客基本信息
  site: {
    title: "林氪的博客",
    description: "记录生活，分享思考",
    author: "林氪",
    email: "your.email@example.com",
    github: "https://github.com/xliuweijie",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },

  // 导航菜单 - 关键修改点：增加了 /blog1/ 前缀
  navigation: [
    { name: "首页", path: "/blog1/" },
    { name: "关于", path: "/blog1/about" }
  ],

  // 博客文章列表
  posts: [
    {
      id: "1",
      title: "开始我的博客之旅",
      excerpt: "这是我的第一篇博客文章，记录了我开始写博客的初衷和期望。",
      content: `这是我的第一篇博客文章。

一直以来，我都想拥有一个属于自己的空间，可以记录生活中的点滴，分享学习和工作中的心得体会。

作为一名产品经理，我希望在这里分享：
- 拼多多（PDD）业务模式深度分析
- 价值投资与段永平（大道）哲学
- 权证与期权交易心得
- 互联网产品设计与观察

感谢你的阅读，期待与你交流！`,
      date: "2026-02-24",
      tags: ["随笔", "产品经理"],
      readTime: "2 分钟"
    },
    {
      id: "2",
      title: "关于拼多多的深度思考",
      excerpt: "为什么拼多多能在电商红海中杀出重围？聊聊我对 PDD 业务逻辑的看法。",
      content: `从 2020 年在滴滴做社区团购开始，我就一直在关注电商赛道。

拼多多的核心在于极致的效率和对用户心理的精准把控。从雪球到即刻，我一直尝试拆解它的商业模型...`,
      date: "2026-02-25",
      tags: ["PDD", "商业分析"],
      readTime: "5 分钟"
    }
  ],

  // 关于页面内容
  about: {
    title: "关于林氪",
    content: `你好，我是刘伟杰，网名林氪。

我目前在老虎证券（Tiger Trade）担任产品经理。我深耕互联网行业多年，曾参与滴滴橙心优选等重要项目。

除了产品设计，我还是：
- 📈 价值投资者，深受段永平先生影响
- ✍️ 自媒体创作者，活跃于雪球、即刻和公众号
- 🚗 电车爱好者，Leapmotor T03 车主

这个博客是我记录生活、分享思考的自留地。`
  }
};

export type Post = typeof blogConfig.posts[0];