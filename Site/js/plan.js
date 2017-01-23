$(document).ready(function() {
	$('.spType').hide();
	$('.mpType').hide();
	$('.scOption').hide();
	$('.smOption').hide();
	$('.mfcOption').hide();
	$('.mfmOption').hide();
	$('.submit').hide();
	$('.amount').hide();
	$('.personalInfo').hide();
	
	var colourTotal = 0;
	//var multiColourTotal = 0;
	var colourDisplay = 0;
	
	//var multiMonoTotal = 0;
	var monoTotal= 0;
	var monoDisplay = 0;
	
	
	/******************************************* SIMPLE PRINTER FUNCTIONS ****************************************/
	
	$('#simple').click(function() {
		$('.spType').slideToggle('slow');
			if($("#simple").prop('checked') == false) {
				
				if($("#simple").prop('checked') == false && $("#multi").prop('checked') == false) {
					$('.submit').stop().animate({width: 'hide'}, 'fast');
					$('.amount').stop().fadeOut('fast');
				}
				
				$('.sColour').prop('checked', false);
				$('.scOption').slideUp('slow');
				
			
				$('.sMono').prop('checked', false);
				$('.smOption').slideUp('slow');
				
				$('.sc').each(function() {
					$(this).val(0);
					colorDisplay = 0;
					
				});
				
				$('.sm').each(function() {
					$(this).val(0);
					monoDisplay = 0;
					
				});
				
				colourValues();
				monoValues();
				displayAmount();
				
			}	
		
		
	});
	
	$('.sColour').click(function() {		
		$('.scOption').slideToggle('slow');	
		
		if($(this).prop('checked') == false)	{
			$('.sc').each(function() {
					$(this).val(0);
					
			});
			colourValues();
			//monoValues();
			displayAmount();
		}
	});
	
	$('.sMono').click(function() {
		$('.smOption').slideToggle('slow');	
		
		if($(this).prop('checked') == false)	{
			$('.sm').each(function() {
					$(this).val(0);
					
			});
			//colourValues();
			monoValues();
			displayAmount();
		}
	});

	$('.scOption').on('input', function() {
		colourValues();
	});
	
	$('.smOption').on('input', function() {
		monoValues();
		
	});
	
	/******************************************* MULTI PRINTER FUNCTIONS ****************************************/
	
	
	$('#multi').click(function() {
		$('.mpType').slideToggle('slow');
		
		if($("#multi").prop('checked') == false) {
				
				
				if($("#simple").prop('checked') == false && $("#multi").prop('checked') == false) {
					$('.submit').stop().animate({width: 'hide'}, 'fast');
					$('.amount').stop().fadeOut('fast');
				}
				
				$('.mfColour').prop('checked', false);
				$('.mfcOption').slideUp('slow');
				
			
				$('.mfMono').prop('checked', false);
				$('.mfmOption').slideUp('slow');
				
				$('.mfc').each(function() {
					$(this).val(0);
					
				});
				
				$('.mfm').each(function() {
					$(this).val(0);
					
				});
				
				colourValues();
				monoValues();
				displayAmount();
				
			}
	});
	
	
	
	
	$('.mfColour').click(function() {
		$('.mfcOption').slideToggle('slow');
		
		if($(this).prop('checked') == false)	{
			$('.mfc').each(function() {
					$(this).val(0);
					
			});
			colourValues();
			//monoValues();
			displayAmount();
		}
	});
	
	$('.mfMono').click(function() {
		$('.mfmOption').slideToggle('slow');
		
		if($(this).prop('checked') == false)	{
			$('.mfm').each(function() {
					$(this).val(0);
					
			});
			//colourValues();
			monoValues();
			displayAmount();
		}	
	});
	
	
	
	
	$('.mfcOption').on('input', function() {
		colourValues();
	});
	
	$('.mfmOption').on('input', function() {
		monoValues();
		
	});
	
	$('.submit').click(function() {
		$('.printerForm').fadeOut().empty();
		//$('.printerForm').hide();
		$('.personalInfo').fadeIn('slow');
		
		$('.printerForm').fadeOut().empty();
		$(".step").fadeOut(function() {
			$(this).fadeIn('fast').html("2");
		});
		
		
		$('.stepHeader').fadeOut(function() {
			$(this).fadeIn('fast').html("Personal Information");
		})
		
		
		/*
		$('.printerForm').fadeIn('slow').html(function() {
			$(this).append('<input type="text" class="form-control br-radius-zero" placeholder="First Name" id="lol" name="fname" required/><br>');
			$(this).append('<input type="text" class="form-control br-radius-zero" placeholder="Last Name" id="lol" name="lname"  required/><br>');
			$(this).append('<input type="email" class="form-control br-radius-zero" placeholder="Email"  id="lol" name="email" required/><br>');
			$(this).append('<input type="tel" class="form-control br-radius-zero" placeholder="Phone Number"  id="lol" name="phone" pattern="\d{3}[\-]\d{3}[\-]\d{4}"/><br>');
			$(this).append('<input type="submit" id="testing" class="submit btn btn-form" value="submit" onclick="sendMail()">');
		});*/
	});
	
	
	/******************************************* GENERAL FUNCTIONS ****************************************/
	
	function displayAmount() {
		$('.amount').fadeIn('slow').html("You need " + colourDisplay + " Colour Printers and " + monoDisplay + " Mono Printers");
		
		
	}
	
	function colourValues() {
		$('.sc').each(function() {
			colourTotal += parseInt($(this).val());
			
			if (colourTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
		});
		
		colourDisplay = colourTotal;
		
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
		
		//displayAmount();
		//colourTotal = 0;
		
		$('.mfc').each(function() {
			colourTotal += parseInt($(this).val());
			if (colourTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
		});
		colourDisplay = colourTotal;
		
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
		
		displayAmount();
		colourTotal = 0;
		
	}
	
	function monoValues() {
		$('.sm').each(function() {
			monoTotal += parseInt($(this).val());
			if (monoTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
			
		});
		monoDisplay = monoTotal;
		
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
			
			
		//displayAmount();
		//monoTotal = 0
		
		$('.mfm').each(function() {
			monoTotal += parseInt($(this).val());
			if (monoTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
			
		});
		monoDisplay = monoTotal;
		
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
			
			
		displayAmount();
		monoTotal = 0;
	}
	
});
	
	
	