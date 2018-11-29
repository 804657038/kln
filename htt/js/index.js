$(function () {
    setInterval(function () {
       if($('.draw').hasClass('draw-bg2')){
           $('.draw').removeClass('draw-bg2');
       }else{
           $('.draw').addClass('draw-bg2');
       }
    },500)
})