(function ($) {
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {
		// Only creates scrolling effect on hrefs that aren't links to another page
		// This is determined via id
		if ($(this).attr("id") != "links"){
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});	
		}     
    });
       
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    
})(jQuery);


// Function checks plan checkboxes to display other options


// Function to load header and footer html on any page (really reduces the repititive)
$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
		  var file = 'views/' + $(this).data('include') + '.html';
		  $(this).load(file);
    });
});
