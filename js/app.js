$(document).ready(function() {

	// if mouse enters .ryu div, then show ready image
	$('.ryu').mouseenter(function() {
    	console.log ('mouse entered .ryu div');

    	$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
  	});

  	$('.ryu').mouseleave (function() {
    	console.log ('mouse entered .ryu div');

    	$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
  	});

  	$('.ryu').mousedown(function() {
    	console.log("mousedown double");
    	// play hadouken sound
    	playHadouken();

    	$('.ryu-ready').hide();
    	$('.ryu-cool').hide();
    	$('h2').hide();
    	$('.ryu-throwing').show();

    	// show hadouken and animate it to the right of the screen
    	$('.hadouken').finish().show().animate(
  			{'left': '300px'},
  			500,
  			function() {
    		$(this).hide();
    		$(this).css('left', '-136px');
  			}
		);
  	})

  	$('.ryu').mouseup(function() {
    	console.log('mouseup');
    	// ryu goes back to his ready position
    	$('.ryu-ready').show();
    	$('h2').show();
    	$('.ryu-throwing').hide();
    	$('.hadouken').hide();
  	});

  	
  	$('body').keydown(function(event) {
  		
    	console.log("a key was pressed down; code is " + event.which);

    	// ryu goes back to his ready position
    	if ('88'==event.which)
    	{
    		console.log("x keydown");
    		$('.ryu-still').hide();
    		$('.ryu-ready').hide();
    		$('.ryu-cool').show();

    	}
    	
  	});


  	function playHadouken () {
 		$('#hadouken-sound')[0].volume = 0.5;
  		$('#hadouken-sound')[0].load();
  		$('#hadouken-sound')[0].play();
	}

});