Page({
  data: {
    title: "",
    items: [],
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

    this.setData({
      title: category,
      items: dataMap[category] || [],
    });
  },
});
