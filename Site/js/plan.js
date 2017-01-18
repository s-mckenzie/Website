$(document).ready(function() {
	$('.pType').hide();
	$('.scOption').hide();
	$('.smOption').hide();
	$('.submit').hide();
	
	
	$('#simple').click(function() {
		$('.pType').slideToggle('fast', function() {
			if($("#simple").prop('checked') == false) {
				$('.sColour').prop('checked', false);
				$('.scOption').slideUp();
			
				$('.sMono').prop('checked', false);
				$('.smOption').slideUp();
			}	
		});
		
	});
	
	$('.sColour').click(function() {
		$('.scOption').slideToggle(400);	
	});
	
	$('.sMono').click(function() {
		$('.smOption').slideToggle(400);	
	});
	
	var colourTotal = 0;
	var monoTotal = 10;


	$('.scOption').on('input', function() {
		$('.sc').each(function() {
			colourTotal += parseInt($(this).val());
			
		});
		$('.amount').html("You need " + colourTotal + " Printers");
		colourTotal = 0;
	});

});