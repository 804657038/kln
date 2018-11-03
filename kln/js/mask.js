$(function(){

//   通用弹窗
     function  currency(){
         var html ='';
             html+='    <div class="mask-none">\n' +
                 '    <div class="mask-wrap">\n' +
                 '        <div class="mask">\n' +
                 '            <div class="mask-xx-x"></div>\n' +
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
         $('.mask-xx-x').click(function () {
             $(this).parent().parent().parent().hide();
         })
     }
//    活动说明弹窗
    function activity() {
        var html ='';
           html+='    <!--活动说明弹窗-->\n' +
               '    <div class="mask-hd-none" >\n' +
               '         <div class="mask-hd-wrap">\n' +
               '             <div class="mask-hd">\n' +
               '                 <div class="mask-xx" @click="Closes(Close)"></div>\n' +
               '                 <div class="mask-xxs">\n' +
               '                     <img src="images/rw.png" class="mask-xxsimg" alt="">\n' +
               '                 </div>\n' +
               '                 <div class="mask-gz">\n' +
               '                     <img src="images/hdgz_03.png" class="mask-gz-img" alt="">\n' +
               '                 </div>\n' +
               '                 <ol class="ol-custom">\n' +
               '                     <li class="li-custom">成功安装科徕尼智能锁的用户,可以通过扫描专卖店导购员的二维码成为科徕尼合伙人。</li>\n' +
               '                     <li class="li-custom">成功注册成为合伙人,用户获得一个专属二维码</li>\n' +
               '                     <li class="li-custom">合伙人将二维码分享给其他人,其他人扫描后可以获得 100 元的智能锁优惠券并成为合伙人的专属客户。</li>\n' +
               '                     <li class="li-custom">专属客户成功购买智能锁后,合伙人可以获得一定奖励,奖励由合伙人原购买智能锁的门店提供</li>\n' +
               '                     <li class="li-custom">详情请咨询当地好太太专卖店或科徕尼专卖店。</li>\n' +
               '                     <li class="li-custom">活动范围:上海、苏州、南京、合肥、临沂、青岛、潍坊、银川、西安、兰州、深圳、宜昌、成都。</li>\n' +
               '                 </ol>\n' +
               '                 <div class="btn-hd-wrap">\n' +
               '                 <div class="btn btns">好的</div>\n' +
               '                 </div>\n' +
               '             </div>\n' +
               '         </div>\n' +
               '    </div>'
        $('body').append(html)
        $('.mask-xx').click(function () {
            $(this).parent().parent().parent().hide();
        })
    }
    currency();
    activity();
})