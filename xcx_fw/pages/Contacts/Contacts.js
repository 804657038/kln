
Page({
  data:{
    suosuo: false,
    tan:false,
    groups:[{
      list: 'A',
      arrty: [{
        pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
        name: "啊",
        adds: '添加',
      }, {
        pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
        name: "啊",
        adds: '添加',
      }]
    }, {
      list: 'B',
      arrty: [{
        pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
        name: "把",
        adds: '添加',
      }, {
        pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
        name: "把",
        adds: '添加',
        }, {
          pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
          name: "把",
          adds: '添加',
        }]
      }, {
        list: 'C',
        arrty: [{
          pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
          name: "陈",
          adds: '添加',
        }, {
          pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
          name: "陈",
          adds: '添加',
        }, {
          pic: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png',
          name: "陈",
          adds: '添加',
        }]
      }]
  },
  // 搜索
  search: function () {
    this.setData({
      suosuo: true
    })
  },
  returns: function () {
    this.setData({
      suosuo: false
    })
  },
  // 弹窗
  adds:function(){
    this.setData({
      tan: true
    })
  },
  close: function () {
    this.setData({
      tan: false
    })
  },
})