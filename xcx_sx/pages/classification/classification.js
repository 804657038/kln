const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "女包",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '洁面皂',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          },
          {
            child_id: 2,
            name: '卸妆',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "男包",
        ishaveChild: true,
        children:
        [
          
          {
            child_id: 1,
            name: '气垫bb',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          },
          {
            child_id: 2,
            name: '修容/高光',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          },
          {
            child_id: 3,
            name: '遮瑕',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "香水/香氛",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '淡香水EDT',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          }, {
            child_id: 2,
            name: '淡香水EDT',
            image: "http://i1.bvimg.com/650276/94ca9be94d175798.png"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
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
