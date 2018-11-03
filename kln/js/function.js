
var app= new Vue({
        el:"#app",
        data:{
            text:'全国征集1000名免费试用',
            partnership:'合伙人中心',
            Discount:'我的优惠券',
            invitation:'邀请码：129624',
            money:'￥100',
            men:'8',
            purchase:'5人成功购买',
            contents:'确定使用该优惠券？',
            staus:0,
        },
    mounted:function () {

        $('.poster-ca').hide();
        var demoHtml=document.body;
        var canvas=document.createElement('canvas');
        var scale=10;  //放大的倍数
        var frame_width=$('body').width();
        var frame_height=$('body').height();

        canvas.width=frame_width*scale+10;
        canvas.height=frame_height*scale+10;
        canvas.getContext("2d").scale(scale,scale);
        var opts={
            tainttest:true,
            scale:scale,
            useCORS:true,
            canvas:canvas,
            logging:true,
            width:frame_width+10,
            height:frame_height+10
        };

        html2canvas(demoHtml,opts).then(function(canvas){
            dataURL =canvas.toDataURL("image/png");
            $('#posterImg').attr('src',dataURL);
            $('.poster-ca').show();
            $('.loading').hide();
        })


    }


    })
