//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 260,
    colors: "#c9ab79",
    more_arr: [{
      more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }, {
        more_up_img: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }],
    states:'',
    titles:'Runaway小牛皮手提包 大师特别设计限量版',
    logo_brand:'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
    country:'意大利',
    source:'设计源自于意大利，大师特别设计之至尊限量版。',
    money_price:'¥600.00',
    money_full:'满1000减100',
    money_court:'全场8.6折',
    discount:[{
      money:'200元优惠券',
      full:'满1600元可用，全场通用',

    }, {
      money: '200元优惠券',
      full: '满1600元可用，全场通用',

    }],
    discount_show:false,
    down_row:'',
    region: '即时识别，抢手和吸引力：这款包的必备品质被封装在这款配饰中，是Emporio Armani现代风格的象征。这款配饰采用天鹅绒和漆皮制成，正面饰有凸起的同色调EA标志。尺寸：25 x 15 x 8 cm / 7.5 x 3.9 x 0.8 in。',
    advertisement:[{
      name:'全场包邮',
    }, {
      name: '全场包邮',
    }, {
      name: '全场包邮',
    }, {
      name: '全场包邮',
      }],
    comment:'商品评论（12600）',
    classification:[{
      classification_name:'正品'
    }, {
        classification_name: '有质感'
      }, {
        classification_name: '会回购'
      }],
    users:[{
      user_pic:'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name:'林夕',
      time:'2018-11-22 08:54:12',
      wz: '包包很不错，是我喜欢的款，料很有质感。同时物流超赞！',
    }, {
      user_pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
      name: '林夕',
      time: '2018-11-22 08:54:12',
      wz: '包包很不错，是我喜欢的款，料很有质感。同时物流超赞！',
    }],
    answer:[{
      name:'哪个颜色好看？',
      answer:'查看回答'
    }, {
      name: '哪个颜色好看？',
      answer: '查看回答'
    }],
    details_p:[{
      name:'成分 65％粘胶纤维，35％Cupro',
    }, {
        name: '天鹅绒',
      }, {
        name: ' 漆面效果',
    }, {
        name: '  Logo',
      }, {
        name: '双色',
    }, {
        name: '镜框封口',
      }, {
        name: '内部拉链袋',
      }],
    img_arr:[{
      pic:'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
    }, {
      pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }, {
        pic: 'http://i1.bvimg.com/650276/cd7b51ad742827e6.png'
      }],
    details_show:false,
    details_down_row:'',
    goods:[{
      name:'快递3-6个工作日内送达。',
    }, {
        name: '您可能需要支付额外的进口费用、税费、经纪费、手续费，目的地国家或地区的其他职责才能收到您的订单。我们的在线商店为您计算这些费用.',
      }, {
        name: '您可能需要支付额外的进口费用、税费、经纪费、手续费，目的地国家或地区的其他职责才能收到您的订单。我们的在线商店为您计算这些费用.',
    }, {
        name: '您完成订单时支付的总额已包括欠地方当局的所有关税和税款。包裹交付时，您无需再支付任何费用。轻松回报',
      }, {
        name: '您有30天的交货时间，以遵循我们快速简便的退货程序。',
      }],
    goods_show:false,
    goods_down_row:''
  },
  // 点赞

  xin:function(){
    var ys = this.data.states; 
    if (ys == ''){
      ys = 'states'
    }else{
      ys = ''
    }
    this.setData({
      states: ys
    })
  },
  // 优惠劵领取
  discount_open:function(){
    var down = this.data.down_row;
    if (down == ""){
      this.setData({
        down_row: 'roww',
        discount_show: true,
      })
    }else{
      this.setData({
        down_row: '',
        discount_show: false,
      })
    }
  },
  // 细节
  details_open: function () {
    var down = this.data.details_down_row;
    if (down == "") {
      this.setData({
        details_down_row: 'roww',
        details_show: true,
      })
    } else {
      this.setData({
        details_down_row: '',
        details_show: false,
      })
    }
  },
    // 送货退货
  goods_open:function(){
    var down = this.data.goods_down_row;
    if (down == "") {
      this.setData({
        goods_down_row: 'roww',
        goods_show: true,
      })
    } else {
      this.setData({
        goods_down_row: '',
        goods_show: false,
      })
    }
  }
})
