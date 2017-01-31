/*

Contact Form Control File

Obtains data from View (HTML) and sends it to process in the Model (PHP).

*/

// Indicates if an error has been found
var error;

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
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	
	//-----------------------------//
	// Validate user's information //
	//-----------------------------//
	
	// Did user input their name?
	if (name == ''){
		validateActions("nameVal", "nameGroup", "Name field is empty", true);
	}
	else{
		validateActions("nameVal", "nameGroup", "", false);
	}
	
	
	// Did user input their email?
	if (email == ''){
		validateActions("emailVal", "emailGroup", "Email field is empty", true);
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
	
	// Did user input an email subject?
	if (subject == ''){
		validateActions("subjectVal", "subjectGroup", "Subject field is empty", true);
	}
	else{
		// Is the email subject ridiculously long?
		if (subject.length > 100){
			validateActions("subjectVal", "subjectGroup", "We appreciate the long subject title but please shorten it to 100 words or less.", true);
		}
		else{
			validateActions("subjectVal", "subjectGroup", "", false);
		}
	}
	
	
	// Did user input their email message?
	if (message == ''){
		validateActions("messageVal", "messageGroup", "Message field is empty", true);
	}
	else{
		// Is the email message ridiculously long?
		if (message.length > 2000){
			validateActions("messageVal", "messageGroup", "We appreciate the long message but please shorten it to 2000 words or less.", true);
		}
		else{
			validateActions("messageVal", "messageGroup", "", false);
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
		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('subject').value = "";
		document.getElementById('message').value = "";
		
		$("#errormessage").removeClass("show");
		$("#sendmessage").addClass("show");
	}
	
	
	//----------------------------------------//
	// Send user's information to create mail //
	//----------------------------------------//
	
	// Stores user's information
	var data = {};
	data.name = name;
	data.email = email;
	data.subject = subject;
	data.message = message;
	
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
		$("#" + group_id).removeClass("has-error");		// Return underline back to green
	}
}
