//app.js
App({

  globalData: {
    navItems: ["服务", "发布", "消息", "我的"],
    currentTab: 0, // Default tab index
    userInfo:null
  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  // Global navigation function
  switchNav(index) {
    console.log(`Switching to tab: ${this.globalData.navItems[index]}`);

    // Logic for navigating between tabs
    if (index === 3) {
      wx.navigateTo({
        url: "/pages/profile/profile", // Path to the profile page
      });
    } else {
      // Implement navigation for other tabs if needed
      console.log(`Navigating to tab: ${this.globalData.navItems[index]}`);
    }
  },

  // Global navigation function for categories
  navigateCategory(category) {
    console.log(`Navigating to category: ${category}`);
    wx.navigateTo({
      url: `/pages/category_template/category_template?category=${category}`,
    });
  },

})