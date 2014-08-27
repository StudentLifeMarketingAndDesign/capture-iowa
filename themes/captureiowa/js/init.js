
jQuery(document).ready(function($){

  /*  var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
    var target =  $(window);
    if (agentID)
    {
        target = $(body);
    }*/




    $(window).on('scroll', function(event) {
        if(($(window).scrollTop() > 10)){
             $('.division-directory').slideUp();
        }

        if(($(window).scrollTop() > 160)){
             $('.logo').addClass('scrolled');
        }

        if(($(window).scrollTop() < 160)){
             $('.logo').removeClass('scrolled');
        }

        });
});
