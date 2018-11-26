// pages/my_collection/my_collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Invalid: '已失效收藏',
    edit_s: '编辑',
    item: "#c9ab79",
    shut: false,
    shur: true,
    suspension: false,
    mask_show: false,
    pic: 'http://i2.bvimg.com/650276/cd7b51ad742827e6.png',
    recommend: '推荐商品',
    more_arr: [{
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,901',
      'checked': false,
      isbn: '9787535482051',
      id: 1,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,902',
      'checked': false,
      isbn: '9787535482052',
      id: 2,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,903',
      'checked': false,
      isbn: '9787535482053',
      id: 4,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482054',
      id: 5,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482055',
      id: 6,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482056',
      id: 7,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482057',
      id: 8,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482058',
      id: 9,
    }],
    show: false,
  },
  // 编辑显示
  edit: function () {
    var that = this;
    if (this.data.suspension == false) {
      that.setData({
        edit_s: '完成',
        shur: false,
        shut: true,
        suspension: true,
      })
    } else {
      that.setData({
        edit_s: '编辑',
        shur: true,
        shut: false,
        suspension: false,
      })
    }
  },


  // 选择删除
  radio_s: function (e) {
    var that = this;
    var checkboxItems = this.data.more_arr;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {

        if (checkboxItems[i].isbn == values[j]) {
          checkboxItems[i].checked = true;

          break;
        }
      }
    }
    that.setData({
      more_arr: checkboxItems
    });
  },
  // 删除
  delete_s: function () {
    var that =this;
    var checkboxItems = this.data.more_arr;
    for (var i = 0; i < checkboxItems.length;++i){
      if (checkboxItems[i].checked == true){
        that.setData({
          mask_show: true,
        });

          }
    }
  },
  // 取消收藏-弹窗

  close1: function (e) {
    var that = this;
    var checkboxItems = this.data.more_arr;
    console.log(checkboxItems)
    var arr = [];
    for (var i = 0; i < checkboxItems.length; ++i) {
      if (checkboxItems[i].checked == false) {
        arr.push(checkboxItems[i])
      }
    }

    that.setData({
      more_arr: arr,
      mask_show:false
    })
  },
  // 收藏取消
  cancel1: function () {

    this.setData({
      mask_show: false,
    })
  }
})


