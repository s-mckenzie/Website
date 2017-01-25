$(document).ready(function() {

	// Hiding certain form elements on load. elements will be shown as user completes the form 
	$('.spType').hide();
	$('.mpType').hide();
	$('.scOption').hide();
	$('.smOption').hide();
	$('.mfcOption').hide();
	$('.mfmOption').hide();
	$('.submit').hide();
	$('.amount').hide();
	$('.personalInfo').hide();
	
	// Keeps track of the number of color and mono printers the user needs
	var colourTotal = 0;
	var colourDisplay = 0;
	
	var monoTotal= 0;
	var monoDisplay = 0;
	
	
	/******************************************* SIMPLE PRINTER FUNCTIONS ****************************************/
	
	// Does the user need simple printers?
	$('#simple').click(function() {
		$('.spType').slideToggle('slow'); //Display the list of simple printers; color and mono
		
			// Has the user unchecked simple printers?
			if($("#simple").prop('checked') == false) {

                // No printers are selected; hide the submit button and the paragraph informing user with some information
                if ($("#simple").prop('checked') == false && $("#multi").prop('checked') == false) {
                    $('.submit').stop().animate({width: 'hide'}, 'fast');
                    $('.amount').stop().fadeOut('fast');
                }

                // Uncheck and hide the color printer options
                $('.sColour').prop('checked', false);
                $('.scOption').slideUp('slow');

                // Uncheck and hide the mono printer options
                $('.sMono').prop('checked', false);
                $('.smOption').slideUp('slow');

                // Reset all simple color printer amounts to 0
                $('.sc').each(function () {
                    $(this).val(0);
                    colorDisplay = 0;
                });

                // Reset all simple mono printer amounts to 0
                $('.sm').each(function () {
                    $(this).val(0);
                    monoDisplay = 0;
                });


                colourValues();
                monoValues();
                //displayAmount(); // Displays the new amount of printers to the user

            }
	});
	
	// Has the user checked or unchecked simple color printers?
	$('.sColour').click(function() {		
		$('.scOption').slideToggle('slow');	 // Toggle the options on and off
		
		// If user unchecked, reset all values to 0
		if($(this).prop('checked') == false) {
			$('.sc').each(function() {
					$(this).val(0);
					
			});
			
			colourValues();
			displayAmount(); // Displays the new amount of printers to the user 
		}
	});
	
	// Has the user checked or unchecked simple mono printers?
	$('.sMono').click(function() {
		$('.smOption').slideToggle('slow');	// Toggle the options on and off
		
		// If user unchecked, reset all values to 0
		if($(this).prop('checked') == false) {
			$('.sm').each(function() {
					$(this).val(0);
					
			});
			
			monoValues();
			displayAmount(); // Displays the new amount of printers to the user 
		}
	});
	
	// On input change; grab, store and display the amount of color printers
	$('.scOption').on('input', function() {
		colourValues();
	});
	
	// On input change; grab, store and display the amount of mono printers
	$('.smOption').on('input', function() {
		monoValues();
		
	});
	
	/******************************************* MULTI PRINTER FUNCTIONS ****************************************/
	
	// Does the user need multi-function printers?
	$('#multi').click(function() {
		$('.mpType').slideToggle('slow'); //Display the list of multi-function printers; color and mono
		
		// Has the user unchecked mfc printers?
		if($("#multi").prop('checked') == false) {
				
				// No printers are selected; hide the submit button and the paragraph informing user with some information
				if($("#simple").prop('checked') == false && $("#multi").prop('checked') == false) {
					$('.submit').stop().animate({width: 'hide'}, 'fast');
					$('.amount').stop().fadeOut('fast');
				}
				
				// Uncheck and hide the color printer options
				$('.mfColour').prop('checked', false);
				$('.mfcOption').slideUp('slow');
				
				// Uncheck and hide the mono printer options
				$('.mfMono').prop('checked', false);
				$('.mfmOption').slideUp('slow');
				
				// Reset all mfc color printer amounts to 0
				$('.mfc').each(function() {
					$(this).val(0);
					
				});
				
				// Reset all mfc color printer amounts to 0
				$('.mfm').each(function() {
					$(this).val(0);
					
				});
				
				colourValues();
				monoValues(); 
				//displayAmount(); // Displays the new amount of printers to the user 	
			}
	});
	
	// Has the user checked or unchecked mfc color printers?
	$('.mfColour').click(function() {
		$('.mfcOption').slideToggle('slow');
		
		// If user unchecked, reset all values to 0
		if($(this).prop('checked') == false)	{
			$('.mfc').each(function() {
					$(this).val(0);
					
			});
			colourValues();
			//monoValues();
			displayAmount(); // Displays the new amount of printers to the user 
		}
	});
	
	// Has the user checked or unchecked mfc mono printers?
	$('.mfMono').click(function() {
		$('.mfmOption').slideToggle('slow');
		
		// If user unchecked, reset all values to 0
		if($(this).prop('checked') == false)	{
			$('.mfm').each(function() {
					$(this).val(0);
					
			});
			//colourValues();
			monoValues();
			displayAmount();
		}	
	});
	
	// On input change; grab, store and display the amount of color printers
	$('.mfcOption').on('input', function() {
		colourValues();
	});
	
	// On input change; grab, store and display the amount of mono printers
	$('.mfmOption').on('input', function() {
		monoValues();
		
	});
	
	
	
	
	/******************************************* GENERAL FUNCTIONS ****************************************/
	
	// No validation has been added to submit button as of now!!!! Remove this comment when validation is complete
	// User has clicked submit
	$('.submit').click(function() {
		$('.printerForm').fadeOut().empty(); // Fade out the printer plans form
		$('.personalInfo').show().animate( {'margin-left':'3.7%' },1000); // Fade in the personal information form

		// Fade out the previous step # the user was on, fade in the new step # the user is on
		$(".step").fadeOut(function() {
			$(this).fadeIn('fast').html("2");
		});
		
		// Fade out the previous step header the user was on, fade in the new step header the user is on
		$('.stepHeader').fadeOut(function() {
			$(this).fadeIn('fast').html("Personal Information");
		})
	
	});
	
	// Displays the amount of each type of printer the user is requesting
	function displayAmount() {
		$('.amount').fadeIn('slow').html("You need " + colourDisplay + " Colour Printers and " + monoDisplay + " Mono Printers");
	}
	
	// Updates the color printer amount based on form values
	function colourValues() {
		$('.sc').each(function() { // Simple color printers
			colourTotal += parseInt($(this).val());
			
			// Show the submit button when the user is requesting at least 1 printer
			if (colourTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
		});
		
		colourDisplay = colourTotal;
		
		// Hide the submit button if no printers are selected
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
		
		
		$('.mfc').each(function() { // Mfc color printers
			colourTotal += parseInt($(this).val());
			
			// Show the submit button when the user is requesting at least 1 printer
			if (colourTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
		});
		colourDisplay = colourTotal;
		
		// Hide the submit button if no printers are selected
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
		
		// Display amount only if at least 1 printer is selected
		if (colourTotal == 0 && monoTotal == 0) {
			;
		}
		else {
			displayAmount();
		}
		colourTotal = 0; //reset the color total
		
	}
	
	// Updates the mono printer amount based on form values
	function monoValues() {
		$('.sm').each(function() { // Simple mono printers
			monoTotal += parseInt($(this).val());
			
			// Show the submit button when the user is requesting at least 1 printer
			if (monoTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
				
		});
		monoDisplay = monoTotal;
		
		// Hide the submit button if no printers are selected
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
		
		$('.mfm').each(function() { // Mfc mono printers
			monoTotal += parseInt($(this).val());
			
			// Show the submit button when the user is requesting at least 1 printer
			if (monoTotal > 0) {
				$('.submit').stop().animate({width: 'show'});
			}
			
			
		});
		monoDisplay = monoTotal;
		
		// Hide the submit button if no printers are selected
		if (monoDisplay == 0 && colourDisplay == 0) {
				$('.submit').stop().animate({width: 'hide'}, 'fast');
		}
			
		// Display amount only if at least 1 printer is selected	
		if (colourTotal == 0 && monoTotal == 0) {
			;
		}
		//reset the color total
		else {
			displayAmount();
		}
		monoTotal = 0;
	}
	
});

// Indicates if an error has been found
var error;

// =========================================================================
// submitForm
// =========================================================================
// Main function for receiving and validating the user's inputs. When
// finished, information will be sent to the email transfer php function to
// be prepared and sent to our email.
// -------------------------------------------------------------------------
function submitForm(){
	
	error = false;	// Reset error to assume there's no errors
	
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
		scrollToError(); // Scrolls to the first error/invalid input
		return false; // Prevent form from sending
		
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

		// Show success message to user
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
		$("#" + group_id).addClass("tester");			// Add a class only to those with errors
		error = err;									// Indicate that we encountered an error if we haven't already	
													
	}
	else{
		$("#" + val_id).removeClass("show");			// Show error
		$("#" + group_id).removeClass("has-error");		// Return underline back to blue
	}
}

function scrollToError() {
	$('html, body').animate({scrollTop: ($('.tester').first().offset().top - 100)} ,500); // Animation to scroll to first error
}