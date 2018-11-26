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
    country:'意大利'
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
  }
})
