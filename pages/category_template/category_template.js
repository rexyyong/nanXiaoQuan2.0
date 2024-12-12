Page({
  data: {
    title: "",
    items: [],
    isPostFormVisible: false, // Toggle form visibility
    newPost: {
      id: null,
      title: "",
      description: "",
    },
  },

  onLoad(options) {
    const { category } = options;

    // Load category data based on the passed category name
    const dataMap = {
      学校通知: [
        { id: 1, title: "通知1", description: "这是学校通知1", date: "2024-12-10" },
        { id: 2, title: "通知2", description: "这是学校通知2", date: "2024-12-11" },
      ],
      学业: [
        { id: 1, title: "学业1", description: "这是学业内容1", date: "2024-12-09" },
        { id: 2, title: "学业2", description: "这是学业内容2", date: "2024-12-08" },
      ],
      生活: [
        { id: 1, title: "生活1", description: "这是生活内容1", date: "2024-12-07" },
        { id: 2, title: "生活2", description: "这是生活内容2", date: "2024-12-06" },
      ],
      校友圈: [
        { id: 1, title: "校友圈1", description: "这是校友圈内容1", date: "2024-12-05" },
        { id: 2, title: "校友圈2", description: "这是校友圈内容2", date: "2024-12-04" },
      ],
    };

  const items = wx.getStorageSync(category) || dataMap[category] || [];
  const updatedItems = items.map(item => ({
    ...item,
    date: item.date || new Date().toISOString().slice(0, 10), // Add current date if missing
  }));
  this.setData({ title: category, items: updatedItems });

  },

  // Show the post form
  showPostForm() {
    this.setData({
      isPostFormVisible: true,
    });
  },

  // Hide the post form
  hidePostForm() {
    this.setData({
      isPostFormVisible: false,
      newPost: { id: null, title: "", description: "" },
    });
  },

  // Handle input for the new post
  handlePostInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      newPost: {
        ...this.data.newPost,
        [field]: e.detail.value,
      },
    });
  },

  // Add a new post
  addPost() {
    const { newPost, items, title } = this.data;

    if (!newPost.title || !newPost.description) {
      wx.showToast({
        title: "请填写完整内容",
        icon: "none",
      });
      return;
    }

    // Assign a new ID based on the last item's ID or set it as 1
    newPost.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;

    // Add current system date
    const currentDate = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
    const newItem = {
      ...newPost,
      date: currentDate,
    };

    // Update the items and store locally
    const updatedItems = [...items, newItem];
    this.setData({
      items: updatedItems,
      isPostFormVisible: false,
      newPost: { id: null, title: "", description: "" },
    });

    wx.setStorageSync(title, updatedItems);

    wx.showToast({
      title: "发布成功",
      icon: "success",
    });
  },
});
