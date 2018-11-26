// pages/data_editing/data_editing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    portrait:'头像',
    pic:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
    name:'姓名',
    name_input1:'',
    name_input2: '',
    autograph:'签名',
    show1:false,
    show2: false,
    values1:''
  },

  upload:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({
          pic: tempFilePaths
        })
      },
    })
  },
  OPen1:function(){
    var that =this;
    that.setData({
      show1:true
    })
  },
  OPen2:function(){
    var that = this;
    that.setData({
      show2: true
    })
  },
  bindKeyInput1: function (e) {
    this.setData({
      name_input1: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      name_input2: e.detail.value
    })
  },
  cancel1:function(){
    this.setData({
      name_input1: '',
      show1:false
    })
  },
  cancel2: function () {
    this.setData({
      name_input2: '',
      show2: false
    })
  },
  close1:function(){
    this.setData({
      show1: false
    })
  },
  close2: function () {
    this.setData({
      show2: false
    })
  }
})