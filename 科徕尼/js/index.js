$(function () {
    $('.Open-user').click(function () {
        if($('.xia').hasClass('shang')){
            $('.user-wrap-big').css('height',"300");
            $('.xia').removeClass('shang')
            $('.xia').html('↓')
        }else{
            $('.user-wrap-big').css('height',"auto");
            $('.xia').addClass('shang')
            $('.xia').html('↑')
        }

    })
})