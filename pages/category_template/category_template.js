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
        { id: 1, title: "通知1", description: "这是学校通知1" },
        { id: 2, title: "通知2", description: "这是学校通知2" },
      ],
      学业: [
        { id: 1, title: "学业1", description: "这是学业内容1" },
        { id: 2, title: "学业2", description: "这是学业内容2" },
      ],
      生活: [
        { id: 1, title: "生活1", description: "这是生活内容1" },
        { id: 2, title: "生活2", description: "这是生活内容2" },
      ],
      校友圈: [
        { id: 1, title: "校友圈1", description: "这是校友圈内容1" },
        { id: 2, title: "校友圈2", description: "这是校友圈内容2" },
      ],
    };

    // Load data for the category
    const items = wx.getStorageSync(category) || dataMap[category] || [];
    this.setData({
      title: category,
      items: items,
    });
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

    // Update the items and store locally
    const updatedItems = [...items, newPost];
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
