Page({
  data: {
    categories: ["学校通知", "学业", "生活", "校友圈"],
    posts: [
      { id: 1, title: "热门帖子内容1", description: "这是热门帖子1的描述", date: "2024-12-12", time: "14:00" },
      { id: 2, title: "热门帖子内容2", description: "这是热门帖子2的描述", date: "2024-12-11", time: "10:30" },
      { id: 3, title: "热门帖子内容3", description: "这是热门帖子3的描述", date: "2024-12-10", time: "09:00" },
    ],
    navItems: getApp().globalData.navItems, // Access global nav items
  },

  onLoad() {
    // Sort posts by newest to oldest
    const sortedPosts = this.data.posts.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateB - dateA; // Sort newest to oldest
    });

    this.setData({ posts: sortedPosts });
  },

  // Use global navigateCategory function
  navigateCategory(e) {
    const category = e.currentTarget.dataset.item;
    getApp().navigateCategory(category); // Call the global function
  },

  // Use global switchNav function
  switchNav(e) {
    const index = e.currentTarget.dataset.index;
    getApp().switchNav(index); // Call the global function
  },
});
