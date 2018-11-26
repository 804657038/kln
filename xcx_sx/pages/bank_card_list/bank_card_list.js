var app = getApp()
Page({
  data: {
    items: [{
      pic:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      k_name:'中国工商银行',
      ka_ka:'银行卡号',
      number_s:'0210 1456 4545 1251 ',
      type_s:'储蓄卡',
      mask_show:false,
      id:'1'
    }, {
      pic: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      k_name: '中国工商银行',
      ka_ka: '银行卡号',
      number_s: '0210 1456 4545 1252 ',
      type_s: '储蓄卡',
      mask_show: false,
      id: '2'
      }, {
        pic: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        k_name: '中国工商银行',
        ka_ka: '银行卡号',
        number_s: '0210 1456 4545 1252 ',
        type_s: '储蓄卡',
        mask_show: false,
        id: '3'
    }, {
      pic: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      k_name: '中国工商银行',
      ka_ka: '银行卡号',
      number_s: '0210 1456 4545 1252 ',
      type_s: '储蓄卡',
      mask_show: false,
      id: '5'
    }],
    startX: 0, //开始坐标
    startY: 0
  },
  onLoad: function () {

    this.setData({
      items: this.data.items
    })
  },
  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    // 开始触摸时 重置所有删除
    // this.data.items.forEach(function (v, i) {
    //   if (v.isTouchMove)//只操作为true的
    //     v.isTouchMove = false;
    // })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      // items: this.data.items
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      items: that.data.items
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
  //删除事件
  del: function (e) {
    
   var that =this;
    var arrty = this.data.items;
    var ietrm = e.currentTarget.id;
     for(var i = 0; i<arrty.length; ++i ){
       arrty[i].mask_show=false;
      for(var j = 0; j<ietrm.length;++j){
        console.log(1)
        if (arrty[i].id == ietrm[j]){
          arrty[i].mask_show = true;
          break;
        }
        break;
      }
     }
    that.setData({
      items: arrty,
      mask_show: false
    })
  },
  close:function(e){
    var checkboxItems = this.data.items;
    var arr = [];
    for (var i = 0; i < checkboxItems.length; ++i) {
      if (checkboxItems[i].mask_show == false) {
        arr.push(checkboxItems[i]);
      }
    }
    this.setData({
      items: arr,
    })
  },
  cancel:function(){
    var checkboxItems = this.data.items;
    for (var i = 0; i < checkboxItems.length; ++i){
      if (checkboxItems[i].mask_show == true){
        checkboxItems[i].mask_show = false
         }
    }
    this.setData({
      items: checkboxItems,
    })
  }
})
