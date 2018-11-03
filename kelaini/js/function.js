var h = window.innerHeight;
$('body').css('height', h);
$('#app').css('height', h);
$('#dgyz').css('height', h);
var app = new Vue({
    el: "#app",
    data: {
        text: '全国征集1000名免费试用',
        partnership: '合伙人中心',
        Discount: '我的优惠券',
        invitation: '邀请码：129624',
        money: '￥100',
        men: '8',
        purchase: '5人成功购买',
        show: 'true',
        status: 0,
        step:0,
        formData: {
            phone: ''
        },
        write:'',
        formData1:{
            num1:'',
            num2:'',
            num3:'',
            num4:''
        }
    },
    methods:{
        // 发送验证码按钮
        submit:function () {
            var formData = this.formData;
            if(formData.phone == ''){
                alert('请输入正确手机号码');
            }else{
                // 提交
                this.step = 1;
            }
        },
        // 验证码页面按钮操作
        navTo:function () {
            var num = this.write;
            if(num.length == 4){
                // 验证操作


            }else{
                alert('请输入正确的4位验证码！')
            }
        },

        writeIn:function () {
            $('#shuru').focus();
        },
    },
    watch:{
        write:function (val) {
            var num = val;
            this.formData1.num1 = num.slice(0,1);
            this.formData1.num2 = num.slice(1,2);
            this.formData1.num3 = num.slice(2,3);
            this.formData1.num4 = num.slice(3,4);
            if(val.length == 3){
                this.formData1.num4 = '';
            }
            if(val.length == 2){
                this.formData1.num3 = '';
            }
            if(val.length == 1){
                this.formData1.num2 = '';
            }
            if(val.length == 0){
                this.formData1.num1 = '';
            }
            if(val.length>4){
                this.write = val.slice(0,4);
            }
            // console.log(this.formData1);
            return num
        }
    },
    mounted:function () {
        setTimeout(function () {
            $('#dgyz').show();
        },500);

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
        })

    }
})
