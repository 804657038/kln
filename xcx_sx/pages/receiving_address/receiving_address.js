// pages/receiving_address/receiving_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'周星星',
    phone:'12345678912',
    adds:'广东省广州市海珠区新港东路琶洲商业广场11栋1803',
    add_more:'默认地址',
    item: '#c9ab79',
    arrty:[{
      name_s: '周星星',
      phone_s: '12345678912',
      adds_s: '广东省广州市海珠区新港东路琶洲商业广场11栋1803',
      checked:false,
      inse:'1'
    }, {
      name_s: '周星星',
      phone_s: '12345678912',
      adds_s: '广东省广州市海珠区新港东路琶洲商业广场11栋1803',
      checked: false,
      inse:'2'
      }, {
        name_s: '周星星',
        phone_s: '12345678912',
        adds_s: '广东省广州市海珠区新港东路琶洲商业广场11栋1803',
        checked: false,
        inse: '3'
      }]
  },
  // 选中反选
  checkbox_s:function(e){
    var that = this;
    var checkboxItems = this.data.arrty;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {

        if (checkboxItems[i].inse == values[j]) {
          checkboxItems[i].checked = true;

          break;
        }
      }
    }
    that.setData({
      arrty: checkboxItems
    });
  }
})