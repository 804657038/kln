// pages/eceiving_address/eceiving_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['请选择服务类型', '美国', '中国', '巴西', '日本'],
    array1: ['请选择售后理由', '美国', '中国', '巴西', '日本'],
    index: "0",
    index1: "0",
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },


})