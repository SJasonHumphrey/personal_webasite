(function($){
    'use strict';

    $('body').scrollspy({
		target: '.shahin_menu_part',
		offset: 81
	});
	
	
	//nave top js
	var nav_navbar = $('nav.navbar'),
        $window = $(window),
        navOffset = nav_navbar.offset().top;

    nav_navbar.wrap('<div class="nav-wrapper"></div>');
    $('.nav-wrapper').height(nav_navbar.outerHeight());
    $('.shahin_navbar li a').on('click', function(){
        $('.navbar-collapse').removeClass('in');
    });
    /*back to top js*/
	var offset = 230,
        duration = 1000,
        back_to_top = $('.back-to-top');
    
    $window.scroll(function(){
        var scrollPos = $window.scrollTop(),
            navbar_right = $('.navbar-right');

        if( scrollPos >= navOffset ){
            nav_navbar.addClass('navbar-fixed-top');
            navbar_right.css('margin-right', '0');
        } else{
            nav_navbar.removeClass('navbar-fixed-top');
            navbar_right.css('margin-right', '-15px');
        }
        
        if (scrollPos > offset) {
			back_to_top.fadeIn(duration);
		} else {
			back_to_top.fadeOut(duration);
		}
        
    });
    var html_body = $('html, body');
    back_to_top.on('click', function(event) {
		event.preventDefault();
		html_body.animate({scrollTop: 0}, duration);
		return false;
	});


    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });


/*
|--------------------------------------------------------------------------
| isotope
|--------------------------------------------------------------------------
*/		
    // 4 column layout
    var isotopeContainer = $('.isotopeContainer');
    $window.load(function(){
        isotopeContainer.isotope({
            itemSelector: '.isotopeSelector'
        });
        $('.isotopeFilters').on( 'click', 'a', function(e) {
            $('.isotopeFilters').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            var filterValue = $(this).attr('data-filter');
            isotopeContainer.isotope({ filter: filterValue });
            e.preventDefault();
        });
    });
	
	

/*
|--------------------------------------------------------------------------
| Fancybox
|--------------------------------------------------------------------------
*/		

    $(".fancybox-pop").fancybox({
        maxWidth	: 900,
        maxHeight	: 700,
        fitToView	: true,
        width		: '80%',
        height		: '80%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'elastic',
        closeEffect	: 'none'
    });

    var lang = {
            "html": "100%",
            "css": "95%",
            "javascript": "70%",
            "php": "65%",
            "angular": "60%"
        },
        multiply = 4;

    $.each( lang, function( language, pourcent) {
        var delay = 700;
        setTimeout(function() {
            $('#'+language+'-pourcent').html(pourcent);
        },delay*multiply);
        multiply++;
    });
})(jQuery);