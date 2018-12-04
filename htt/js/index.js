$(function () {
    setInterval(function () {
        if($('.draw').hasClass('draw-bg2')){
            $('.draw').removeClass('draw-bg2');
        }else{
            $('.draw').addClass('draw-bg2');
        }
    },500)
    $('body').on('click','.tab-header-item',function () {
        var index = $(this).index();
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        $('.tab-item').eq(index).show().siblings().hide();
    });
    $('body').on('click','#opern_s',function () {
        console.log(1111);
        $('#layui-m-layer0').hide();
         $('.htt-wrap-box').removeClass('htt-wrap-box-s')
    });
//防止键盘把当前输入框给挡住
    $('body').on('click','.input-class',function () {
        var target = this;
        setTimeout(function(){
            target.scrollIntoViewIfNeeded;
        },100);
    });
    $('body').on('click','.input-class-x',function () {
        document.activeElement.blur();
    });
    function tions(){
        var html ='';
           html+='    <div class="adds-mask" >\n' +
               '        <div class="adds-mask-box">\n' +
               '            <div class="adds-title">{{add_title}}</div>\n' +
               '            <div class="adds-name">{{add_name}}</div>\n' +
               '            <div class="adds-btn">返回首页</div>\n' +
               '        </div>\n' +
               '    </div>';

           $('body').append(html);
    }

})