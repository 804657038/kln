// pages/home_page/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enterprise:'新鸿基运广场物业管理有限公司',
    distribution:'待分配',
    name:'sdaif',
    phone:'12345678912',
    avatar_s:'http://i2.bvimg.com/650276/974d1dc7b66f557f.png'
  },
  // 切换头像

  choose: function () {
  var that = this;
   wx.chooseImage({
    count: 1, // 最多可以选择的图片张数，默认9
    sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
    sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    success: function (res) {
      var avatar = res.tempFilePaths;
      that.setData({
        avatar_s: avatar
      })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})