var app = getApp()

Page({

  data: {
    items: [],
    startX: 0, //开始坐标
    startY: 0,
    uhide: 0,
    show:true,
    suosuo:false,
  },

  onLoad: function (options) {
    var that = this;


      this.data.items.push({

        content: " sssssssssssss",
        department: '人力资源部',
        departments: '财务部'
   
      },
        {

          content: " sssssssssssss",
          department: '人力资源部',
          departments:'财务部'
        }
      )


    var data = {
      "datas": [
        {
          "id": 1,
          Separate: '企业通讯录',
        }
      ]
    };

    that.setData({

      items: this.data.items,
      carInfoData: data.datas
    })

  },

  //手指触摸动作开始 记录起点X坐标

  touchstart: function (e) {

    //开始触摸时 重置所有删除

    this.data.items.forEach(function (v, i) {

      if (v.isTouchMove && v.Hiddens)//只操作为true的

        v.isTouchMove = false;
      v.Hiddens=false

    })

    this.setData({

      startX: e.changedTouches[0].clientX,

      startY: e.changedTouches[0].clientY,

      items: this.data.items

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

      v.isTouchMove = false;
      v.Hiddens=false;

      //滑动超过30度角 return

      if (Math.abs(angle) > 30) return;

      if (i == index) {

        if (touchMoveX > startX) //右滑

          v.isTouchMove = false,
            v.Hiddens = false

        else
          //左滑

          v.isTouchMove = true,
           v.Hiddens = true
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

    var _X = end.X - start.X, _Y = end.Y - start.Y

    //返回角度 /Math.atan()返回数字的反正切值

    return
    360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
// 搜索
  search:function(){
    this.setData({
      suosuo:true
    })
  },
  returns:function(){
    this.setData({
      suosuo: false
    })
  }
})