$(function(){
    //    tab
    $('.tabs-item').click(function(){
        var index=$(this).index();
        $(this).addClass('tabs-item-current').siblings().removeClass('tabs-item-current');
        $('.tab-item').eq(index).show().siblings().hide();
    });



    var loader = new resLoader({
        resources : [
            'images/afafd_03.png',
            'images/bg_02.png',
            'images/btn.png',
            'images/code.png',
            'images/fx.png',
            'images/logo_03.png',
            'images/pic_03.png',
            'images/pic_04.png',
            'images/pic_07.png',
            'images/porsss.png',
            'images/ritual1.png',
            'images/ritual2.png',
            'images/th.png',
        ],
        onStart : function(total){
            console.log('start:'+total);
        },
        onProgress : function(current, total){
            console.log(current+'/'+total);
            var percent = current/total*100;

            $('.progressbar').css('width', percent+'%');
            $('.progresstext .current').text(parseInt(percent));
            $('.progresstext .total').text(total);
        },
        onComplete : function(total){
            $('#load').fadeOut(1000);
            $('#home').fadeIn(2500);
        }
    });

    loader.start();


});
