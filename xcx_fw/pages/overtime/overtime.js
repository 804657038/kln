var dateTimePicker = require('../../utils/dateTimePicker.js');

Page({
  data: {
    imgArr: [],
    chooseViewShow: true,
    show: false,
    date: '2018-10-01',
    time: '12:00',
    dateTimeArray: null,
    dateTime: null,
    dateTimeArray1: null,
    dateTime1: null,
    startYear: 2000,
    endYear: 2050,
    days: "0",
    pic_ns: "http://i2.bvimg.com/650276/974d1dc7b66f557f.png"

  },

  onLoad() {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    var obj1 = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // // 精确到分的处理，将数组的秒去掉
    // var lastArray = obj1.dateTimeArray.pop();
    // var lastTime = obj1.dateTime.pop();

    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateTimeArray1: obj1.dateTimeArray,
      dateTime1: obj1.dateTime
    });
  },
  changeDate(e) {
    this.setData({ date: e.detail.value });
  },
  changeTime(e) {
    this.setData({ time: e.detail.value });
  },
  changeDateTime(e) {

    this.setData({ dateTime: e.detail.value });

  },
  changeDateTime1(e) {
    this.setData({ dateTime1: e.detail.value });
  },
  changeDateTimeColumn(e) {
    var arr = this.data.dateTime, dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  changeDateTimeColumn1(e) {
    var arr = this.data.dateTime1, dateArr = this.data.dateTimeArray1;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray1: dateArr,
      dateTime1: arr
    });
  },
  /** 选择图片 */
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9 - that.data.imgArr.length,//最多选择4张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths);
        if (res.tempFilePaths.count == 0) {
          return;
        }
        //上传图片
        var imgArrNow = that.data.imgArr;
        imgArrNow = imgArrNow.concat(res.tempFilePaths);
        that.setData({
          imgArr: imgArrNow
        })
        that.chooseViewShow();
      }
    })
  },

  /** 删除图片 */
  deleteImv: function (e) {
    var imgArr = this.data.imgArr;
    var itemIndex = e.currentTarget.dataset.id;
    imgArr.splice(itemIndex, 1);
    this.setData({
      imgArr: imgArr
    })
    //判断是否隐藏选择图片
    this.chooseViewShow();
  },


  /** 是否隐藏图片选择 */
  chooseViewShow: function () {
    if (this.data.imgArr.length >= 9) {
      this.setData({
        chooseViewShow: false
      })
    } else {
      this.setData({
        chooseViewShow: true
      })
    }
  },

  /** 显示图片 */
  showImage: function (e) {
    var imgArr = this.data.imgArr;
    var itemIndex = e.currentTarget.dataset.id;

    wx.previewImage({
      current: imgArr[itemIndex], // 当前显示图片的http链接
      urls: imgArr // 需要预览的图片http链接列表
    })
  },

  sc: function () {
    var that = this;
    that.setData({
      show: true
    })

  }

})