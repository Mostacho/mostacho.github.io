$(function(){
    var windowH = $(window).height();
    var minHeight = $('.home').height();
    if(windowH > minHeight) {                            
        $('.home').css({'height':($(window).height())+'px'});
    }                      

    // Update the iframe width
    $('.vimeo-videos iframe').each(function() {
        var newHeight = $(this).width() * 0.5434782609 + 2;
        $(this).css({'height': newHeight});
    });

    $(window).resize(function(){
        var windowH = $(window).height();
        if(windowH > minHeight) {                            
            $('.home').css({'height':($(window).height())+'px'});
        }

        // Update the iframe width
        $('.vimeo-videos iframe').each(function() {
            var newHeight = $(this).width() * 0.55;
            $(this).css({'height': newHeight});
        });

    })          
});

$(document).ready(function(){
  $("nav a").on('click',function(){
    var link = $(this).attr('href');
    $('html,body').animate({scrollTop: ($(link).offset().top - 74)},'slow');
    return false;
  });
});