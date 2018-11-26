// pages/eceiving_address/eceiving_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    'checked': true,
    'isbn': '9787535482051',
    item: "#c9ab79",
    adds:'设置为默认地址',
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  // 选中反选
  click_s:function(){
    var that = this
    if (this.data.checked==false){
      that.setData({
        checked:true
      })
    }else{
      that.setData({
        checked: false
      })
    }
  },

 
})