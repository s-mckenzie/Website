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
		$('.personalInfo').show().animate( {'margin-left':'3.7%' },1000);
		//.fadeIn('slow');
		
		//$('.printerForm').fadeOut().empty();
		$(".step").fadeOut(function() {
			$(this).fadeIn('fast').html("2");
		});
		
		
		$('.stepHeader').fadeOut(function() {
			$(this).fadeIn('fast').html("Personal Information");
		})
	
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

function moreFields() {
		/*

Contact Form Control File

Obtains data from View (HTML) and sends it to process in the Model (PHP).

*/

// Indicates if an error has been found
var error;
sendMail();

// =========================================================================
// sendMail
// =========================================================================
// Main function for recieving and validating the user's inputs. When 
// finished, information will be sent to the email transfer php function to
// be prepared and sent to our email.
// -------------------------------------------------------------------------
function sendMail(){
	
	error = false;		// Reset error to assume there's no errors
	
	// Fetch user's information
	var fname = document.getElementById('fname').value;
	var email = document.getElementById('email').value;
	var lname = document.getElementById('lname').value;
	var company = document.getElementById('company').value;
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var province = document.getElementById('province').value;
	var postal = document.getElementById('postal').value;
	
	//-----------------------------//
	// Validate user's information //
	//-----------------------------//
	
	// Did user input their name?
	if (fname == ''){
		validateActions("nameVal", "fnameGroup", "First name field is required", true);
	}
	else{
		validateActions("nameVal", "fnameGroup", "", false);
	}
	
	// Did user input their phone number?
	if (phone == '') {
		validateActions("phoneVal", "phoneGroup", "Phone number field is required", true);
	}
	else {
		// Phone Regex 
		var re = /\d{3}[\-]\d{3}[\-]\d{4}$/
		
		// Is the phone number invalid?
		if (!re.test(phone)) {
			validateActions("phoneVal", "phoneGroup", "Phone number field is invalid", true);
		}
		else {
			validateActions("phoneVal", "phoneGroup", "", false);
		}
	}
	
	
	// Did user input their email?
	if (email == ''){
		validateActions("emailVal", "emailGroup", "Email field is required", true);
	}
	else{
		// Email Regex
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		
		// Is the email invalid?
		if (!re.test(email)){
			validateActions("emailVal", "emailGroup", "Given email is invalid", true);
		}
		else{
			validateActions("emailVal", "emailGroup", "", false);
		}

	}
	
	// Did user input their last name?
	if (lname == ''){
		validateActions("lnameVal", "lnameGroup", "Last name field is required", true);
	}
	else{
		validateActions("lnameVal", "lnameGroup", "", false);
	}
	
	
	// Did user input their company name?
	if (company == ''){
		validateActions("cnameVal", "cnameGroup", "Company name field is required", true);
	}
	else{
		validateActions("cnameVal", "cnameGroup", "", false);
	}
	
	// Did user input their address?
	if (address == '') {
		validateActions("addressVal", "addressGroup", "Address field is required", true);
	}
	else {
		validateActions("addressVal", "addressGroup", "", false);
	}
	
	// Did user input their province?
	if (province == '') {
		validateActions("provinceVal", "provinceGroup", "Province field is required", true);
	}
	else {
			validateActions("provinceVal", "provinceGroup", "", false);
	}
	
	if (postal == '') {
		validateActions("postalVal", "postalGroup", "Postal Code field is required", true);
	}
	else {
		
		//var re = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/
		var re = /^(?!.*[DFIOQUdfioqu])[A-VXYa-vxy][0-9][A-Za-z] ?[0-9][A-Za-z][0-9]$/
		
		if (!re.test(postal)) {
			validateActions("postalVal", "postalGroup", "Postal Code field is invalid", true);
		}
		else {
			validateActions("postalVal", "postalGroup", "", false);
		}
	
		
	}
	
	// Did we have an error?
	if (error){
		$("#errormessage").addClass("show");
		$("#sendmessage").removeClass("show");
		return false;																		// Prevent form from sending
	}
	else{
		// Empty each field (to prevent submit button spam)
		document.getElementById('fname').value = "";
		document.getElementById('email').value = "";
		document.getElementById('lname').value = "";
		document.getElementById('company').value = "";
		document.getElementById('phone').value = "";
		document.getElementById('address').value = "";
		document.getElementById('province').value = "";
		document.getElementById('postal').value = "";
		
		$("#errormessage").removeClass("show");
		$("#sendmessage").addClass("show");
		// Scroll back to top of page
		$('html, body').animate({scrollTop: 0}, 600);
		// Disable the submit button
		$('.second-submit').attr('disabled','disabled');
	}
	
	
	//----------------------------------------//
	// Send user's information to create mail //
	//----------------------------------------//
	
	// Stores user's information
	var data = {};
	data.fname = fname;
	data.email = email;
	data.lname = lname;
	data.company = company;
	
	//alert(data.name + " || " + data.email + " || " + data.subject + " || " + data.message); 
	
	//var loc = window.location.pathname;
	//var dir = loc.substring(0, loc.lastIndexOf('/'));
	//alert(dir);
	
	//$.post(dir + "/contactform/emailtransfer.php", data, mailReturn);
}

// =========================================================================
// mailReturn
// =========================================================================
// Function does any finishing touches depending on if the email was able to
// sent or not.
// -------------------------------------------------------------------------
function mailReturn(data, status){
	var obj = jQuery.parseJSON(data);
	
	alert("test");
	alert(obj);
	
	// There was no error
	if (obj.error == ""){
		 //alert("Success : " + obj.success);
		 $("#sendmessage").addClass("show"); 
	}
	// There was an error
	else {
		 //alert("Error : " + obj.error);
		 $("#errormessage").html("An unexpected error has occured. Please try again.");
		 $("#errormessage").removeClass("show");	 
	}
}

// =========================================================================
// validateActions
// =========================================================================
// Function changes the css and text during validation such as adding error
// messages, hiding those messages, and/or change textbox's coloured
// underline.
// Parameters are: 	Validation Message ID
//					Validation Group ID
//					Error Message (if given)
//					Whether we found an error or not
// -------------------------------------------------------------------------
function validateActions(val_id, group_id, msg, err){
	document.getElementById(val_id).innerHTML = "<span class='label label-danger'>"+ msg + "</span>";	// Add error message
	
	// Show/Hide error
	if(err){		
		$("#" + val_id).addClass("show");				// Show error
		$("#" + group_id).addClass("has-error");		// Change underline to red
		error = err;									// Indicate that we encountered an error if we haven't already
	}
	else{
		$("#" + val_id).removeClass("show");			// Show error
		$("#" + group_id).removeClass("has-error");		// Return underline back to blue
	}
}

}