$(window).scroll(function() {
    if(($(window).scrollTop() > 10) && ($( window ).width() > 768)){
         $('.division-directory').slideUp();
    }

    if(($(window).scrollTop() > 160) && ($( window ).width() > 768)){
         $('.logo').addClass('scrolled');
    }

    if(($(window).scrollTop() < 160) && ($( window ).width() > 768)){
         $('.logo').removeClass('scrolled');
    }    

});
