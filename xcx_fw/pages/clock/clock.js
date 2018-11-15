var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "高德地图key"//申请的高德地图key
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    clock:'打卡成功',
    clock_kown:'我知道了',
    range_clock:'位置范围外打卡',
    time_clock:'打卡时间：21:53',
    Range:'你已进入打卡范围',
    time:'08:00',
    state:'上班打卡',
    tx:'快戳我打卡啊！',
    positions:'定位中',
    please:'请在18:00之后打卡',
    weather: [],
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    this.loadInfo();
  },


  //获取当前位置的经纬度
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res);
        that.loadCity(latitude, longitude);
      }
    })
  },

  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        console.log(data);
      },
      fail: function (info) { }
    });

    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        })
        console.log(data);
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  // 打卡成功
  opens_op:function(){
    this.setData({
      show2:true
    })
  },
  close:function(){
    this.setData({
      show2: false
    })
  }
})