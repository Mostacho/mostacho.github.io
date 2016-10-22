$(function(){
    var windowH = $(window).height();
    var minHeight = $('.home').height();
    if(windowH > minHeight) {                            
        $('.home').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        if(windowH > minHeight) {                            
            $('.home').css({'height':($(window).height())+'px'});
        }
    })          
});