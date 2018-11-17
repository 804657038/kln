
Page({
  data: {

    imgArr: [],
    chooseViewShow: true,
    show: false,
    time: '无',
    days: "0",
    pic_ns: "http://i2.bvimg.com/650276/974d1dc7b66f557f.png"

  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  sc: function () {
    var that = this;
    that.setData({
      show: true
    })

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

})