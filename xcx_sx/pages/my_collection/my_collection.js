// pages/my_collection/my_collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Invalid:'已失效收藏',
    edit_s:'编辑',
    item: "#c9ab79",
    shut:false,
    shur: true,
    suspension:false,
    pic:'http://i2.bvimg.com/650276/cd7b51ad742827e6.png',
    recommend:'推荐商品',
    masksc_show:false,
    more_arr: [{
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,901',
      'checked': false,
      isbn:'9787535482051',
      mask_show:false,
      id:1,

    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,902',
      'checked': false,
      isbn: '9787535482052',
      mask_show: false,
      id: 2,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,903',
      'checked': false,
      isbn: '9787535482053',
      mask_show: false,
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
      mask_show: false,
      id: 6,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482056',
      mask_show: false,
      id: 7,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482057',
      mask_show: false,
      id: 8,
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900',
      'checked': false,
      isbn: '9787535482058',
      mask_show: false,
      id: 9,
    }],
    show:false,
  },
// 编辑显示
  edit:function(){
    var that =this;
    if (this.data.suspension == false){
     that.setData({
       edit_s: '完成',
       shur: false,
       shut: true,
       suspension: true,
     })
   }else{
      that.setData({
        edit_s: '编辑',
        shur: true,
        shut: false,
        suspension: false,
      })
   }
  },


  // 选择
  radio_s:function(e){
    var that =this;
    var checkboxItems = this.data.more_arr;
    var values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i){
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



  // 删除部分
  delete_s:function(){
    var that =this;
    var checkboxItems = this.data.more_arr;
    for (var i = 0; i < checkboxItems.length; ++i){
      if (checkboxItems[i].checked == true){
        that.setData({
          masksc_show: true,
        });
        }
    }
  },
  close2:function(){
    var that =this;
        var checkboxItems = this.data.more_arr;
        var arr = [];
        for(var i = 0; i<checkboxItems.length; ++i) {
        if (checkboxItems[i].checked == false) {
          arr.push(checkboxItems[i]);
        }
        
      }
        that.setData({
          more_arr: arr,
          masksc_show: false
        })
  },
  cancel2:function(){
    this.setData({
      masksc_show: false
    })
  },





  // 取消收藏-弹窗
  det_sc:function(e){
    var that = this;
    var checkboxItems = this.data.more_arr;
    var values = e.currentTarget.id;
     for (var i = 0; i < checkboxItems.length; ++i) {
       checkboxItems[i].mask_show = false;
       for (var j = 0; j < values.length; ++j) {
         if (checkboxItems[i].id == values[j]) {
               checkboxItems[i].mask_show = true;
           break;
         }
       }
     }
     that.setData({
       more_arr: checkboxItems
  
     })
  },
  close1:function(e){
    var checkboxItems = this.data.more_arr;
    var arr = [];
    for (var i = 0; i < checkboxItems.length; ++i) {
      if (checkboxItems[i].mask_show == false) {
        arr.push(checkboxItems[i]);
      }
    }
    this.setData({
      more_arr: arr,
    })
  },
    // 收藏取消
  cancel1:function(){
    var checkboxItems = this.data.more_arr;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].mask_show = false
   
    }
    this.setData({
      more_arr: checkboxItems,
    })
  }
})