//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    pic:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500,
    previousMargin:0,
    nextMargin: 260,
    colors:"#c9ab79",
    special_img:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
    arrty:[{
      pic_bb:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      wz_bb:'皮质包'
    }, {
      pic_bb: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      wz_bb: '皮质包'
      }, {
        pic_bb: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        wz_bb: '皮质包'
    }, {
      pic_bb: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      wz_bb: '皮质包'
    }],
    knapsack:[{
      bb_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      bb_names:'Dinky真皮单肩包',
      bb_price:'¥4,600'
    }, {
      bb_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      bb_names: 'Dinky真皮单肩包',
      bb_price: '¥4,600'
      }, {
        bb_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        bb_names: 'Dinky真皮单肩包',
        bb_price: '¥4,600'
      }],
    more_arr:[{
      more_up_img:'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz:'Sonnie厚底高帮运动鞋',
      more_price:'¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
      }, {
        more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        more_wz: 'Sonnie厚底高帮运动鞋',
        more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
      }, {
        more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        more_wz: 'Sonnie厚底高帮运动鞋',
        more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
      }, {
        more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
        more_wz: 'Sonnie厚底高帮运动鞋',
        more_price: '¥6,900'
    }, {
      more_up_img: 'http://i1.bvimg.com/650276/94ca9be94d175798.png',
      more_wz: 'Sonnie厚底高帮运动鞋',
      more_price: '¥6,900'
    }]
  },

})
