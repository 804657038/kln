

Page({
  data: {
    imgArr: [],
    chooseViewShow: true,
    array: ['事假', '病假', '年假', '调休假', '婚假'],
    objectArray: [
      {
        id: 0,
        name: '事假'
      },
      {
        id: 1,
        name: '病假'
      },
      {
        id: 2,
        name: '年假'
      },
      {
        id: 3,
        name: '调休假'
      },
       {
        id: 4,
        name: '婚假'
      }
    ],
    show:false,
    startYear: 2000,
    endYear: 2050,
    days:"0",
    pic_ns:"http://i2.bvimg.com/650276/974d1dc7b66f557f.png",
    date1:'',
    disabled:true
  },
  // 选择类型
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },


  // 开始时间
  bindDateChange1: function (e) {
    var start_date = new Date(e.detail.value);
    var end_date = new Date(this.data.date2);
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if (day < 0) {
      day = 0;
      wx.showToast({
        title: '结束时间不能小于开始时间',
        icon: "none",
        duration:2000
      })
    }
    this.setData({
      date1: e.detail.value,
      days: day
    })
  },
  // 结束时间
  bindDateChange2: function (e) {
    var start_date = new Date(this.data.date1);
    var end_date = new Date(e.detail.value);
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    if(day<0){
       day=0;
       wx.showToast({
         title: '结束时间不能小于开始时间',
         icon:"none",
         duration: 2000
       })
    }
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value,
      days: day
    })
  },
  //开始时间未选择，则结束时间不能选
  Set_out:function(){

     if(this.data.date1 == ""){
         wx.showToast({
           title: '请选择开始时间',
           icon:'none',
           duration: 1000
         })
     }
  },
  //开始时间选择，则结束时间能选
  Ope_out: function () {
    console.log(1)
     this.setData({
       disabled:false,
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
  sc:function(){
    var that = this;
    that.setData({
      show:true
    })
  }
 
})