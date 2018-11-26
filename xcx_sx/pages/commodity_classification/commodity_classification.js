//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    /**
        * 页面配置
        */
    winWidth: 0,
    winHeight: 0,
    colors: '',
    colors_s:'',
    // tab切换
    currentTab: 0,
    pic: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
    more_arr: [{
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }]
  },
  onLoad: function () {
    var that = this;

    /**
     * 获取系统信息
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /**
     * 滑动切换tab
     */
  bindChange: function (e) {

    var that = this;
    that.setData({
      currentTab: e.detail.current,
    }); 
    if (this.data.currentTab==3){
      that.setData({
        colors:'colors'
      });
    }else{
      that.setData({
        colors: '',
        colors_s:''
      });
    }

  },
  /**
   * 点击tab切换
   */
  swichNav1:function(){
    var that = this;
    if (this.data.colors == 'colors') {
      that.setData({
        colors: '',
        colors_s: 'colors'
      })
    } else {
      that.setData({
        colors: 'colors',
        colors_s: ''
      })
    }
  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  }
})
