Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrty:[{
      header:'商城的客服热线是什么？',
      id:1,
      arrcon:[{
        inner_p1:'商城客服热线：020-14578546',
        inner_p2: '在线时间：8点至20点',
      }]
    }, {
      header: '商城的客服热线是什么？',
      id: 2,
      arrcon: [{
        inner_p1: '商城客服热线：020-14578546',
        inner_p2: '在线时间：8点至20点',
      }]
      }, {
        header: '商城的客服热线是什么？',
        id: 3,
        arrcon: [{
          inner_p1: '商城客服热线：020-14578546',
          inner_p2: '在线时间：8点至20点',
        }]
      }],
 

  },

  Open: function (event){
    var tohhleBtn = this.data.uhide;
    var itemId = event.currentTarget.id;
    if (tohhleBtn == itemId){
      this.setData({
        uhide: '',
      })
    }else{
      this.setData({
        uhide: itemId,
      })
    }
  }
  
})