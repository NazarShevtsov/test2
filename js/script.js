$(document).ready(function(){
	$('.slider').slick({
		arrows:true, // do you wanna see arrows?
		dots:true, // do you wanna see dots?
		slidesToShow:1, //how many slides should show
		slidesToScroll:1, // how many slides should scroll by one press 
		speed:1000, //speed of scrolling
		easing:'ease', //type of animation by scrolling
		infinite:true, //do you want a infinite slider?
		initialSlide:0, //which slide should start slider?
		autoplay:false, //autoplay scrolling slides
		autoplaySpeed:1500, //period of scrolling 
		pauseOnFocus:true, //pause scrolling when cursor click slide
		pauseOnHover:true, //pause scrolling when cursor hovers slide
		pauseOnDotsHover:true, //pause scrolling when cursor hovers dots
		draggable:true, //if you want or dont want to swipe slides on PC
		swipe:true, //if you want or dont want to swipe slides on mobile
		touchThreshold:4, //how you should swipe on mobile <5 hard or >5 ease
		touchMove:true, //do you wanna swipe slide by clicking it or not
		waitForAnimate:false, //do you wanna wait when animation will end by clicking arrows or dot or not
		centerMove:true, //when slide is in center it become main and you can change styles for another slides
		veriableWidth:false, //the content of the slide itself determines its width (can combinate with centerMove)
		rows:1, //how many rows of slides do you want
		slidePerRow:1, //how many slides do you want in row
		vertical:false, //do you want a vertical slider? (But at the start change slider`s display block and add height for slider items for quality)
		verticalSwiping:false, // if you use vertical slider change verticalSwiping on the true
	});
});