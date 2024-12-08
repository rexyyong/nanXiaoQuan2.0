Page({
  data: {
    categories: ["学校通知", "学业", "生活", "校友圈"],
    posts: ["热门帖子内容1", "热门帖子内容2", "热门帖子内容3"],
    navItems: ["服务", "发布", "消息", "我的"],
  },
  navigateCategory(e) {
    const category = e.currentTarget.dataset.item;
    console.log(`Navigating to ${category}`);
    // Add navigation logic
  },
  switchNav(e) {
    const navItem = e.currentTarget.dataset.item;
    console.log(`Switched to ${navItem}`);
    // Add switch logic
  },
});
