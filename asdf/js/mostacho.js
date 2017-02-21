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

$(document).ready(function(){
  $("nav a").on('click',function(){
    var link = $(this).attr('href');
    $('html,body').animate({scrollTop: ($(link).offset().top - 74)},'slow');
    return false;
  });
});