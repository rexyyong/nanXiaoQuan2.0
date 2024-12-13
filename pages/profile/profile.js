Page({
  data: {
    user: {
      name: "张三", // Mocked user's name
      posts: [
        {
          title: "帖子1",
          description: "这是用户帖子1的描述",
          date: "2024-12-13",
          time: "14:00",
        },
        {
          title: "帖子2",
          description: "这是用户帖子2的描述",
          date: "2024-12-12",
          time: "16:30",
        },
        {
          title: "帖子3",
          description: "这是用户帖子3的描述",
          date: "2024-12-11",
          time: "09:45",
        },
      ],
    },
    navItems: getApp().globalData.navItems, // Access global nav items
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
