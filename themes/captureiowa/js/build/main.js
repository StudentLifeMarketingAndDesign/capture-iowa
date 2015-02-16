$(document).ready(function() {	

    // Hide the directory navigation
    $('.division-directory').hide();


    // Show/Hide the directory navigation on-click
    $('.directory-toggle').click(function() {
        $(this).toggleClass("active");
        $('.division-directory').slideToggle();
        return false;
    });


    // For small screens - show/hide the search on-click
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();
        return false;
    });    


    // For small screens - show the directory
    $('.division-menu').on('click', '.has-subnav a', function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');

    });

});

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
