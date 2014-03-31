
jQuery(document).ready(function($){
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    var target =  $(window);
    if (agentID)
    {
        target = $(body);
    }

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
});