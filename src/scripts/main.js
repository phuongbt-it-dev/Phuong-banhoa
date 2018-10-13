// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		autoplayTimeout: 5000,
		items:1,
		dots: false,
		nav:false,
	});
	$('.home-intro .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		autoplayTimeout: 5000,
		items:1,
		dots: false,
		nav:false,
	});
	$('.home-form .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		autoplayTimeout: 5000,
		items:1,
		dots: false,
		nav:false,
	});
	$('#demoResAllInOneMenu').kResponsiveMenu({
		animationSpeed: 'slow', // slow, fast, 200
		resizeWidth: 'md', // 'xs', 'sm', 'md', 'lg', 'xl', 480,
		menuIcon: '<i class="fa fa-bars"></i>',
		menuPush: 'left', // right, left
		menuPushPosition: 'fixed', // absolute
		menuPushWidth: '300px', // px, %, rem
	});
});
