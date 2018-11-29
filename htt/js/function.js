var app = new Vue({
    el: '#app',
    data: {
        start:0,
        fx_share:'分享好友 共享红利!',
        zh_img:'images/zj01.png',
        zh_img_cos:'images/cuo_03.png',
        inner:'恭喜获得“小科”1只！',
        innerw:'已放入“我的奖品”，请立即填写领取地址',
        close:true,
        index:[{
            pic:'images/logo.png',
            prize:'我的奖品',
            explain:'我的说明',
            contenys:'images/contenys.png',
            icon:'images/icon.png'
        }],
        draw:[{
            pic:'images/logo.png',
            prize:'我的奖品',
            explain:'我的说明',
            contenys:'images/contenys-bg.png',
            icon:'images/iocns.png'
        }],
    },
    methods:{
        run:function () {
            lottery.init('lottery');
            if(click) { //click控制一次抽奖过程中不能重复点击抽奖按钮，后面的点击不响应
                return false;

            } else {
                lottery.speed = 100;
                roll(); //转圈过程不响应click事件，会将click置为false
                click = true; //一次抽奖完成后，设置click为true，可继续抽奖
                return false;
            }
        }
    }
})