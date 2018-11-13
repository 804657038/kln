// pages/application_leave/application_leave.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    name: '陈瘦瘦',
    approval: '审批中',
    number1: '2058305-395005676',
    number2: '事假',
    number3: '2818-09-07  上午',
    number4: '2818-09-17  上午',
    number5: '10天',
    number6: '家里有事请假',
    number7: '无',
    call: '我',
    call_times: '2818-09-06 10:12',
    situation: '发起申请',
    iconColor: [
      '#00a6a0',
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    src: 'http://i2.bvimg.com/650276/974d1dc7b66f557f.png'
  },
  refuse:function(){
    var that = this
    that.setData({
      show:true,
    })
    },
  cancel: function () {
    var that = this
    that.setData({
      show: false,
    })
  }

 
})