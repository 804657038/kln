// pages/acknowledgement_order/acknowledgement_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inner_name: '周星星',
    colors: '#c9ab79',
    inner_phone: '136-458-145-47',
    inner_adds: '广东省广州市海珠区新港东路琶洲商业广场11栋1803',
    arrty: [{
      pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      ne: 'Falabella欧陆风钱包',
      money: '¥1,600',
      goods_nums: '×2'
    }, {
      pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      ne: 'Falabella欧陆风钱包',
      money: '¥1,600',
      goods_nums: '×2'
    }],
    list_rap: [{
      list_name: '商品总额',
      list_nums: '¥1600.00'
    }, {
      list_name: '商品总额',
      list_nums: '¥1600.00'
    }, {
      list_name: '商品总额',
      list_nums: '¥1600.00'
    }],
    select_type: [{
      pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name_mask: '微信',
      checked: false,
      name: '1'
    }, {
      pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name_mask: '支付宝',
      checked: true,
      name: '2'
    }],
    tianjia: '',
    orders:[{
      orders_l:'订单编号: ',
      orders_r:'13300013300015605'
    }, {
      orders_l: '下单时间: ',
      orders_r: '2018-06-24 10:24:30'
    }],
    array: ['美国', '中国', '巴西', '日本'],
    close_icon:'',
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      close_icon:'close'
    })
  },
  go_fk: function () {

    this.setData({
      tianjia: 'tianjia'
    })
  },
  close_mask: function () {
    this.setData({
      tianjia: ''
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