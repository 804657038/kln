$(function(){
    $('.mask-xx').click(function () {
        $(this).parent().parent().parent().hide();
    });

//   通用弹窗
     function  currency(){
         var html ='';
             html+= '<div class="mask-none" >\n' +
                '    <div class="mask-wrap">\n' +
                '        <div class="mask">\n' +
                '            <div class="mask-xx"></div>\n' +
                '            <div class="btn-wrap">\n' +
                '                <div class="btn">\n' +
                '                    取消\n' +
                '                </div>\n' +
                '                <div class="btn btns">\n' +
                '                    确定使用\n' +
                '                </div>\n' +
                '            </div>\n' +
                '            <div class="mask-content">\n' +
                '                {{contents}}\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    </div>'
         $('body').append(html);
     }
//    活动说明弹窗
    function activity() {
        var html ='';
           html+=' <div class="mask-hd-none" >\n' +
               '         <div class="mask-hd-wrap">\n' +
               '             <div class="mask-hd">\n' +
               '                 <div class="mask-xx"></div>\n' +
               '                 <div class="mask-gz">\n' +
               '                     <img src="images/hdgz_03.png" class="mask-gz-img" alt="">\n' +
               '                 </div>\n' +
               '                 <ol class="ol-custom">\n' +
               '                     <li class="li-custom">用户在线领取，凭券可到实体门店购买指定型号（具体型号由门店而定）可以减免100元；全国限量50000张。</li>\n' +
               '                     <li class="li-custom">每个用户限购一张优惠券。</li>\n' +
               '                     <li class="li-custom">每张优惠券仅限用于购买一台智能产品。</li>\n' +
               '                     <li class="li-custom">使用截止日期：2018年12月31日。</li>\n' +
               '\n' +
               '                 </ol>\n' +
               '                 <div class="btn-hd-wrap">\n' +
               '                 <div class="btn btns">好的</div>\n' +
               '                 </div>\n' +
               '             </div>\n' +
               '         </div>\n' +
               '    </div>'
        $('body').append(html)
    }
    currency();
    activity();
})