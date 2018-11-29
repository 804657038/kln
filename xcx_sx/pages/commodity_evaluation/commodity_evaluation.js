// pages/commodity_evaluation/commodity_evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrty:[{
      evaluate:'全部（12600）',
      colors:'clan'
    }, {
        evaluate: '好评（12000）'
    },{
        evaluate:'中评（588）'
    }, {
        evaluate: '差评（12）'
    }],
    users: [{
      user_pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name: '林夕',
      time: '2018-11-22 08:54:12',
      wz: '包包很不错，是我喜欢的款，料很有质感。同时物流超赞！',
      arrty:[{
        pic:'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      },{
          pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }]
    }, {
      user_pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name: '林夕',
      time: '2018-11-22 08:54:12',
      wz: '包包很不错，是我喜欢的款，料很有质感。同时物流超赞！',
      arrty: [{
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }]
    }],

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