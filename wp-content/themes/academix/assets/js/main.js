jQuery(document).ready( function($) {
    'use strict';
    /* Preloader JS */
    $(window).load(function() {
	    $('.preloader-wrap').fadeOut('500', function() {
            $(this).remove();
        });
	});

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //=================== Adminer add class ====================
    $('#wpadminbar').addClass('mobile');
});

jQuery(window).load(function() {
    jQuery('.mobile-menu').meanmenu();
});