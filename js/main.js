$(document).ready(function () {
	/*
	 * Purpose: Show text when an image is hovered over
	 * TODO: Incorporate animate() function to slow down the bg-color change(?)
	 */
	$('.project').hover(function () {
		$(this).find('h6').fadeTo('fast', 0.8);
		$(this).css('background-color', 'lightgray');
	}, function () {
		$(this).find('h6').fadeTo('fast', 0);
		$(this).css('background-color', 'transparent');
	});
	
	$('#nav').singlePageNav(
		{'currentClass':'active',
		 'offset'      :'65'});
	
	/*
	 * Purpose: Navbar highlight and active class 
	 */
	$('ul.nav li a:contains(Welcome)').parent().addClass('active');
	$('ul.nav li a').click(function () {
		$parent = $(this).parent();
		if (!$parent.hasClass('active')) {
			$parent.addClass('active');
			$parent.siblings('li').removeClass('active');
		};
	});

});



/*
 * Purpose:
 */