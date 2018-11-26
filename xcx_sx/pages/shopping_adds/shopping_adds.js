// pages/shopping_adds/shopping_adds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic:'http://i1.bvimg.com/650276/cd7b51ad742827e6.png',
    beib:'Runaway小牛皮手提包',
    picer:'¥600',
    items: [
      { name: 'USA', value: '棕色', colors:'#c9ab79' },
      { name: 'CHN', value: '黑色', colors: '#000',checked: 'true' },
      { name: 'BRA', value: '紫色', colors: '#a52fdc'},
      { name: 'JPN', value: '红色', colors:'red' },
    ],
    arrty:[{
       size_name:'S',
       bg_colors: '',
       id:'1'
    }, {
        size_name:'M',
        bg_colors:'bg_colors',
        id: '2'
    }, {
        size_name:'L',
        bg_colors:'',
        id: '3'
    }, {
        size_name:'XL',
        bg_colors: '',
        id: '4'
    }],
    attributes:[{
      name:'加购钱包',
      bg_colors: '',
      id:"1"
    }, {
      name: '加购包链',
      bg_colors: 'bg_colors',
      id:"2"
    }],
    nums:'1'
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  // 选择颜色
  select_size:function(e){

    var colorsarr = this.data.arrty;
    var values = e.target.id;
    for (var i = 0; i < colorsarr.length;++i){
      for (var j = 0; j < values.length;++j){
        if (colorsarr[i].id == values[j]){
          colorsarr[i].bg_colors = 'bg_colors'
          }else{
          colorsarr[i].bg_colors = ' '
          }
      }
  
    }
    this.setData({
      arrty: colorsarr
    })
  },
  //选择架构
  select_attribute: function (e) {
    var colorsarr = this.data.attributes;
    var values = e.target.id;
    for (var i = 0; i < colorsarr.length; ++i) {
      for (var j = 0; j < values.length; ++j) {
        if (colorsarr[i].id == values[j]) {
          colorsarr[i].bg_colors = 'bg_colors'
        } else {
          colorsarr[i].bg_colors = ' '
        }
      }

    }
    this.setData({
      attributes: colorsarr
    })
  },
  // 加
  jia:function(){
    var num = this.data.nums;
    num++;
     this.setData({
       nums: num
     })
  },
    // 减
  jian:function(){
    var num = this.data.nums;
    num--;
    if (num<1){
       num=1;
    }
    this.setData({
      nums: num
    })
  }

})