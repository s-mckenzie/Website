$(document).ready(function() {
	$('.pType').hide();
	$('.scOption').hide();
	$('.smOption').hide();
	$('.submit').hide();
	
	
	$('#simple').click(function() {
		$('.pType').slideToggle(400, function() {
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
	
	var colourTotal = 20;
	var monoTotal = 10;
	
	
	//var str = $('.amount').text();
	//alert(str);
	
	$('.scOption').on('input',function() {
		colourTotal += $(this).val();
		$('.amount').html("You need " + colourTotal + " Printers");
	});
	
	
	$('.amount').html("You need " + colourTotal + " Printers");
	
	
	//var newStr = "You need 0 colour printers and 0 mono printers. If this is correct you may click submit";


});