// pages/acknowledgement_order/acknowledgement_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrwrap:[{
      header_left:'编号：11134571546641479',
      header_right: '订单失败',
      money:'¥1606.00',
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
      },],
    }, {
      header_left: '编号：11134571546641479',
      header_right: '订单失败',
      money: '¥1606.00',
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
      },],
    }],
    navrty:[{
      name:'待付款',
    }, {
        name: '待收货',
    }, {
        name: '待评价',
    }, {
        name: '售后',
    }, {
        name: '全部订单',
        cloors:'cloors'
    }, ]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      close_icon: 'close'
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